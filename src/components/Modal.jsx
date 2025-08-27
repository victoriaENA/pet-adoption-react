import React, { useState, useEffect } from "react";

const Modal = ({ pet, onClose }) => {
  const [showForm, setShowForm] = useState(false);

  // Reset form whenever a new pet is selected
  useEffect(() => {
    setShowForm(false);
  }, [pet]);

  if (!pet) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Adoption submitted!");
    onClose(); // close modal after submission
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 ">
      <div
        className={`bg-white rounded-lg max-w-6/12 p-6 relative flex gap-8  ${
          showForm ? "flex-row" : "flex-col items-center"
        }`}
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 cursor-pointer"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Pet Info */}
        <div className="flex flex-col items-center ">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-auto h-48 object-cover rounded mb-4"
          />
          <h3 className="text-lg font-bold mb-2">{pet.name}</h3>
          <p className="mb-2 s">{pet.breed} • {pet.age} • {pet.size} • {pet.gender}</p>
          <p className="mb-4 text-gray-700 text-center">As your application grows, it helps to be more intentional about how your state is organized and how the data flows between your components. Redundant or duplicate state is a common source of bugs</p>

          {/* Show adopt button only when form is not visible */}
          {!showForm && (
            <button
              className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 cursor-pointer"
              onClick={() => setShowForm(true)}
            >
              Adopt Me
            </button>
          )}
        </div>

        {/* Adoption Form */}
        {showForm && (
          <form className="flex flex-col gap-2 flex-1" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Adopt Me</h2>
            <input type="text" placeholder="Your Name" className="border rounded px-3 py-2" required />
            <input type="email" placeholder="Email" className="border rounded px-3 py-2" required />

            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-2">
                <span>Do you have children?</span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="haveChildren" value="yes" required /> Yes
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="haveChildren" value="no" /> No
                  </label>
                </div>
              </label>

              <label className="flex items-center gap-2">
                <span>Do you have another pet?</span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="haveOtherPet" value="yes" required /> Yes
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="haveOtherPet" value="no" /> No
                  </label>
                </div>
              </label>
            </div>

            <textarea placeholder="Message" className="border rounded px-3 py-2" />

            <button
              type="submit"
              className="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600 cursor-pointer"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Modal;
