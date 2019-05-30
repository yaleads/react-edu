import React from 'react';
import Image from './Image'
import { Link } from "react-router-dom";

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = { mainImageIndex: 0, touchStartX: undefined, touchMoveX: undefined };
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  prevImage() { this.setState( prevState => ({ mainImageIndex: (prevState.mainImageIndex - 1 + this.props.images.length) % this.props.images.length }) ) }
  nextImage() { this.setState( prevState => ({ mainImageIndex: (prevState.mainImageIndex + 1) % this.props.images.length }) ) }

  onTouchStart(e) { this.setState( {touchStartX: e.touches[0].clientX} ) }
  onTouchMove(e)  { this.setState( {touchMoveX:  e.touches[0].clientX} ) }
  onTouchEnd() {
    if (this.state.touchMoveX > this.state.touchStartX ) { this.nextImage() }
    if (this.state.touchMoveX < this.state.touchStartX ) { this.prevImage() }
  }

  render () {
    //console.log(this.state);
    const images = this.props.images;

    if (images) {
      const mainImage = this.props.images[this.state.mainImageIndex];

      return (
        <div className={'mb-5'}>
          <h4 className="mt-5">Product Galery:</h4>

          <button onClick={this.prevImage}>&lt;</button>
          {
            <Image key={mainImage.url}
                   src={mainImage.url}
                   width={600}
                   height={400}
                   alt={mainImage.title}
                   className={'mb-2'}
                   onTouchStart={ this.onTouchStart }
                   onTouchMove={ this.onTouchMove }
                   onTouchEnd={ this.onTouchEnd }
            />
          }
          <button onClick={this.nextImage}>&gt;</button>

          <br />
          <Link className={'btn btn-primary mb-2'} to={{
              pathname: `/products/${this.props.productId}/img/${this.state.mainImageIndex}`,
              state: {
                modal: true,
                image: mainImage
              }
            }}
          >
            Show full screen
          </Link>

          <br />

          {images.map((image, index) => <Image key={index}
                                               src={image.url}
                                               width={120}
                                               height={80}
                                               alt={image.title}
                                               onClickEvent={ () => this.setState( { mainImageIndex: index }) }
          />)}



        </div>
      )
    }

    else
      return (<h4 className="mt-5">No images in Gallery</h4>)

  }
}

export default Gallery;

/*
toggleFullScreen() { this.setState(prevState => ( {isFullScreen: !prevState.isFullScreen} ) )}

<button className={'mb-2'} onClick={this.toggleFullScreen}>Show full screen</button>

{ this.state.isFullScreen && <FullScreen image={mainImage}
                                                   toggleFullScreen={ this.toggleFullScreen }
                                                   nextImage={this.nextImage}
                                                   prevImage={this.prevImage}
          /> }

*/