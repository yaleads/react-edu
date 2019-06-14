import React from 'react';
import ProductCard from 'components/ProductCard';

const ProductsList = ({ products }) => (
  <div>
    {products.map((product) => <ProductCard product={product} key={product.id}/>)}
  </div>
);

export default ProductsList;

