import React, { useState } from "react";


const FilterBar = ({onFilter}) => {

    const [filters, setFilters] = useState({  //filters is state object that keeps track of the selected filters
    type: "",
    gender: "",    // filters are empty - shows everything 
    size: "",
    age: ""
  });   

  const handleChange = (e) => {
    const { name, value } = e.target;  //e.target retrieves the element that triggered the event
    const newFilters = { ...filters, [name]: value };  //retrieves filter pairs and populates them with name & value
    setFilters(newFilters); //sets new filters
    onFilter(newFilters);  //calls function in Gallery.jsx 
  };

  return (
    <div className="sticky top-14 max-w-[69%] mx-auto bg-gray-50  py-3 mb-5 rounded-lg shadow-lg ">
      <div className="max-w-6xl px-4 flex items-center justify-between ">

         <div className="flex gap-4 flex-wrap">

          {/* Dropdown for pet type */}
          <select 
            name="type" 
            value={filters.type}
            onChange={handleChange} 
            className="border border-transparent rounded-lg px-3 py-2 shadow-sm cursor-pointer"
          >
            <option value="all">All Pets</option>
            <option value="Dog">Dogs</option>
            <option value="Cat">Cats</option>
          </select>

          {/* Dropdown for age */}
          <select 
            name="age" 
            value={filters.age}
            onChange={handleChange} 
            className="border border-transparent rounded-lg px-3 py-2 shadow-sm cursor-pointer"
          >
            <option value="all">Any Age</option>
            <option value="Puppy,Kitten">Puppy/Kitten</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>

          {/* Dropdown for size */}
          <select 
            name="size" 
            value={filters.size}
            onChange={handleChange} 
            className="border border-transparent rounded-lg px-3 py-2 shadow-sm cursor-pointer"
          >
            <option value="all">Any Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>

          {/* Dropdown for sex */}
          <select 
            name="gender" 
            type={filters.gender}
            onChange={handleChange} 
            className="border border-transparent rounded-lg px-3 py-2 shadow-sm cursor-pointer"
          >
            <option value="all">Any Sex</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>

        </div>

        <button 
          onClick={() => {
            const reset = { type: "all", gender: "all", size: "all", age: "all" };
            setFilters(reset);
            onFilter(reset);
          }} 
          className="px-4 py-2 bg-gray-300  text-white rounded-lg border-transparent hover:bg-gray-400 cursor-pointer">
          Reset
        </button>

      </div>
      
    </div>
  );
};

export default FilterBar;
