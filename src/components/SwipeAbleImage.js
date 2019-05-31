import React from 'react';

class SwipeAbleImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { touchStartX: undefined, touchMoveX: undefined };
  }

  onTouchStart = (e) => { this.setState( {touchStartX: e.touches[0].clientX} ) };
  onTouchMove  = (e) => { this.setState( {touchMoveX:  e.touches[0].clientX} ) };
  onTouchEnd = () =>  {
    if (this.state.touchMoveX > this.state.touchStartX ) { this.props.onSwipe('right') }
    if (this.state.touchMoveX < this.state.touchStartX ) { this.props.onSwipe('left') }
  };


  render () {
    const {currentImage, width, height, className} = this.props;
    return (
      <img
        src={currentImage.url}
        width={width}
        height={height}
        alt={currentImage.title}
        className={className}
        onTouchStart={ this.onTouchStart }
        onTouchMove={ this.onTouchMove }
        onTouchEnd={ this.onTouchEnd }
      />
    )
  }
}

export default SwipeAbleImage;