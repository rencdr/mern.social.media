// components/Navbar.js
import React from 'react';

const Navbar = () => {
  const handleLogout = () => {
    localStorage.removeItem('userId');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div   className="text-white font-bold">MERN Social Media</div>
          <div className="space-x-4">
            {localStorage.getItem('userId') ? (
              <>
                <a href="/" className="text-white hover:text-gray-300" onClick={handleLogout}>Logout</a>
                <a href="/post" className="text-white hover:text-gray-300">Create Post</a>
              </>
            ) : (
              <a href="/auth" className="text-white hover:text-gray-300">Login</a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
