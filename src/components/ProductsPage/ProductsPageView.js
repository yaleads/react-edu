import React from 'react';
import ProductsList from './ProductsList';
import Alert from 'components/shared/Alert';
import ProductSlider from 'components/ProductsSlider';
import Helmet from "react-helmet";

const ProductsPageView = ({products, sliderProducts, alertText, isFetching, isError}) => (
  <div className='container'>
    <Helmet>
      <title>Products catalog</title>
      <meta name="description" content='Products catalog' />
    </Helmet>

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