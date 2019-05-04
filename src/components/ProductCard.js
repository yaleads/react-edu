import React from 'react'
import Image from '~/src/components/Image'
import TextBox from '~/src/components/TextBox'
import Price from '~/src/components/Price'
import AddToCartButton from '~/src/components/AddToCartButton'
import Counter from '~/src/components/Counter'



function ProductCard(props){
  return (
    <div key={props.product.id} className='row mb-5 mt-5'>
      <div className='col-md-4'>
        <Image src={props.product.imageUrl} width='180' height='250' alt={props.product.title}/>
      </div>
      <div className='col-md-6'>
        <h4><TextBox text={props.product.title} /></h4>
        <p><Price price={props.product.price}/></p>
        <p><Counter product={props.product} /></p>
        <p><AddToCartButton product_id={props.product.id}/></p>
      </div>
    </div>
  )
}

export default ProductCard;