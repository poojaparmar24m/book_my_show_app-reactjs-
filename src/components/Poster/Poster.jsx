import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
  return (
    <>
      <Link to={`/movie/${props.id}`}>
        <div className="flex flex-col items-start cursor-pointer">
          <div className="w-40 ">
            <img
              src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
              alt="poster_img"
              className="w-full h-full rounded-lg object-center"
            ></img>
          </div>
          <h3>{props.original_title}</h3>
          {/* {console.log("item", props.poster_path)} */}
        </div>
      </Link>
    </>
  );
};

export default Poster;
