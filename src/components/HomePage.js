import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import TravelPlanning from "./TravelPlanning";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <TravelPlanning />
    </div>
  );
};

export default HomePage;
