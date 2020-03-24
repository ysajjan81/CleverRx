import React, { Component } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import { Card } from 'semantic-ui-react'
import images from './jpeg.json'

class MyCarousel extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {  }
  }

  getJpgs = (value) =>
  {
    let data=[];

    if(this.props.data!=null && value == "insurance" && this.props.data.insurance_dict.tid != null && this.props.data.insurance_dict.tid.length > 0)
    {
              for(let j = 0 ; j<this.props.data.insurance_dict.tid.length; j++)
              {
                var imageTid = images[this.props.data.insurance_dict.tid[j]];

                if(imageTid != null && imageTid.length>0)
                  var count = images[this.props.data.insurance_dict.tid[j]].length;
                else
                  var count = 0;
                for(let i = 0 ; i<count ; i++)
                {
                if(count - i >= 3)
                {

                var img1 = '/memes/jpgs/' + imageTid[i++];
                var img2 = '/memes/jpgs/' +imageTid[i++];
                var img3 = '/memes/jpgs/' +imageTid[i++];
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

                else if(count - i  == 2)
                {

                  var img1 = '/memes/jpgs/' + imageTid[i++];
                  var img2 = '/memes/jpgs/' +imageTid[i++];
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
                  var img1 = '/memes/jpgs/' + imageTid[i++];
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
      }
            if(this.props.card == true && value == "card" && this.props.data.card_dict.tid != null && this.props.data && this.props.data.card_dict.tid.length > 0  )
            {

              for(let j = 0 ; j<this.props.data.card_dict.tid.length; j++)
              {

                var imageTid = images[this.props.data.card_dict.tid[j]];
                if(imageTid != null && imageTid.length > 0)
                  var count = images[this.props.data.card_dict.tid[j]].length;
                else
                  var count = 0;
                for(let i = 0 ; i<count ; i++)
                {
                if(count - i >= 3)
                {

                var img1 = '/memes/jpgs/' + imageTid[i++];
                var img2 = '/memes/jpgs/' +imageTid[i++];
                var img3 = '/memes/jpgs/' +imageTid[i++];

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
                else if(count - i  == 2)
                {
                  var img1 = '/memes/jpgs/' + imageTid[i++];
                  var img2 = '/memes/jpgs/' +imageTid[i++];
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
                  var img1 = '/memes/jpgs/' + imageTid[i++];
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
            }
            else if(this.props.card == false && value == "card" && this.props.data && this.props.data.without_insurance_dict.tid != null && this.props.data.without_insurance_dict.tid.length > 0 )
            {
              for(let j = 0 ; j<this.props.data.without_insurance_dict.tid.length; j++)
              {

                var imageTid = images[this.props.data.without_insurance_dict.tid[j]];


                  if(imageTid != null && imageTid.length > 0)
                    var count = images[this.props.data.without_insurance_dict.tid[j]].length;
                  else var count = 0

                for(let i = 0 ; i<count ; i++)
                {
                if(count - i >= 3)
                {

                var img1 = '/memes/jpgs/' + imageTid[i++];
                var img2 = '/memes/jpgs/' +imageTid[i++];
                var img3 = '/memes/jpgs/' +imageTid[i++];


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
                else if(count - i  == 2)
                {
                  var img1 = '/memes/jpgs/' + imageTid[i++];
                  var img2 = '/memes/jpgs/' +imageTid[i++];

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
                  var img1 = '/memes/jpgs/' + imageTid[i++];
                  // var img1 = "../public/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i] + '/' + imageNames[i++];
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
        </Card>
    </div>
      );
  }
}

export default MyCarousel;
