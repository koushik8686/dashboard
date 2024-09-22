import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Sales Dashboard</h1>
      
      {/* User Profile Dropdown */}
      <div className="relative">
        <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
          <img className="w-8 h-8 rounded-full" src="/user-profile.png" alt="User" />
          <span className="ml-2">User</span>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
            <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Profile
            </a>
            <a href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Settings
            </a>
            <a href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
              Logout
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
