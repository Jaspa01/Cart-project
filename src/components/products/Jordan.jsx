// import { PRODUCTS } from "../../products";
// import "../../pages/shop/Shop.css";
// import Product from "../../components/Product";
// import { useContext } from "react";
// import { ShopContext } from "../../context/shopContext";

// const Jordan = (props) => {
//   const { id, productName, price, imageUrl, product } = props.data;

//   const { cartItems, addToCart, removeFromCart, addJordanToCart, removeJordanFromCart } = useContext(ShopContext);

//   const cartItemAmount = cartItems[id];

//   return (
//     <div className="product" key={id}>
//       <img src={imageUrl} alt="product-img" />
//       <div className="description">
//         <p>
//           <b>{productName}</b>
//         </p>
//         <p>{product}</p>
//         <p>${price}</p>
//       </div>
//       <button className="addToCartBtn" onClick={() => addToCart(id)}>
//         Add To Cart {cartItemAmount > 0 && <>[{cartItemAmount}]</>}
//       </button>
//     </div>
//   );
// };

// export default Jordan;
