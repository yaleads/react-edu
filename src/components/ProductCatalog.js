import React from 'react'
import ProductCard from '~/src/components/ProductCard'

function ProductCatalog({ products }){
  return (
    <div>
      { products.map( (product) => <ProductCard product={product} key={product.id} /> ) }
    </div>
  )
}

export default ProductCatalog;