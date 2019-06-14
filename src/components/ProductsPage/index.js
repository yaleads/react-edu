import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProducts } from 'actions/Products';
import ProductsPageView from './ProductsPageView';

class ProductsPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const {products, isFetching, isError } = this.props;
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
  fetchProducts:  PropTypes.func.isRequired,
  products:       PropTypes.array.isRequired,
  isFetching:     PropTypes.bool.isRequired,
  isError:        PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  products:   state.products.items,
  isFetching: state.products.isFetching,
  isError:    state.products.isError
});

export default connect(mapStateToProps, { fetchProducts })(ProductsPage);