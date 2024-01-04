import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

const Product = (props) => {
  const { id, productName, price, imageUrl, product } = props.items;

  const { cartItems, addToCart } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product" key={id}>
      <div>
        <img src={imageUrl} alt="product-img" />
      </div>
      <div className="description">
        <p className="product-title">
          <b>{productName}</b>
        </p>
        <p className="product-name">{product}</p>
        <p>${price}</p>
        <button className="addToCartBtn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <>[{cartItemAmount}]</>}
        </button>
      </div>
    </div>
  );
};

export default Product;
