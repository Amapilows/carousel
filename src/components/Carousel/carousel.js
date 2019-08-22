import React from 'react';
import ImageSlide from './imageSlide';
import Arrow from './arrow';

const imgUrls = [
  "https://cdn.pixabay.com/photo/2019/08/08/13/52/elephant-4393034_1280.jpg", 
  "https://cdn.pixabay.com/photo/2019/03/12/12/47/people-4050698_1280.jpg",
  "https://cdn.pixabay.com/photo/2019/08/07/09/12/flowers-4390337_1280.jpg"
];

const style = {
    height: '250px',
    width: '500px',
    display: 'flex',
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
    console.log(index)
    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const currentImageIndex = this.state.currentImageIndex;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;
    console.log(index)
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