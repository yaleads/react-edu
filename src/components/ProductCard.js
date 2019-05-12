import React, { Component } from 'react'
import Image from '~/src/components/Image'
import TextBox from '~/src/components/TextBox'
import Price from '~/src/components/Price'
import AddToCart from '~/src/components/AddToCart'
import { NavLink } from "react-router-dom";
import { productPath } from "~/src/helpers/routes";

class ProductCard extends Component {
  constructor(props){
    super(props);

    this.onDragStart  = this.onDragStart.bind(this);
  }

  onDragStart(e, product) {
    e.dataTransfer.setData('productDraggableObject', JSON.stringify(product));
    e.dataTransfer.setData('productDraggableCount', document.getElementById(`add_product_${product.id}_to_cart_counter`).value);
  };

  render () {
    const { id, title, price, imageUrl } = this.props.product;
    const product = this.props.product;

    return (
      <div key={id} id={id} draggable onDragStart={(e) => this.onDragStart(e, product) } className='row mb-3 mt-3 border pt-3 pb-3' >
        <div className='col-md-4'>
          <Image src={imageUrl} width='180' height='250' alt={title}/>
        </div>
        <div className='col-md-6'>
          <h4>
            <NavLink to={productPath(id)}>
              <TextBox text={title}/>
            </NavLink>
          </h4>

          <p><Price price={price}/></p>

          <AddToCart product={product}/>
        </div>
      </div>
    )
  }
}

export default ProductCard;