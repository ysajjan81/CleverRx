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
<<<<<<< HEAD
  getJpgs(){
    // let extension;
    // if(subType === 'img'){
    //   extension = '.png'
    // }else{
    //   extension = '.gif'
    // }
    let data=[];
    if(this.props.data  && this.props.data.insurance_dict.tid.length > 0 )
    {
              for(let i = 0 ; i<this.props.data.insurance_dict.tid.length; i++){
                if(this.props.data.insurance_dict.tid.length - i >= 3)
                {
                var img1 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.insurance_dict.tid[i++] + ".jpg";
                var img2 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.insurance_dict.tid[i++] + ".jpg";
                var img3 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.insurance_dict.tid[i++] + ".jpg";
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
                  var img1 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.insurance_dict.tid[i++] + ".jpg";
                  var img2 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.insurance_dict.tid[i++] + ".jpg";
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
                  var img1 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.insurance_dict.tid[i++] + ".gif";
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

              }
            }
            if(this.props.card == true && this.props.data && this.props.data.card_dict.tid.length > 0  )
            {
              for(let i = 0 ; i<this.props.data.card_dict.tid.length; i++){
                if(this.props.data.card_dict.tid.length - i >= 3)
                {
                var img1 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
                var img2 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
                var img3 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
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
                  var img1 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
                  var img2 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
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
                  var img1 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
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
              }
            }
            else if(this.props.card == false && this.props.data && this.props.data.without_insurance_dict.tid.length > 0 )
            {
              for(let i = 0 ; i<this.props.data.without_insurance_dict.tid.length; i++){
                if(this.props.data.without_insurance_dict.tid.length - i >= 3)
                {
                // var imag1  = [] ; 
                var img1  = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
                console.log("img1 = ")
                console.log(img1);
                var img2 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
                var img3 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
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
                  var img1 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
                  var img2 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
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
                  var img1 = "http:cips2.engineering.asu.edu:3001/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
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
              }
            }
        return data;
  }
=======
    renderCarousel(imgList, subType){
      if(imgList !== null && imgList.length > 0){
        return(
          <Card.Content>
            <h3>{subType}</h3>
            <Carousel>{
        imgList.map( (image, index) =>{
          return(
              <Carousel.Item>
                {
                  image.imgArray != null && image.imgArray.length > 0 ? image.imgArray.map((item)=>{
                    return(<img
                      src={item.imgUrl}
                      alt={image.imgTitle}
                      style={{width:'33.3%', height:'370px', display:'inline-block'}}
                    />);
                  }) : null
                }
                <Carousel.Caption>
                  <h3>{image.imgTitle}</h3>
                  <p>{image.imgDesc}</p>
                </Carousel.Caption>
              </Carousel.Item>
          );
        })
      }</Carousel></Card.Content>)
      }
    }
>>>>>>> f0865a03eb3a46c9d454ffdfec348338982b30d8
    render(){
      return(
        <div>
            {/* <Card style={{width:'unset'}}>
              <Card.Content>
                <Card.Header>Card/Customer</Card.Header>
              </Card.Content>
<<<<<<< HEAD
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
=======
                {this.renderCarousel(imgList, "Images")}
                {this.renderCarousel(imgList, "GIF's")}
>>>>>>> f0865a03eb3a46c9d454ffdfec348338982b30d8
            </Card>
            <Card style={{width:'unset'}}>
              <Card.Content>
                <Card.Header>Insurance</Card.Header>
              </Card.Content>
<<<<<<< HEAD
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
            </Card> */}
            <Card style={{width:'unset'}}>
              <Card.Content>
                <Card.Header>Insurance</Card.Header>
              </Card.Content>
              <Card.Content>
                <h3>Images</h3>
              </Card.Content>
              <Carousel>
                {this.getJpgs()}
              </Carousel>
              </Card>
=======
                {this.renderCarousel(imgList, "Images")}
                {this.renderCarousel(imgList, "GIF's")}
            </Card>
>>>>>>> f0865a03eb3a46c9d454ffdfec348338982b30d8
        </div> 
      );
  }
}

export default MyCarousel;