import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProductPageView from './ProductPageView'
import { productsPath } from 'helpers/routes'


class ProductPage extends React.Component {
  componentDidUpdate() {
    if (this.props.isError) {
      this.props.history.push({
        pathname: productsPath(),
        state: { errorMessage: 'ProductPage not found' }
      });
    }
  }

  render () {
    const { product, isFetching, isError } = this.props;
    return <ProductPageView product={product} isFetching={isFetching} isError={isError} />
  }
}

ProductPage.propTypes = {
  product:      PropTypes.object.isRequired,
  isFetching:   PropTypes.bool.isRequired,
  isError:      PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  product:    state.product.item,
  isFetching: state.product.isFetching,
  isError:    state.product.isError
});

export default connect(mapStateToProps)(ProductPage);
