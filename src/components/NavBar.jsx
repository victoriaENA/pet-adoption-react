import React from "react";

const NavBar = () => {
  return (
    
    <nav className="fixed w-full bg-gray-200   z-50 h-14"> { /*z index measures the stack order of elements*/}
      <div className="max-w-6xl mx-50 py-4 flex justify-between items-center h-full">
        <h1 className="text-lg font-extrabold text-black flex items-center gap-2 font-nunito ">
          <a href="#top" className="flex items-center text-inherit">
            <img 
              src="/src/navPaw.png"   
              className="w-6 h-6 object-contain  "
            />
            PawConnect
          </a>
        </h1>

        <ul className="flex gap-6">
          <li className="px-4 " >
            <a href="#gallery" className="font-nunito font-bold ">Adopt</a>
          </li>
          <li>
            <a href="#contact" className=" font-nunito font-bold">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
