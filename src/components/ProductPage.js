import React from 'react';
import Products from '~/src/constants/Products';
import ProductCard from "./ProductCard";
import { productsPath } from '~/src/helpers/routes'
//import { Redirect } from 'react-router-dom';
//import history from '~/history';


const ProductPage = ({ id, history }) => {

  const product = Products().find(product => product.id === parseInt(id));

  if (product === undefined) {

    history.push({
      pathname: productsPath(),
      state: { errorMessage: 'Product not found' }
    });
    return null;

    //return <Redirect to={ productsPath() } />
  } else {
    return (
      <div className='container'>
        <h1 className={'mt-3'}>Product Page</h1>
        <hr/>

        <ProductCard key={product.id} product={product}/>
      </div>
    )
  }


};

export default ProductPage;