import React, { Component } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import { Card } from 'semantic-ui-react'
// import iframely from 'iframely';
// import './assets/css/App.css';

class MyCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  renderCarousel(imgList, subType){
    let extension;
    if(subType === 'img'){
      extension = '.png'
    }else{
      extension = '.gif'
    }
    let data=[];
    if(this.props.data  && this.props.data.facebook.length > 0 )
    {
              for(let i = 0 ; i<this.props.data.facebook.length; i++){
                if(this.props.data.facebook.length - i >= 3)
                {
                var img1 = "http:cips2.engineering.asu.edu:3001/avatar_pages/" + this.props.data.facebook[i++].id + ".png"
                var img2 = "http:cips2.engineering.asu.edu:3001/avatar_pages/" + this.props.data.facebook[i++].id + ".png"
                var img3 = "http:cips2.engineering.asu.edu:3001/avatar_pages/" + this.props.data.facebook[i++].id + ".png"
                  data.push(
                    <Carousel.Item>
                      <img
                        src={img1}
                        alt="logo"
                        style={{width:'33.3%', height:'370px', display:'inline-block'}}
                      />
                      <img
                        src={img2}
                        alt="logo"
                        style={{width:'33.3%', height:'370px', display:'inline-block'}}
                      />
                      <img
                        src={img3}
                        alt="logo"
                        style={{width:'33.3%', height:'370px', display:'inline-block'}}
                      />
                    </Carousel.Item>
                  );
                }
                else if(this.props.length - i  == 2)
                {
                  var img1 = "http:cips2.engineering.asu.edu:3001/avatar_pages/" + this.props.data.facebook[i++].id + ".png"
                  var img2 = "http:cips2.engineering.asu.edu:3001/avatar_pages/" + this.props.data.facebook[i++].id + ".png"
                  data.push(
                    <Carousel.Item>
                      <img
                        src={img1}
                        alt="logo"
                        style={{width:'33.3%', height:'370px', display:'inline-block'}}
                      />
                      <img
                        src={img2}
                        alt="logo"
                        style={{width:'33.3%', height:'370px', display:'inline-block'}}
                      />
                    </Carousel.Item>
                  );
                }
                else {
                  var img1 = "http:cips2.engineering.asu.edu:3001/avatar_pages/" + this.props.data.facebook[i++].id + ".png"
                  data.push(
                    <Carousel.Item>
                      <img
                        src={img1}
                        alt="logo"
                        style={{width:'33.3%', height:'370px', display:'inline-block'}}
                      />
                    </Carousel.Item>
                  );
                }
                /* We can change between gif and imaged based on path name or list based on how it's coming */
                // var img1 = "/avatar_pages/" + this.props.data.facebook[i].id + ".png"
                // var img2 = "/avatar_pages/" + this.props.data.facebook[i+1].id + ".png"
                // var img3 = "/avatar_pages/" + this.props.data.facebook[i+2].id + ".png"
                // data.push(
                //   <Carousel.Item>
                //     <img
                //       src={img1}
                //       alt="logo"
                //       style={{width:'33.3%', height:'370px', display:'inline-block'}}
                //     />
                //     <img
                //       src={img2}
                //       alt="logo"
                //       style={{width:'33.3%', height:'370px', display:'inline-block'}}
                //     />
                //     <img
                //       src={img3}
                //       alt="logo"
                //       style={{width:'33.3%', height:'370px', display:'inline-block'}}
                //     />
                //   </Carousel.Item>
                // );
              }
            }
        return data;
  }
    render(){
    //   let imgList = [{
    //     imgTitle:"First",
    //     imgDesc:"First Img Desc",
    //     imgArray:[{
    //       imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
    //     },{
    //       imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
    //     },
    //     {
    //       imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
    //     }]
    //   },{
    //     imgTitle:"Second",
    //     imgDesc:"Second Img Desc",
    //     imgArray:[{
    //       imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
    //     },{
    //       imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
    //     },
    //     {
    //       imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
    //     }]
    //   },
    //   {
    //     imgTitle:"Third",
    //     imgDesc:"Third Img Desc",
    //     imgArray:[{
    //       imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
    //     },{
    //       imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
    //     },
    //     {
    //       imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
    //     }]
    //   }
    // ];

//     renderCarousel(imgList){
//       if(imgList !== null && imgList.length > 0){
//         return imgList.map(function(image, index){

//           return(
//             <Carousel.Item >
//               <img
//                 src={image.imgUrl}
//                 alt={image.imgTitle}
//                 style={{width:'100%', height:'370px'}}
//               />
//               <Carousel.Caption>
//                 <h3>{image.imgTitle}</h3>
//                 <p>{image.imgDesc}</p>
//               </Carousel.Caption>
//             </Carousel.Item>
//           );
//         })
//       }
//     }
//     render(){
//       let imgList = [{
//         imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
//         imgTitle:"First",
//         imgDesc:"First Img Desc"
//       },{
//         imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
//         imgTitle:"Second",
//         imgDesc:"Second Img Desc"
//       },
//       {
//         imgUrl:"https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg",
//         imgTitle:"Third",
//         imgDesc:"Third Img Desc"
//       }
//     ];

//       // if(this.props.data && this.props.data.length != 0 && value == "insurance")
//       // {
//       //   for(let i = 0 ; i<this.props.data.length ;i++)
//       //   {
//       //   myList.push(
//       //     <Carousel.Item>
//       //       <img src={this.props.data[i]} alt="First slide" height="100" width="100" />
//       //     </Carousel.Item>
//       //   )
//       //   }
//       // }
//       // if(this.props.data && this.props.data.length != 0 && value == "card")
//       // {
//       //   for(let i = 0 ; i<this.props.data.length ;i++)
//       //   {
//       //   myList.push(
//       //     <Carousel.Item>
//       //       <img src={this.props.data[i]} alt="First slide" height="100" width="100" />
//       //     </Carousel.Item>
//       //   )
//       //   }
//       // }
//       // else if(this.props.data && this.props.data.length != 0 && value == "without_insurance")
//       // {
//       //   for(let i = 0 ; i<this.props.data.length ;i++)
//       //   {
//       //   myList.push(
//       //     <Carousel.Item>
//       //       <img src={this.props.data[i]} alt="First slide" height="100" width="100" />
//       //     </Carousel.Item>
//       //   )
//       //   }
//       // }

      return(
        <div>
            <Card style={{width:'unset'}}>
              <Card.Content>
                <Card.Header>Card/Customer</Card.Header>
              </Card.Content>
              <Card.Content>
                <h3>Images</h3>
              </Card.Content>
              {this.props.data != null ?
               <Carousel>
                {this.renderCarousel(this.props.data, "img")}
              </Carousel> : null}
              <Card.Content>
                <h3>GIF's</h3>
              </Card.Content>
              {this.props.data != null ? <Carousel>
                {this.renderCarousel(this.props.data, "img")}
              </Carousel> : null}
            </Card>
            <Card style={{width:'unset'}}>
              <Card.Content>
                <Card.Header>Insurance</Card.Header>
              </Card.Content>
              <Card.Content>
                <h3>Images</h3>
              </Card.Content>
              { this.props.data != null ? <Carousel>
                {this.renderCarousel(this.props.data, "img")}
              </Carousel> : null}
              <Card.Content>
                <h3>GIF's</h3>
              </Card.Content>
              { this.props.data != null ? <Carousel>
                {this.renderCarousel(this.props.data, "img")}
              </Carousel> : null}
            </Card>
        </div> 
      );
  }
}

export default MyCarousel;
