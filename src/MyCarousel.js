import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
// import './assets/css/App.css';

class MyCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    renderCarousel(imgList){
      if(imgList !== null && imgList.length > 0){
        return imgList.map(function(image, index){
          return(
            <Carousel.Item >
              {
                image.imgArray.map((item)=>{
                  return(<img
                    src={item.imgUrl}
                    alt={image.imgTitle}
                    style={{width:'30%', height:'370px', display:'inline-block'}}
                  />);
                })
              }
              <Carousel.Caption>
                <h3>{image.imgTitle}</h3>
                <p>{image.imgDesc}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
      }
    }
    render(){
      let imgList = [{
        imgTitle:"First",
        imgDesc:"First Img Desc",
        imgArray:[{
          imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
        },{
          imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
        },
        {
          imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
        }]
      },{
        imgTitle:"Second",
        imgDesc:"Second Img Desc",
        imgArray:[{
          imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
        },{
          imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
        },
        {
          imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
        }]
      },
      {
        imgTitle:"Third",
        imgDesc:"Third Img Desc",
        imgArray:[{
          imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
        },{
          imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
        },
        {
          imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
        }]
      }
    ];

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

      return(
        <div>
            <Carousel>
              {
                this.renderCarousel(imgList)
              }
          </Carousel>
        </div> 
      );
  }
}

export default MyCarousel;
