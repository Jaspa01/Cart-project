import React from 'react';
import { PRODUCTS } from '../../products';
import Product from './Product';
import "./Shop.css";

const Shop = () => {
  
  return (
    <div className='shop'>
      <div className="shopTitle"> Jewel Store </div>
      <div className="products">
        {PRODUCTS.map((product) => {
          return <Product items = {product} />
        })}
      </div>
    </div>
  )
}

export default Shop