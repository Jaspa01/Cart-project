import { Link } from "react-router-dom";
import { ShoppingBag, ShoppingCart } from "phosphor-react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h2 style={{ color: "white", fontSize: "32px", fontWeight: "500" }}>
        Jewel Steppers
      </h2>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingBag size={35} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
