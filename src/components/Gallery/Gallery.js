import React from 'react';
import Image from '../shared/Image';
import GoToFullScreenButton from './GoToFullScreenButton';
import SwipeAbleImage from './SwipeAbleImage';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentImageIndex: 0 };
  }

  prevImage = () => { this.setState( prevState => ({ currentImageIndex: (prevState.currentImageIndex - 1 + this.props.images.length) % this.props.images.length }) ) };
  nextImage = () => { this.setState( prevState => ({ currentImageIndex: (prevState.currentImageIndex + 1) % this.props.images.length }) ) };

  render () {
    const images = this.props.images;

    if (images) {
      const productId = this.props.productId;
      const currentImage = this.props.images[this.state.currentImageIndex];

      return (
        <div className={'mb-5'}>
          <h4 className="mt-5">Product Galery:</h4>

          <button onClick={this.prevImage}>&lt;</button>

          <SwipeAbleImage
            currentImage={currentImage}
            width={600}
            height={400}
            className={'mb-2'}
            onSwipe={(direction) => {
              const diff = direction === 'right' ? (-1 + images.length) : 1;
              this.setState(prevState => ({
                currentImageIndex: (prevState.currentImageIndex + diff) % images.length
              }))
            }}
            />

          <button onClick={this.nextImage}>&gt;</button>

          <br />

          <GoToFullScreenButton productId={productId} currentImageIndex={this.state.currentImageIndex} currentImage={currentImage} />

          <br />

          {images.map((image, index) => (
            <Image
              key={index}
              src={image.url}
              width={120}
              height={80}
              alt={image.title}
              onClickEvent={ () => this.setState( { currentImageIndex: index }) } />
            )
          )}

        </div>
      )
    }

    else
      return (<h4 className="mt-5">No images in Gallery</h4>)

  }
}

export default Gallery;