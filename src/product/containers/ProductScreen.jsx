import React from 'react';
import PropTypes from 'prop-types';
import { useRoute } from '@react-navigation/native';

import ProductDetails from '../components/ProductDetails';

const ProductScreen = () => {
  const { params } = useRoute();
  const { product } = params;

  return <ProductDetails {...product} />;
};

export default ProductScreen;

ProductScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        quantity: PropTypes.number,
        cover: PropTypes.number,
        label: PropTypes.string,
      }),
    }),
  }),
};
