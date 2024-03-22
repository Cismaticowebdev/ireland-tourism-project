import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Navbar from "./components/Navbar";
import TouristAttractions from "./views/TouristAttractions";
import "./App.css";
import FindAttractions from "./views/FindAttractions";
import Trivia from "./views/Trivia";

function App() {
  return (
    <div className="main-app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/touristattractions" element={<TouristAttractions />} />
          <Route path="/findattractions" element={<FindAttractions />} />
          <Route path="/trivia" element={<Trivia />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
