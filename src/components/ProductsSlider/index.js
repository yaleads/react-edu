import React from 'react';
import ProductCard from '~/src/components/ProductCard';

class ProductsSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {currentIndex: 0};
  }

  componentDidMount() {
    this.interval = setInterval(() => this.nextSlide(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  prevSlide = () => { this.setState( prevState => ({ currentIndex: (prevState.currentIndex - 1 + this.props.products.length) % this.props.products.length }) ) };
  nextSlide = () => { this.setState( prevState => ({ currentIndex: (prevState.currentIndex + 1) % this.props.products.length }) ) };


  render () {
    const products = this.props.products;
    const currentIndex = this.state.currentIndex;

    return (
      <div className={'row my-5'}>
        <div className={'col-10 col-sm-10 col-md-6'}>
          <ProductCard product={products[currentIndex]} />
        </div>
        <div className={'col-2 col-sm-2 col-md-2 pt-5'}>
          <button onClick={this.prevSlide} className={'mb-2'}>Prev</button>
          <br />
          <button onClick={this.nextSlide}>Next</button>
        </div>
      </div>

    )
  }
}

export default ProductsSlider;