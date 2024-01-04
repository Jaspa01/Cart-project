import React from "react";
import { PRODUCTS } from "../../products";
import "./Shop.css";
import Product from "../../components/Product";

const Shop = () => {
  return (
    <div className="shop">
      <div className="products">
        {PRODUCTS.map((product) => {
          return (
            <>
              <Product items={product} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Shop;
