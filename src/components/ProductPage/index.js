import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProduct } from '~/src/actions/Product';
import ProductPageView from './ProductPageView'
import { productsPath } from '~/src/helpers/routes'


class ProductPage extends React.Component {

  componentDidMount() {
    this.props.fetchProduct(this.props.id);
  }

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
  fetchProduct: PropTypes.func.isRequired,
  product:      PropTypes.object.isRequired,
  isFetching:   PropTypes.bool.isRequired,
  isError:      PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  product:    state.product.item,
  isFetching: state.product.isFetching,
  isError:    state.product.isError
});

export default connect(mapStateToProps, { fetchProduct })(ProductPage);
