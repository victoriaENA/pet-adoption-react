import React from "react";

const pets = [
  { name: "Buddy", type: "Dog", img: "https://thf.bing.com/th/id/OIP.EChM3dyJyqmIG_TyfamwhwHaF7?w=218&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.5&pid=1.7&rm=3" },
  { name: "Mittens", type: "Cat", img: "https://thf.bing.com/th/id/OIP.CBFZpMOFqyCjyHOJxouwVAHaE8?w=256&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.5&pid=1.7&rm=3" },
  { name: "Buddy", type: "Dog", img: "https://thf.bing.com/th/id/OIP.EChM3dyJyqmIG_TyfamwhwHaF7?w=218&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.5&pid=1.7&rm=3" },
  { name: "Buddy", type: "Dog", img: "https://thf.bing.com/th/id/OIP.EChM3dyJyqmIG_TyfamwhwHaF7?w=218&h=180&c=7&r=0&o=7&cb=thfc1&dpr=1.5&pid=1.7&rm=3" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="pb-16 pt-8 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Available Pets</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {pets.map((pet, index) => (
          <div key={index} className="border p-4 rounded-lg shadow hover:shadow-lg transition">
            <img src={pet.img} alt={pet.name} className="w-full h-48 object-cover rounded" />
            <h3 className="text-xl font-semibold mt-2">{pet.name}</h3>
            <p className="text-gray-600">{pet.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
