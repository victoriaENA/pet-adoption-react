import React from "react";

const FilterBar = () => {
  return (
    <div className="sticky top-14 z-40 w-full bg-gray-100 shadow-md py-3">
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap gap-4 justify-center items-center">
        {/* Dropdown for pet type */}
        <select className="border rounded-lg px-3 py-2">
          <option value="all">All Pets</option>
          <option value="dog">Dogs</option>
          <option value="cat">Cats</option>
        </select>

        {/* Dropdown for age */}
        <select className="border rounded-lg px-3 py-2">
          <option value="all">Any Age</option>
          <option value="puppy">Puppy/Kitten</option>
          <option value="adult">Adult</option>
          <option value="senior">Senior</option>
        </select>

        {/* Dropdown for size */}
        <select className="border rounded-lg px-3 py-2">
          <option value="all">Any Size</option>
          <option value="puppy">Small</option>
          <option value="adult">Medium</option>
          <option value="senior">Big</option>
        </select>

        {/* Dropdown for size */}
        <select className="border rounded-lg px-3 py-2">
          <option value="all">Any Sex</option>
          <option value="puppy">Female</option>
          <option value="adult">Male</option>
        </select>

      </div>
    </div>
  );
};

export default FilterBar;
