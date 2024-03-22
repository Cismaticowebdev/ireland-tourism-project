import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/touristattractions">Tourist Attractions</Link>
      <Link to="/findattractions">Find Attractions</Link>
      <Link to="/trivia">Trivia</Link>
    </div>
  );
}

export default Navbar;
