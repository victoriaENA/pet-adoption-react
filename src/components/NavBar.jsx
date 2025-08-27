import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed w-full bg-blue-100  z-50 h-14">
      <div className="max-w-6xl mx-50 py-4 flex justify-between items-center h-full">
        <h1 className="text-xl font-bold text-black flex items-center gap-2">
          <a href="#top" className="flex items-center text-inherit">
            <img 
              src="/src/3.png"   // put your image path here
              className="w-6 h-6 object-contain"
            />
            PawConnect
          </a>
        </h1>

        <ul className="flex space-x-6">
          <li className="px-4" >
            <a href="#gallery" className="hover:text-blue-500">Adopt</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
