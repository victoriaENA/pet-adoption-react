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
    <div className="sticky top-14 z-40 w-9/12 mx-auto bg-gray-100 shadow-md py-3 mb-5 rounded-lg ">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap gap-4 justify-center items-center">
        {/* Dropdown for pet type */}
        <select name="type" onChange={handleChange} className="border rounded-lg px-3 py-2">
          <option value="all">All Pets</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
        </select>

        {/* Dropdown for age */}
        <select name="age" onChange={handleChange} className="border rounded-lg px-3 py-2">
          <option value="all">Any Age</option>
          <option value="Puppy,Kitten">Puppy/Kitten</option>
          <option value="Adult">Adult</option>
          <option value="Senior">Senior</option>
        </select>

        {/* Dropdown for size */}
        <select name="size" onChange={handleChange} className="border rounded-lg px-3 py-2">
          <option value="all">Any Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>

        {/* Dropdown for sex */}
        <select name="gender" onChange={handleChange} className="border rounded-lg px-3 py-2 ">
          <option value="all">Any Sex</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>

      </div>
    </div>
  );
};

export default FilterBar;
