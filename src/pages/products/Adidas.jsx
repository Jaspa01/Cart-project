import { PRODUCTS } from "../../products";
import "../../pages/shop/Shop.css";
import Product from "../../components/Product";

const Adidas = () => {
  return (
    <div className="shop">
      <div className="shopTitle"> Jewel Store </div>
      <div className="products">
        {PRODUCTS.ADIDAS.map((adidas, index) => {
          return <Product items={adidas} />;
        })}
      </div>
    </div>
  );
};

export default Adidas;
