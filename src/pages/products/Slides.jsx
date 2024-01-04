import { PRODUCTS } from "../../products";
import "../../pages/shop/Shop.css";
import Product from "../../components/Product";

const Slides = () => {
  return (
    <div className="shop">
      <div className="shopTitle"> Jewel Store </div>
      <div className="products">
        {PRODUCTS.SLIDES.map((slide, index) => {
          return <Product items={slide} />;
        })}
      </div>
    </div>
  );
};

export default Slides;
