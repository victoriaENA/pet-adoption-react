import React, { useState, useEffect } from "react";

const Modal = ({ pet, onClose }) => {  //receives pet object and onClose function as props from Gallery.jsx
  const [showForm, setShowForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {   // Reset carousel index when pet changes
  setCurrentIndex(0);
  }, [pet]);

  const handlePrev = () => {  // carousel prev
    setCurrentIndex((prev) => (prev === 0 ? pet.photos.length - 1 : prev - 1));
  };

  const handleNext = () => { // carousel next
    setCurrentIndex((prev) => (prev === pet.photos.length - 1 ? 0 : prev + 1));
  };

  let cleanedDescription = "";

  if (pet?.description) {  //decode HTML entities and remove curly brace content
    const decodeHTML = (html) => {
      const txt = document.createElement("textarea");
      txt.innerHTML = html;
      return txt.value;
    };

    const rawDescription = pet.description;

    cleanedDescription = decodeHTML(
      rawDescription.replace(/\{[^}]+\}/g, "").trim()
    );
  }
  
  // Reset form whenever a new pet is selected
  useEffect(() => {     
    setShowForm(false);
  }, [pet]);

  if (!pet) return null;

  const handleSubmit = (e) => {
    e.preventDefault();  //stops page reload when form is submitted
    console.log("Adoption submitted!");
    onClose(); // close modal after submission
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 ">
      <div
        className={`bg-white rounded-lg p-6 relative flex gap-8 transition-all duration-100
      ${showForm                              // ${..} anything inside will be treated as JS by Tailwind css
        ? "flex-row max-w-6/12 items-start"   //  Wider layout when form is open
        : "flex-col items-center max-w-lg" //  Narrower layout when only pet info is shown
      }
    `}
      >
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 cursor-pointer"
          onClick={onClose}   
        >
          ✕
        </button>

        {/* Pet Info */}
        <div className="flex flex-col items-start ">

          {/* Image carousel if multiple photos */}
          <div className="relative w-full flex justify-center items-center mb-4">
            {pet.photos.length > 1 && (
              <button
                onClick={handlePrev}
                className="absolute left-0 px-2 py-1 bg-white rounded-full shadow hover:bg-gray-100 cursor-pointer"
              >
                ◀
              </button>
            )}

            <img
              src={pet.photos?.[currentIndex]?.medium || "/placeholder.jpg"}
              alt={`${pet.name} photo ${currentIndex + 1}`}
              className="w-auto h-48 object-cover rounded"
            />

            {pet.photos.length > 1 && (
              <button
                onClick={handleNext}
                className="absolute right-0 px-2 py-1 bg-white rounded-full shadow hover:bg-gray-100 cursor-pointer"
              >
                ▶
              </button>
            )}
          </div>


          <h3 className="text-lg font-bold mb-2 font-nunito">{pet.name}</h3>
          <p className="mb-2 s font-nunito">{pet.breeds.primary} • {pet.age} • {pet.size} • {pet.gender}</p>
          {cleanedDescription && (
            <p
              className="mb-4 text-gray-700 whitespace-pre-line font-nunito"
              dangerouslySetInnerHTML={{ __html: cleanedDescription }}
            />
          )}

          {/* Show adopt button only when form is not visible */}
          {!showForm && (
            <button
              className="px-4 py-2 bg-gradient-to-r  hover:shadow-md from-purple-400 to-indigo-600 text-white rounded-lg hover:from-purple-600  cursor-pointer font-nunito"

              onClick={() => setShowForm(true)}
            >
              Adopt Me
            </button>
          )}
        </div>

        {/* Adoption Form - if showForm true display ()*/}
        {showForm && (
          <div className="bg-white shadow-lg rounded-lg border p-6 border-blue-50">

          <form className="flex flex-col gap-2 relative bottom-2 font-nunito" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-extrabold mb-4 font-fredoka text-teal-600  flex items-center gap-2">
              Adopt Me 🐾
            </h2>
            <input type="text" placeholder="Your Name" className="border rounded px-3 py-2" required />
            <input type="email" placeholder="Email" className="border rounded px-3 py-2" required />

            <div className="flex flex-col gap-2 font-medium pl-1 text-gray-500">
              <label className="flex items-center gap-2 pr-1">
                <span>Do you have children?</span>
                <div className="flex gap-4 ">
                  <label className="flex items-center gap-1">
                    <input  type="radio" name="haveChildren" value="yes" required className="hidden peer" /> 
                    <span className="w-3 h-3 rounded-full border-2 border-gray-400 peer-checked:bg-black cursor-pointer"></span>
                    Yes
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="haveChildren" value="no" className="hidden peer"/> 
                    <span className="w-3 h-3 rounded-full border-2 border-gray-400 peer-checked:bg-black cursor-pointer"></span>
                    No
                  </label>
                </div>
              </label>

              <label className="flex items-center gap-2 pr-1">
                <span>Do you have another pet?</span>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="haveOtherPet" value="yes" required className="hidden peer" /> 
                    <span className="w-3 h-3 rounded-full border-2 border-gray-400 peer-checked:bg-black cursor-pointer"></span>
                    Yes
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="haveOtherPet" value="no" className="hidden peer" /> 
                     <span className="w-3 h-3 rounded-full border-2 border-gray-400 peer-checked:bg-black cursor-pointer"></span>
                     No
                  </label>
                </div>
              </label>
            </div>

            <textarea placeholder="Message" className="border rounded px-3 py-2"  />

            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-purple-400 to-indigo-600 hover:from-purple-600 text-white rounded hover:bg-teal-600 cursor-pointer font-nunito"
            >
              Submit
            </button>
          </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
