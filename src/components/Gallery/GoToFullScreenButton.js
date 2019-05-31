import React from 'react';
import {Link} from "react-router-dom";
import { productImagePath }  from '~/src/helpers/routes';

const GoToFullScreenButton = ({productId, currentImageIndex, currentImage}) => (
  <Link className={'btn btn-primary mb-2'} to={{
    pathname: productImagePath(productId, currentImageIndex),
    state: {
      modal: true,
      image: currentImage
    }
  }}
  >
    Show full screen
  </Link>
);

export default GoToFullScreenButton;
