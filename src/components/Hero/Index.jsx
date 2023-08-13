import React from "react";
import Navbar from "../Navbar";
import usePageSetup from "../../hooks/usePageSetup";
import Home from "../Home";

const Hero = () => {
  const { selectedPage, setSelectedPage, isTopOfPage } = usePageSetup();
  return (
    <div>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home />
    </div>
  );
};

export default Hero;
