import React from 'react'
import Image from '~/src/components/Image'
import TextBox from '~/src/components/TextBox'
import Price from '~/src/components/Price'
import AddToCartButton from '~/src/components/AddToCartButton'
import Counter from '~/src/components/Counter'

const onDragStart = function (e) {
  e.dataTransfer.setData('draggable_id', e.target.id);
  e.dataTransfer.setData('draggable_count', document.getElementById(`add_product_${e.target.id}_to_cart_counter`).value);
};


function ProductCard(props){
  return (
    <div key={props.product.id} id={props.product.id} className='row mb-3 mt-3 border pt-3 pb-3' draggable onDragStart={onDragStart} >
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