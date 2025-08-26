import React from "react";

const Modal = ({ pet, onClose }) => {
  if (!pet) return null; // modal not visible if no pet selected

  const handleClick = () => {
    // Handle the click event for the button
    alert(`Adoption request submitted for ${pet.name}!`);

  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={pet.image}
          alt={pet.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{pet.name}</h2>
        <p className="mb-2">{pet.breed} • {pet.age} • {pet.size} • {pet.gender}</p>
        <p className="mb-4 text-gray-700">Some description</p>

        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Your Name"
            className="border rounded px-3 py-2"
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2"
          />
          <textarea
            placeholder="Message"
            className="border rounded px-3 py-2"
          />
          <button onClick={handleClick} className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600">
            Submit Adoption Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
