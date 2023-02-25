import { Link } from "react-router-dom";
const TopNav = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/register">Register</Link>
  </div>
);

export default TopNav;
