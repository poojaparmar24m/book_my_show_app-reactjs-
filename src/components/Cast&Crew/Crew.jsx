import React from "react";
// import axios from "axios";

// axios.defaults.baseURL = "https://image.tmdb.org/t/p/original";

const Crew = ({ image, crewName, job }) => {
  return (
    <>
      <div className="flex flex-col gap-1 items-center">
        <div className="w-32 h-32 md:w-32 sm:w-28 crew_poster">
          <img
            src={`https://image.tmdb.org/t/p/original${image}`}
            alt="cast_image"
            className="object-center object-cover rounded-full w-full h-full"
          />
        </div>
        <h3 className="text-black text-md">{crewName}</h3>
        <h3 className="text-gray-600 text-sm text-center">as {job}</h3>
      </div>
    </>
  );
};

export default Crew;
// https://image.tmdb.org/t/p/original${image}
// https://www.treasury.gov.ph/wp-content/uploads/2022/01/male-placeholder-image.jpeg
