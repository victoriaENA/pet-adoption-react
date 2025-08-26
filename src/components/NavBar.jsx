import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50 h-14">
      <div className="max-w-6xl mx-auto px-16 py-4 flex justify-between items-center h-full">
        <h1 className="text-xl font-bold text-black" ><a className="text-inherit hover:text-blue-500" href="#top" >PawConnect</a></h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#top" className="hover:text-blue-500">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-500">About us</a>
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
