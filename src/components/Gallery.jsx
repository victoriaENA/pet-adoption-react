import React, { useState } from "react";
import petsData from "../data/pets";
import FilterBar from "./FilterBar";


const Gallery = () => {

   const [filteredPets, setFilteredPets] = useState(petsData);   //using useState because data will change when filtered 

    // function to update pets list from FilterBar
  const handleFilter = (filters) => {  //filters is passed by FilterBar 
    
    let results = petsData;  //original data 

    if (filters.type && filters.type !== "all") {
      results = results.filter((pet) => pet.type === filters.type);
    }

    if (filters.gender && filters.gender !== "all") {
      results = results.filter((pet) => pet.gender === filters.gender);
    }

    if (filters.size && filters.size !== "all") {
      results = results.filter((pet) => pet.size === filters.size);
    }

    if (filters.age && filters.age !== "all") {
      const ages = filters.age.split(",");
      results = results.filter((pet) => ages.includes(pet.age));
    }

    setFilteredPets(results);  //hook 

  }

  return (
    <section id="gallery" className="pb-16 bg-red-200 mx-auto">

      <FilterBar onFilter={handleFilter} /> {/* displays Filter bar and passes handleFilter function as prop */}

      <div className="max-w-6xl mx-auto pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredPets.map((pet) => (
          <div key={pet.id} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={pet.image} alt={pet.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-2">{pet.name}</h3>
            <p>{pet.breed} • {pet.age} • {pet.size} • {pet.gender}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
