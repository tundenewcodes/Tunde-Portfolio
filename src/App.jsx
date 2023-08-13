import  { useEffect } from "react";
import "./App.css";
import Homepage from "./pages/homepage";
import { Routes, Route } from "react-router-dom";
import { HOME, INDEX } from "./routes/paths";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Routes>
        <Route element={<Homepage />} path={HOME} />
        <Route element={<Homepage />} path={INDEX} />
      </Routes>
    </>
  );
}

export default App;
