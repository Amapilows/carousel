import React from 'react';

const ImageSlide = (imgUrls) => {
  const img = imgUrls.url;
  const style = {
    backgroundImage: `url(${img})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%'
  };


  return (
    <div className="image-slide" style={style}></div>
  );
}



export default ImageSlide;