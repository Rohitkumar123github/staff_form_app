import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/"><h1 className="text-2xl font-bold">My App</h1></Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="text-gray-300 hover:text-white">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/form" className="text-gray-300 hover:text-white">
              Form
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
