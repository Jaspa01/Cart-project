import { PRODUCTS } from "../../products";
import "../../pages/shop/Shop.css";
import Product from "../../components/Product";

const Jordan = () => {
  return (
    <div className="shop">
      <div className="shopTitle"> Jewel Store </div>
      <div className="products">
        {PRODUCTS.JORDAN.map((jordan) => {
          return <Product items={jordan} />;
        })}
      </div>
    </div>
  );
};

export default Jordan;
