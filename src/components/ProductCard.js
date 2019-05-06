import React, { Component } from 'react'
import Image from '~/src/components/Image'
import TextBox from '~/src/components/TextBox'
import Price from '~/src/components/Price'
import AddToCart from '~/src/components/AddToCart'

class ProductCard extends Component {
  constructor(props){
    super(props);

    this.onDragStart  = this.onDragStart.bind(this);
  }

  onDragStart(e) {
    e.dataTransfer.setData('productDraggableId', e.target.id);
    e.dataTransfer.setData('productDraggableCount', document.getElementById(`add_product_${e.target.id}_to_cart_counter`).value);
  };

  render () {
    const { id, title, price, imageUrl } = this.props.product;

    return (
      <div key={id} id={id} draggable onDragStart={this.onDragStart} className='row mb-3 mt-3 border pt-3 pb-3' >
        <div className='col-md-4'>
          <Image src={imageUrl} width='180' height='250' alt={title}/>
        </div>
        <div className='col-md-6'>
          <h4><TextBox text={title}/></h4>
          <p><Price price={price}/></p>

          <AddToCart productId={this.props.product.id}/>
        </div>
      </div>
    )
  }
}

export default ProductCard;