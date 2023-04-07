import React, { useContext, useEffect } from "react";
import Entertainment from "../components/Entertainment/Entertainment";
import Herocarousel from "../components/HeroCarousel/Herocarousel";
import Posterslider from "../components/PosterSlider/Posterslider";
import DefaultLayout from "../layout/DefaultLayout";
import { dataContext } from "../context/Contextapi";
import axios from "axios";

const Home = () => {
  const {
    recommendedMovies,
    setRecommendedMovies,
    // premierMovies,
    // setPremierMovies,
    // onlinestreamEvents,
    // setOnlinestreamEvents,
  } = useContext(dataContext);

  useEffect(() => {
    const topRatedMovies = async () => {
      const getTopRatedmovies = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=3cdb69147733566d54992f899dfb0c9c"
      );
      setRecommendedMovies(getTopRatedmovies.data.results);
    };
    topRatedMovies();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <div
          className="rounded-lg main_Carousle_div"
          style={{
            width: "99%",
            // height: "345px",
            overflow: "hidden",
            margin: "0 auto",
            marginTop: "10px",
          }}
        >
          <Herocarousel />
        </div>

        <div className="container mx-auto py-4  ">
          <Posterslider
            title="Recommended movies"
            subTilte="List of Recommended movies"
            posters={recommendedMovies}
            isDark={false}
          />
        </div>

        <div className="container mx-auto py-4" style={{ overflow: "hidden" }}>
          <h1 className="mb-2 pl-2 text-2xl font-bold text-gray-800">
            The Best of Entertainment
          </h1>
          <Entertainment />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout(Home);
