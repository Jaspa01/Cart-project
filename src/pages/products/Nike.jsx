import { PRODUCTS } from "../../products";
import "../../pages/shop/Shop.css";
import Product from "../../components/Product";

const Nike = () => {
  return (
    <div className="shop">
      <div className="shopTitle"> Jewel Store </div>
      <div className="products">
        {PRODUCTS.NIKE.map((nike, index) => {
          return <Product items={nike} />;
        })}
      </div>
    </div>
  );
};

export default Nike;
