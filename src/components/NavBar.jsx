import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50 h-14">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center h-full">
        <h1 className="text-xl font-bold text-black" ><a className="text-inherit hover:text-blue-500" href="#top" >PawConnect</a></h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#gallery" className="hover:text-blue-500">Dogs</a>
          </li>
          <li>
            <a href="#gallery" className="hover:text-blue-500">Cats</a>
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
