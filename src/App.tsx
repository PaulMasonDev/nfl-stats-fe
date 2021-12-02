import "./App.css";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PlayerPage } from "./components/content/PlayerPage";
import { AdminControls } from "./components/content/AdminControls";
import axios from "axios";
import { useEffect } from "react";
import { API_KEY } from "./constants";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const { data: currentSeason } = await axios.get(
        `https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=${API_KEY}`
      );
      const { data: mostRecentWeek } = await axios.get(
        `https://api.sportsdata.io/v3/nfl/scores/json/LastCompletedWeek?key=${API_KEY}`
      );
      const { data: playerStatsForMostRecentWeek } = await axios.get(
        `https://api.sportsdata.io/v3/nfl/stats/json/PlayerSeasonStats/${currentSeason}?key=${API_KEY}`
      );
      console.log({ playerStatsForMostRecentWeek });
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Router>
        <div className="header">
          <Header />
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/admincontrols" element={<AdminControls />} />
            <Route path="/playerpage" element={<PlayerPage />} />
          </Routes>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
