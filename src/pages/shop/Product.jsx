import { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shopContext";

const Product = (props) => {
  const { id, productName, price, productImage } = props.items;

  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt="product-img" />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>[{cartItemAmount}]</>}
      </button>
    </div>
  );
};

export default Product;
