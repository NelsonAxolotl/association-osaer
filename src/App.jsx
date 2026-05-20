import "./App.css";
import { Routes, Route } from "react-router-dom";

import VideoLoop from "./Components/VideoLoop";
import ScrollToTop from "./Components/ScrollToTop";

import Bio from "./Pages/Bio";
import Asso from "./Pages/Asso";
import Contact from "./Pages/Contact";
import MentionsPolitique from "./Pages/MentionsPolitique";
import AuFilDuTemps from "./Pages/AuFilDuTemps";
import Mouvements from "./Pages/Mouvements";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<VideoLoop />} />
        <Route path="/artistes" element={<Bio />} />
        <Route path="/compagnie" element={<Asso />} />
        <Route path="/creations" element={<AuFilDuTemps />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rencontres" element={<Mouvements />} />
        <Route path="/mentions-politique" element={<MentionsPolitique />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
