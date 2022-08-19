import { AnimatePresence, motion } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./components/sections/HomeSections/AboutPage";
import Home from "./pages/Home";
import WorkStation from "./pages/WorkStation";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <motion.div className="App">
      <Navbar />
      <ParallaxProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/workstation" element={<WorkStation />} />
        </Routes>
      </ParallaxProvider>
    </motion.div>
  );
}

export default App;
