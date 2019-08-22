const ImageSlide = ({ url }) {
  const style = {
    backgoundImage : 'url(${url})',
    backgroundSize : 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" style={style}></div>
  );
}