import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from '~/src/actions/Products';
import ProductsPageView from './ProductsPageView'

class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const {products, isFetching, isError } = this.props;
    console.log(products, isFetching, isError);
    const alertText = this.props.location.state && this.props.location.state.errorMessage;
    return (
      <ProductsPageView
        products={products}
        sliderProducts={products}
        alertText={alertText}
        isFetching={isFetching}
        isError={isError}
      />
    )

  }
}

ProductsPage.propTypes = {
  fetchProducts: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
  isFetching: PropTypes.bool,
  error: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    products: state.products.items,
    isFetching: state.products.isFetching,
    isError: state.products.isError
  }
};

export default connect(mapStateToProps, { fetchProducts })(ProductsPage);