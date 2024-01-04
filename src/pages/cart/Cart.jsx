import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] > 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal">Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button onClick={() => clearCart(cartItems)}>Clear Cart</button>
        </div>
      ) : (
        <h1 className="empty">Cart is empty!!!</h1>
      )}
    </div>
  );
};

export default Cart;
