
import React from 'react';

type Product = {
  name: string;
  unitsSold: number;
  revenue: number;
};

type TopProductsTableProps = {
  products: Product[];
};

const TopProductsTable: React.FC<TopProductsTableProps> = ({ products }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mt-0">
      <h2 className="text-lg font-semibold mb-4">Top Products</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Product Name</th>
            <th className="py-2">Units Sold</th>
            <th className="py-2">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.unitsSold}</td>
              <td className="border px-4 py-2">${product.revenue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopProductsTable;
