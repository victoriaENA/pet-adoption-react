import React, { useState } from "react";
import petsData from "../data/pets";
import FilterBar from "./FilterBar";
import Modal from "./Modal";


const Gallery = () => {

   const [filteredPets, setFilteredPets] = useState(petsData);   //using useState because data will change when filtered 
   const [selectedPet, setSelectedPet] = useState(null); // track which pet is clicked

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
     setSelectedPet(null); // close modal when filtering

  }

  return (
    <section id="gallery" className="pb-16 bg-red-200 mx-auto">
      <FilterBar onFilter={handleFilter} />

      <div className="max-w-6xl mx-50 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredPets.map((pet) => (
          <div
            key={pet.id}
            className="border border-gray-200 rounded-lg shadow hover:shadow-lg hover:bg-orange-400 transition cursor-pointer bg-red-100"
            onClick={() => setSelectedPet(pet)} // open modal on click
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="w-full h-48 object-cover rounded "
            />
            <h3 className="text-xl px-2 font-semibold mt-2">{pet.name}</h3>
            <p className="px-2 pb-2" >
              {pet.breed} • {pet.age} • {pet.size} • {pet.gender}
            </p>

          </div>
        ))}
      </div>

      <Modal pet={selectedPet} onClose={() => setSelectedPet(null)} />

    </section>
  );
};

export default Gallery;
