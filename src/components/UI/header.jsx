import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 px-8 bg-white text-blue-950 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <span className="text-2xl font-semibold">Nami</span>
      </div>
      <div className="relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center"
        >
          <span className="text-sm">U</span>
        </button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Iniciar sesión
            </a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Configuración
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;