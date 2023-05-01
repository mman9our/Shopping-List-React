import React from "react";
import Banner from "../components/Banner/Banner";
import Items from "../components/Items/Items";
import "../App.css";

function Home() {
  return (
    <>
        <Banner />
      <Items />
      <div className="body-bg-shape"></div>
      
    </>
);
}

export default Home;
