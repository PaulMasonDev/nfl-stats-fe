import "./App.css";
import { Content } from "./components/content/Content";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PlayerPage } from "./components/content/PlayerPage";
import { AdminControls } from "./components/content/AdminControls";

function App() {
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
