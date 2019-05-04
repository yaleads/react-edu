import React, { Component } from 'react'
import Image from '~/src/components/Image'
import TextBox from '~/src/components/TextBox'
import Price from '~/src/components/Price'
import AddToCartButton from '~/src/components/AddToCartButton'
import Counter from '~/src/components/Counter'




class ProductCard extends Component {
  constructor(props){
    super(props);

    this.state = {count: 1};
    this.addCount     = this.addCount.bind(this);
    this.removeCount  = this.removeCount.bind(this);
    this.onDragStart  = this.onDragStart.bind(this);
  }

  addCount()    { this.setState( (prevState) => ( {count: prevState.count + 1 })) }
  removeCount() { this.setState( (prevState) => ( {count: (prevState.count === 1 ? 1 : prevState.count - 1 ) })) }

  onDragStart(e) {
    e.dataTransfer.setData('product_draggable_id', e.target.id);
    e.dataTransfer.setData('product_draggable_count', this.state.count);
  };

  render () {
    return (
      <div key={this.props.product.id} id={this.props.product.id} draggable onDragStart={this.onDragStart} className='row mb-3 mt-3 border pt-3 pb-3' >
        <div className='col-md-4'>
          <Image src={this.props.product.imageUrl} width='180' height='250' alt={this.props.product.title}/>
        </div>
        <div className='col-md-6'>
          <h4><TextBox text={this.props.product.title}/></h4>
          <p><Price price={this.props.product.price}/></p>
          <p><Counter product={this.props.product} count={this.state.count} addCount={this.addCount} removeCount={this.removeCount}/></p>
          <p><AddToCartButton count={this.state.count} product_id={this.props.product.id}/></p>
        </div>
      </div>
    )
  }
}

export default ProductCard;