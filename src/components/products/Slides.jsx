// import { PRODUCTS } from "../../products";
// import "../../pages/shop/Shop.css";
// import Product from "../Product";
// import { ShopContext } from "../../context/shopContext";
// import { useContext } from "react";

// const Slides = (props) => {
//   const { id, imageUrl, price, description, productName, product } =
//     props.items;

//   const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

//   const cartItemAmount = cartItems[id];

//   return (
//     <div className="shop">
//       <div className="shopTitle">Slides</div>
//       {/* <div className="products">
//         {PRODUCTS.map((product, index) => {
//           return <Product items={product} />;
//         })}
//       </div> */}

//       <div className="product" key={id}>
//         <img src={imageUrl} alt="product-img" />
//         <div className="description">
//           <p>
//             <b>{productName}</b>
//           </p>
//           <p>{product}</p>
//           <p>${price}</p>
//         </div>
//         <button className="addToCartBtn" onClick={() => addToCart(id)}>
//           Add To Cart {cartItemAmount > 0 && <>[{cartItemAmount}]</>}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Slides;
