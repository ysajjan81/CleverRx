import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
// import './assets/css/App.css';
class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() { 
      let myList = [];

      // if(this.props.data && this.props.data.length != 0 && value == "insurance")
      // {
      //   for(let i = 0 ; i<this.props.data.length ;i++)
      //   {
      //   myList.push(
      //     <Carousel.Item>
      //       <img src={this.props.data[i]} alt="First slide" height="100" width="100" />
      //     </Carousel.Item>
      //   )
      //   }
      // }
      // if(this.props.data && this.props.data.length != 0 && value == "card")
      // {
      //   for(let i = 0 ; i<this.props.data.length ;i++)
      //   {
      //   myList.push(
      //     <Carousel.Item>
      //       <img src={this.props.data[i]} alt="First slide" height="100" width="100" />
      //     </Carousel.Item>
      //   )
      //   }
      // }
      // else if(this.props.data && this.props.data.length != 0 && value == "without_insurance")
      // {
      //   for(let i = 0 ; i<this.props.data.length ;i++)
      //   {
      //   myList.push(
      //     <Carousel.Item>
      //       <img src={this.props.data[i]} alt="First slide" height="100" width="100" />
      //     </Carousel.Item>
      //   )
      //   }
      // }

        return (
        <div>
            <Carousel >
            <Carousel.Item >
    <img style={{ height: '370px'}}
    //   className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg"
      alt="First slide"
    />
    
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{ height: '370px'}}
    // className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg"
      alt="Third slide"

    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{ height: '370px'}}
        // className="d-block w-100"
      src="https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div> );
    }
}

export default MyCarousel;

// import React, { Component } from 'react';
// import Slider from 'react-slick';
// // import "~slick-carousel/slick/slick.css"; 
// // import "~slick-carousel/slick/slick-theme.css";

// const photos = [
//     {
//         name: "Photo 1",
//         url: "https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg"
//     },
//     {
//         name: "Photo 2",
//         url: "https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg"
//     },
//     {
//         name: "Photo 3",
//         url: "https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg"
//     }

// ]

// class MyCarousel extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         const settings = {
//             dots: true,
//             fade: true,
//             infinite: true,
//             speed: 500,
//             slidesToShow: 1,
//             arrows: true,
//             slidesToScroll: 1,
//             className: "slides",

//         }
//         return ( 
//             <div>
//                 <Slider {...settings}>
//                     {
//                         photos.map((photo) => 
//                         {
//                             return (
//                                 <div>
//                                     <img width = "100%" src={photo.url}></img>
//                                 </div>
//                             )
//                         }
//                         )
//                     }
//                 </Slider>
//             </div>
//          );
//     }
// }
 
// export default MyCarousel;