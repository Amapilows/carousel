import React from 'react';
import ImageSlide from './imageSlide';
import Arrow from './arrow';

const imgUrls = [
  "http://es.web.img3.acsta.net/r_1920_1080/pictures/17/02/06/17/01/343859.jpg", 
  "http://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/35/18/37/18370105.jpg",
  "http://es.web.img3.acsta.net/r_1920_1080/medias/nmedia/18/35/23/94/18388937.jpg"
];

const style = {
  height: '500px',
  width: '500px',
};

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const currentImageIndex = this.state.currentImageIndex;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;
    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const currentImageIndex = this.state.currentImageIndex;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  }


  render () {
    return (
      <div className="carousel" style={style}>
        <Arrow
          direction="left"
          clickFunction= {this.previousSlide}
          glyph="&#9664;" />

        <ImageSlide url={imgUrls[this.state.currentImageIndex]} />

        <Arrow
          direction="right"
          clickFunction= {this.nextSlide}
          glyph="&#9654;" />

      </div>

    );

  }

}

export default Carousel;