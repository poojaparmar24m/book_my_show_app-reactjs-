import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar";

const MovieLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <MovieNavbar />
        <Component {...props} />
        <h1>footer</h1>
      </>
    );
  };

export default MovieLayout;
