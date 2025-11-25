import "./App.css";
import { Routes, Route } from "react-router-dom";

import VideoLoop from "./Components/VideoLoop";
import Bio from "./Pages/Bio";
import Asso from "./Pages/Asso";
import Scolaire from "./Pages/Scolaire";
import AuFilDuTemps from "./Pages/AuFilDuTemps";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<VideoLoop />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/asso" element={<Asso />} />
        <Route path="/mediation" element={<Scolaire />} />
        <Route path="/aufildutemps" element={<AuFilDuTemps />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
