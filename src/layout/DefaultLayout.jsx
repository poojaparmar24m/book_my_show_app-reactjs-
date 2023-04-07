import React from "react";
import Navbar from "../components/Navbar/Navbar";

const DefaultLayout =
  (Component) =>
  ({ ...props }) => {
    return (
      <>
        <Navbar />
        <Component {...props} />
        <h1>Foooter</h1>
      </>
    );
  };

export default DefaultLayout;
