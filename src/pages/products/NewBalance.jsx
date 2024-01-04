
import Product from "../../components/Product";
import "../../pages/shop/Shop.css";
import { PRODUCTS } from "../../products";

const NewBalance = () => {
  return (
    <div className="shop">
      <div className="shopTitle"> Jewel Store </div>
      <div className="products">
        {PRODUCTS.NEWBALANCE.map((newbalance) => {
          return <Product items={newbalance} />;
        })}
      </div>
    </div>
  );
};

export default NewBalance;
