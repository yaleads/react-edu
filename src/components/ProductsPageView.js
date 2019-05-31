import React from 'react';
import ProductsList from '~/src/components/ProductsList'
import Alert from '~/src/components/Alert'
import ProductSlider from './ProductsSlider'

const ProductsPageView = ({products, sliderProducts, alertText}) => (
  <div className='container'>
    <Alert text={ alertText }/>

    {sliderProducts.length > 0 && <ProductSlider products={sliderProducts}/>}

    <h1 className={'mt-3'}>Products Catalog</h1>
    <hr />

    <ProductsList products={products} />
  </div>
);


export default ProductsPageView;