import React from "react";

const Slogan = () => {
  return (
    <section
      id="slogan"
      className="relative flex flex-col justify-center items-center h-84 bg-[url('/cat.jpg')] bg-cover  bg-[center_top_14%]"
    >
      <div className="absolute inset-0  mix-blend-multiply"></div>

      <h2 className="text-5xl font-bold mb-3 font-fredoka text-black relative bottom-4 ">Every <span className="text-teal-700">Paw</span> Has a Story</h2>
      <h2 className="text-5xl font-bold font-fredoka text-black  relative bottom-4 ">Find <span className="text-teal-700">Yours</span> Today</h2>
      
     
    </section>
  );
};

export default Slogan;