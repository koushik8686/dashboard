
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button className="text-sm mb-4" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 z-20 p-2 bg-gray-800 text-white rounded-full sm:hidden"
      >
        <AiOutlineMenu size={24} />
      </button>

      {/* Sidebar Container */}
      <aside
        className={`bg-gray-900 text-white h-full transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } fixed sm:relative w-64 p-4 z-10`}
      >
        <button
          className="text-sm mb-4 sm:hidden"
          onClick={toggleSidebar}
        >
          {isOpen ? 'Collapse' : 'Expand'}
        </button>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#overview">Overview</a>
            </li>
            <li className="mb-2">
              <a href="#region">Sales by Region</a>
            </li>
            <li className="mb-2">
              <a href="#products">Top Products</a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
