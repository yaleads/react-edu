import React from 'react'

function Image({src, width, height, alt, className, onClickEvent, onTouchStart, onTouchMove, onTouchEnd}){
  return (
    <img src={src}
         width={width}
         height={height}
         alt={alt}
         className={className}
         onClick={onClickEvent}
         onTouchStart={ (e) => onTouchStart && onTouchStart(e) }
         onTouchMove={ (e) => onTouchMove && onTouchMove(e) }
         onTouchEnd={ () => onTouchEnd && onTouchEnd() } />
  )
}

export default Image;