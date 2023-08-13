import { SelectedLink } from "../types/appTypes";
import { useEffect, useState } from "react";


const usePageSetup = () => {
  const [selectedPage, setSelectedPage] = useState(
    SelectedLink.Home
  );
  
 
  const [isTopOfPage, setIsTopOfPage] = useState(true);


  const handleScroll = () => {
    if (window.scrollY !== 0) {
      setIsTopOfPage(false);
    } else {
      setIsTopOfPage(true);
      setSelectedPage(SelectedLink.Home);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { selectedPage, isTopOfPage, setSelectedPage};
};

export default usePageSetup;
