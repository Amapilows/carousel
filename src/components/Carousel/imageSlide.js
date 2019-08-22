import React from 'react';

const ImageSlide = (imgUrls) => {
  const img = imgUrls.url;
  const style = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '200px',
    height: '100px'
  };


  return (
    <div className="image-slide" style={style}></div>
  );
}



export default ImageSlide;