import { useContext } from "react";
import "./Cart.css";
import { ShopContext } from "../../context/shopContext";

const CartItem = (props) => {
  const { id, productName, price, imageUrl, product } = props.data;

  const { cartItems, addToCart, removeFromCart, updateItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem" key={id}>
      <img src={imageUrl} alt="" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p className="product-name">{product}</p>
        <p className="price">${price}</p>
        <div className="countHandler">
          <button className="num-btn" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input
            className="num-input"
            value={cartItems[id]}
            onChange={(e) => updateItemCount(Number(e.target.value), id)}
          />
          <button className="num-btn" onClick={() => addToCart(id)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
