import { Link } from "react-router-dom";
import {ShoppingBag, ShoppingCart} from "phosphor-react"
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="links">
            <Link to ="/">Shop</Link>
            <Link to = "/cart">
                <ShoppingBag size={35} />
            </Link>
        </div>
  </div>
  );
};

export default Navbar;
