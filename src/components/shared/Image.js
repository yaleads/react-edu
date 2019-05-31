import React from 'react'

function Image({src, width, height, alt, className, onClickEvent}){
  return (
    <img
      src={src}
      width={width}
      height={height}
      alt={alt}
      className={className}
      onClick={onClickEvent}
    />
  )
}

export default Image;