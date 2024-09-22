import React from 'react';
import { saveAs } from 'file-saver';

const ExportButton: React.FC<{ data: any[] }> = ({ data }) => {
  const exportToCSV = () => {
    const csvData = data.map(row => Object.values(row).join(",")).join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });
    saveAs(blob, "top-products.csv");
  };

  return (
    <button className="bg-blue-500 text-white p-2 rounded" onClick={exportToCSV}>
      Export to CSV
    </button>
  );
};

export default ExportButton;
