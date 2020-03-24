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
  getJpgs(value){
    let data=[];
    if(this.props.data && value == "insurance" && this.props.data.insurance_dict.tid.length>0)
    {
              for(let i = 0 ; i<this.props.data.insurance_dict.tid.length; i++)
              {

                if(this.props.data.insurance_dict.tid.length - i >= 3)
                {
                var img1 = "/memes/jpgs/" + this.props.data.insurance_dict.tid[i++] + ".jpg";
                var img2 = "/memes/jpgs/" + this.props.data.insurance_dict.tid[i++] + ".jpg";
                var img3 = "/memes/jpgs/" + this.props.data.insurance_dict.tid[i++] + ".jpg";
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
                  var img1 = "/memes/jpgs/" + this.props.data.insurance_dict.tid[i++] + ".jpg";
                  var img2 = "/memes/jpgs/" + this.props.data.insurance_dict.tid[i++] + ".jpg";
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
                  var img1 = "/memes/jpgs/" + this.props.data.insurance_dict.tid[i++] + ".gif";
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
            if(this.props.card == true && value == "card" && this.props.data && this.props.data.card_dict.tid.length > 0  )
            {
              for(let i = 0 ; i<this.props.data.card_dict.tid.length; i++){
                if(this.props.data.card_dict.tid.length - i >= 3)
                {
                var img1 = "/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
                var img2 = "/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
                var img3 = "/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
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
                  var img1 = "/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
                  var img2 = "/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
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
                  var img1 = "/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
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
            else if(this.props.card == false && value == "card" && this.props.data && this.props.data.without_insurance_dict.tid.length > 0 )
            {
              for(let i = 0 ; i<this.props.data.without_insurance_dict.tid.length; i++){
                if(this.props.data.without_insurance_dict.tid.length - i >= 3)
                {
                // var imag1  = [] ; 
                var img1  = "memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
                // console.log("img1 = ")
                // console.log(img1);
                var img2 = "/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
                var img3 = "/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
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
                  var img1 = "/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
                  var img2 = "memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
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
                  var img1 = "/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
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
    render(){
      return(
        <div>
        <Card style={{width:'unset'}}>
          <Card.Content>
            <Card.Header>Card/Customer</Card.Header>
          </Card.Content>
          <Card.Content>
            <h3>Images</h3>
          </Card.Content>
          { this.props.data != null ? <Carousel>
            {this.getJpgs("card")}
          </Carousel> : null}
          {/* <Card.Content>
            <h3>GIF's</h3>
          </Card.Content>
          { this.props.data != null ? <Carousel>
            {this.renderCarousel(this.props.data, "img")}
          </Carousel> : null} */}
        </Card>
        <Card style={{width:'unset'}}>
          <Card.Content>
            <Card.Header>Insurance</Card.Header>
          </Card.Content>
          <Card.Content>
            <h3>Images</h3>
          </Card.Content>
          { this.props.data != null ? <Carousel>
            {this.getJpgs("insurance")}
          </Carousel> : null}
          {/* <Card.Content>
            <h3>GIF's</h3>
          </Card.Content>
          { this.props.data != null ? <Carousel>
            {this.renderCarousel(this.props.data, "img")}
          </Carousel> : null} */}
        </Card>
    </div> 
      );
  }
}

export default MyCarousel;