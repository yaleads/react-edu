import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import Gallery from "~/src/components/Gallery/Gallery";


const ProductPageView = ({ isLoading, product} ) => (
  <div className='container'>
    <h1 className={'mt-3'}>Product Page</h1>
    <hr/>
    {  isLoading ? <p>Loading product Info...</p> : <ProductCard product={product}/> }
    { !isLoading && <Gallery images={product.images} productId={product.id}/> }
  </div>
);

export default ProductPageView;