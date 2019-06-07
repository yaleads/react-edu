import React from 'react';
import ProductsList from './ProductsList'
import Alert from '~/src/components/shared/Alert'
import ProductSlider from '~/src/components/ProductsSlider'

const ProductsPageView = ({products, sliderProducts, alertText, isFetching, isError}) => (
  <div className='container'>
    <Alert text={ alertText }/>

    {sliderProducts.length > 0 && <ProductSlider products={sliderProducts}/>}

    <h1 className={'mt-3'}>Products Catalog</h1>
    <hr />

    { isFetching && <p>Загрузка товаров...</p> }
    { isError    && <p>Не удалось загрузить товары</p> }
    { products   && <ProductsList products={products} />  }

  </div>
);


export default ProductsPageView;