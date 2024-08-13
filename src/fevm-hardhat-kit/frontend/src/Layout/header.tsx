import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/deploy">Deploy Contract</Link></li>
          <li><Link to="/interact">Interact with Contract</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;