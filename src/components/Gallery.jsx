import React, { useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import Modal from "./Modal";


const Gallery = () => {

  const [pets, setPets] = useState([]); // raw data from API
  const [filteredPets, setFilteredPets] = useState([]);   //using useState because data will change when filtered 
  const [selectedPet, setSelectedPet] = useState(null); // track which pet is clicked (for modal)
  const [visibleCount, setVisibleCount] = useState(9); // number of pets to show initially

 
  const [favorites, setFavorites] = useState(() => {  //favorites useState
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];  //if saved exists parse it, else return empty array to render the favorites
  });

  const toggleFavorite = (petId) => { //add/remove pets from favorites and sync with localStorage
    let updated;
    if (favorites.includes(petId)) {
      updated = favorites.filter((id) => id !== petId); // remove - returns new array without petId
    } else {
      updated = [...favorites, petId]; // add
    }
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
 };

// Fetch Petfinder API token and pets
useEffect(() => {
  const fetchPets = async () => {
    try {
      // 1Get the access token
      const tokenRes = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_PETFINDER_CLIENT_ID}&client_secret=${import.meta.env.VITE_PETFINDER_SECRET}`
      });
      const tokenData = await tokenRes.json();
      const accessToken = tokenData.access_token;

      // 2Fetch pets in pages until we have 50 valid ones
      let allPets = [];          // store all valid pets
      let page = 1;              // start from page 1
      const normalize = str => str?.toLowerCase().trim(); // helper to standardize strings
      const seen = new Set();    // track duplicates

      // 3Check if pet has a valid image
      const hasValidImage = (pet) =>
        (pet.photos && pet.photos.length > 0) ||
        (pet.primary_photo_cropped && pet.primary_photo_cropped.medium);

      // 4Loop through pages until we collect 50 valid pets
      while (allPets.length < 50) {
        const petsRes = await fetch(`https://api.petfinder.com/v2/animals?limit=100&page=${page}`, {
          headers: { Authorization: `Bearer ${accessToken}` }
        });
        const petsData = await petsRes.json();
        const batch = petsData.animals;

        if (!batch || batch.length === 0) break; // no more pets to fetch

        // 5Filter out duplicates and pets without images
        const filtered = batch.filter((pet) => {
          const key = `${normalize(pet.name)}-${normalize(pet.breeds.primary)}`;
          if (seen.has(key) || !hasValidImage(pet)) return false;
          seen.add(key);
          return true;
        });

        allPets = [...allPets, ...filtered]; // add to master list
        page++; // move to next page
      }

      // 6Trim to exactly 50 pets and store
      const finalPets = allPets.slice(0, 50);
      console.log("Final visible pets:", finalPets.length);

      setPets(finalPets);         // store API pets
      setFilteredPets(finalPets); // initially show all
    } catch (error) {
      console.error("Error fetching pets:", error);
    }
  };

  fetchPets(); // runs once on mount
}, []);


  // function to update pets list from FilterBar
  const handleFilter = (filters) => {  //filters is passed by FilterBar 
    
    let results = pets;  //original data 

    if (filters.species && filters.species !== "all") {
      if (filters.species === "Other") {
        results = results.filter((pet) => pet.species !== "Dog" && pet.species !== "Cat");
      } else {
        results = results.filter((pet) => pet.species === filters.species);
      }
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
    <section id="gallery" className=" min-h-[50vh] pb-16 bg-white mx-auto">
      <FilterBar 
        onFilter={handleFilter} 
        onShowFavorites={() => {
          const favPets = pets.filter((p) => favorites.includes(p.id));
          setFilteredPets(favPets);
          setSelectedPet(null); // close modal if open
        }} 
      />

      {/* If no pets match filter */}
    {filteredPets.length === 0 ? (
      <div className="flex flex-col items-center justify-center py-10 text-gray-500 font-nunito">
        <p className="text-lg font-semibold">No pets match your filters 🐾</p>
        <p className="text-sm mt-2">Try adjusting your search criteria.</p>
      </div>
    ) : (
      <>

      <div className="max-w-6xl mx-50 pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredPets.slice(0, visibleCount).map((pet) => (  //slices the number of pets shown 
          <div
            key={pet.id}
className="border relative border-gray-200 rounded-2xl shadow-xl hover:bg-blue-300  hover:opacity-80  cursor-pointer bg-blue-50 hover:-translate-y-0.5 hover:scale-[1.02] transform transition duration-300 ease-in-out"            
onClick={() => setSelectedPet(pet)} // open modal on click
          >

            <img 
              src={pet.photos?.[0]?.medium} 
              alt={pet.name} 
              className="w-full h-48 object-cover rounded-t-2xl "
            />

             {/* Favorite button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // prevents modal opening when clicking heart
                toggleFavorite(pet.id);
              }}
              className={`absolute top-2 right-2 text-3xl cursor-pointer ${
                favorites.includes(pet.id) ? "text-red-500" : "text-gray-300"
              }`}
            >
              ♥
            </button>

            <h3 className="text-lg px-4 font-bold mt-2 font-nunito  ">{pet.name}</h3>
            <div className="flex justify-between px-4 pb-2 font-nunito text-gray-400  ">
              <span>{pet.age}</span>
              
              <span>{pet.gender}</span>
            </div>

  
          </div>
        ))}
      </div>

      <Modal 
        pet={selectedPet} 
        onClose={() => setSelectedPet(null)} 
      />

      {visibleCount < filteredPets.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount(visibleCount + 9)}
            className=" px-5 py-2.5 bg-teal-600 opacity-80 shadow-md  text-white rounded-lg hover:shadow-lg  cursor-pointer font-nunito"
          >
            Show More
          </button>
        </div>
        )}
      </>
    )}
  </section>
  );
};

export default Gallery;
