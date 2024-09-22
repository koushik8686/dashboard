import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SalesChart from './components/SalesChart';
import SalesByRegion from './components/SalesByRegion';
import TopProductsTable from './components/TopProductsTable';
import FilterControls from './components/FilterControls';
import DarkModeToggle from './components/DarkModeToggle';
import ExportButton from './components/ExportButton';

// Mock data
const salesData = [
  { date: '2023-01-01', sales: 400, region: 'North' },
  { date: '2023-02-01', sales: 600, region: 'South' },
  { date: '2023-03-01', sales: 800, region: 'East' },
  { date: '2023-04-01', sales: 500, region: 'West' },
];

const topProducts = [
  { name: 'Product A', unitsSold: 120, revenue: 2000 },
  { name: 'Product B', unitsSold: 80, revenue: 1500 },
  { name: 'Product C', unitsSold: 50, revenue: 1000 },
];

const App: React.FC = () => {
  const [filteredSalesData, setFilteredSalesData] = useState(salesData);
  const [filteredProducts, setFilteredProducts] = useState(topProducts);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const handleDateChange = (startDate: string, endDate: string) => {
    const filteredData = salesData.filter(data => {
      const date = new Date(data.date);
      return date >= new Date(startDate) && date <= new Date(endDate);
    });
    setFilteredSalesData(filteredData);
  };

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    const filteredData = salesData.filter(data => data.region === region);
    setFilteredSalesData(filteredData);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4">
          <FilterControls onDateChange={handleDateChange} onRegionChange={handleRegionChange} />

          {/* Section for Overview */}
          <section id="overview" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Sales Overview</h2>
            <SalesChart data={filteredSalesData} />
          </section>

          {/* Section for Sales by Region */}
          <section id="region" className="mb-8">
  <h2 className="text-2xl font-bold mb-4">Sales by Region</h2>
  <SalesByRegion data={filteredSalesData} />
</section>


          {/* Section for Top Products */}
          <section id="products" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Top Products</h2>
            <TopProductsTable products={filteredProducts} />
            <ExportButton data={filteredProducts} />
          </section>

          <DarkModeToggle />
        </main>
      </div>
    </div>
  );
};

export default App;
