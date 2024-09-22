// components/FilterControls.tsx
import React, { useState } from 'react';

interface FilterControlsProps {
  onDateChange: (startDate: string, endDate: string) => void;
  onRegionChange: (region: string) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ onDateChange, onRegionChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [region, setRegion] = useState('');

  const handleDateFilter = () => {
    onDateChange(startDate, endDate);
  };

  const handleRegionFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    onRegionChange(selectedRegion);
  };

  return (
    <div className="mb-4">
      <div>
        <label>Date Range:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border p-2"
        />
        <button onClick={handleDateFilter} className="bg-blue-500 text-white p-2 ml-2">
          Apply Date Filter
        </button>
      </div>

      <div className="mt-4">
        <label>Region:</label>
        <select value={region} onChange={handleRegionFilter} className="border p-2 ml-2">
          <option value="">All Regions</option>
          <option value="North America">North America</option>
          <option value="Europe">Europe</option>
          <option value="Asia">Asia</option>
        </select>
      </div>
    </div>
  );
};

export default FilterControls;
