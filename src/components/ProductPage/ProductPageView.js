import React from 'react';
import ProductCard from 'components/ProductCard';
import Gallery from 'components/Gallery';
import Helmet from 'react-helmet';


const ProductPageView = ({ isLoading, product} ) => (
  <div className='container'>
    <Helmet>
      <title>{product.title && product.title }</title>
      <meta name="description" content={`Product description: ${product.title}`} />
      <meta property="og:image" content={product.imageUrl} />
    </Helmet>

    <h1 className={'mt-3'}>Product Page</h1>
    <hr/>
    {  isLoading ? <p>Loading product Info...</p> : <ProductCard product={product}/> }
    { !isLoading && <Gallery images={product.images} productId={product.id}/> }
  </div>
);

export default ProductPageView;