import React from 'react';

class Carousel extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previosSlide = this.previosSlide(this);
  }

  previosSlide (){
    const lastIndex = imgUrls.length -1;
    const { currentImageIndex } = currentImageIndex === 0;
    const index = shouldReserIndex ? lastIndex : currentImageIndex - 1;
    this.setState({
      currentImageIndex: index
    });
  }
  nextSlide () {
    const lastIndex = imgUrls.length -1;
    const { currentImageIndex } = this.state;
    const shouldReserIndex =currentImageIndex === lastIndex;
    const index = shouldReserIndex ? 0 : currentImageIndex + 1;
    this.setState({
      currentImageIndex: index
    });
  }

  render () {
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction= {this.previosSlide}
          glyph="&#9664;" />

        <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />

        <Arrow
          direction="right"
          clickFunction= {this.nextSlide}
          glyph="&#9654;" />

      </div>

    );

  }

}

export default Carousel;