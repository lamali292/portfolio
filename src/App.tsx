import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Me from "./ui/Me";
import Projects from "./ui/Projects";
import BotcPage from "./ui/projects/Botc";
import Spotify from "./ui/projects/Spotify";
import Master from "./ui/projects/Master";
import Praktikum from "./ui/projects/Praktikum";
import Watcher from "./ui/projects/Watcher";
import Downfall from "./ui/projects/Downfall";
import Euler from "./ui/projects/Euler";
import Factorio from "./ui/projects/Factorio";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Home page with Me + Projects */}
        <Route
          path="/portfolio"
          element={
            <Box>
              <Me />
              <Projects />
            </Box>
          }
        />

        {/* Dynamic project page */}
        <Route path="/portfolio/projects/botc" element={<BotcPage />} />
        <Route path="/portfolio/projects/spotify" element={<Spotify />} />
        <Route path="/portfolio/projects/master" element={<Master />} />
        <Route path="/portfolio/projects/euler" element={<Euler />} />
        <Route path="/portfolio/projects/factorio" element={<Factorio />} />
        <Route path="/portfolio/projects/praktikum" element={<Praktikum />} />
        <Route path="/portfolio/projects/watcher" element={<Watcher />} />
        <Route path="/portfolio/projects/downfall" element={<Downfall />} />
      </Routes>
    </Router>
  );
};

export default App;
