import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";


const Navbar = () => {
  return (
    <div className="navbar">
      <h2 style={{ color: "white", fontSize: "32px", fontWeight: "500" }}>
        Jewel Steppers
      </h2>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
