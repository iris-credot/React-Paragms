import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex gap-5">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>  
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}

export default Navbar;