import React, { createContext, useState } from "react";

export const dataContext = createContext(null);

const Contextapi = ({ children }) => {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [premierMovies, setPremierMovies] = useState([]);
  const [onlinestreamEvents, setOnlinestreamEvents] = useState([]);
  return (
    <>
      <dataContext.Provider
        value={{
          recommendedMovies,
          setRecommendedMovies,
          premierMovies,
          setPremierMovies,
          onlinestreamEvents,
          setOnlinestreamEvents,
        }}
      >
        {children}
      </dataContext.Provider>
    </>
  );
};

export default Contextapi;
