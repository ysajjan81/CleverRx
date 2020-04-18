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
    this.sendDataToParent = this.sendDataToParent.bind(this);
  }
  sendDataToParent(event, {value})
  {
    this.props.myCallback(value);
  }

  getJpgs = (value) =>
  {
    let data=[];

    if(this.props.data!=null && value == "insurance" && this.props.data.insurance_dict.tid != null && this.props.data.insurance_dict.tid.length > 0)
    {
              var count = 0;
              var imageTid= [];
              for(let j = 0 ; j<this.props.data.insurance_dict.tid.length; j++)
              {
                var img = images[this.props.data.insurance_dict.tid[j]];
                imageTid.push.apply(imageTid, img);
                if(img != null && imageTid.length>0)
                   count+= images[this.props.data.insurance_dict.tid[j]].length;

               }
              for(let i = 0 ; i<count ; i++)
                {
                if(count - i >= 3)
                {

                var img1 = '/memes/jpgs/' + imageTid[i++];
                var img2 = '/memes/jpgs/' +imageTid[i++];
                var img3 = '/memes/jpgs/' +imageTid[i++];
                   data.push(
                    <Carousel.Item>

                      <div style={{width:'33.3%',  display:'inline-block'}}>
                        <div>
                        <input
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                          onChange={(event)=>this.sendDataToParent(event,this.props.data.insurance_dict.tid[i])}
                        />
                      </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                        <div>
                        <input
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                      />
                    </div><img
                        src={img2}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                        <div>
                        <input
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                        />
                      </div><img
                        src={img3}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                    </Carousel.Item>
                  );
                }

                else if(count - i  == 2)
                {

                  var img1 = '/memes/jpgs/' + imageTid[i++];
                  var img2 = '/memes/jpgs/' +imageTid[i++];
                  data.push(
                    <Carousel.Item>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                      <input
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                        onChange={(event)=>this.sendDataToParent(event,this.props.data.insurance_dict.tid[i])}
                      />
                    </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                        />
                      </div><img
                        src={img2}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                    </Carousel.Item>
                  );
                }
                else {
                  var img1 = '/memes/jpgs/' + imageTid[i++];
                  data.push(
                    <Carousel.Item>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                          onChange={(event)=>this.sendDataToParent(event,this.props.data.insurance_dict.tid[i])}
                        />
                      </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                    </Carousel.Item>
                  );
                }

          }
      }
            if(this.props.card == true && value == "card" && this.props.data.card_dict.tid != null && this.props.data && this.props.data.card_dict.tid.length > 0  )
            {
              var count = 0;
              var imageTid= [];
              for(let j = 0 ; j<this.props.data.card_dict.tid.length; j++)
              {

                var img = images[this.props.data.card_dict.tid[j]];
                imageTid.push.apply(imageTid, img);
                if(img != null && imageTid.length>0)
                   count+= images[this.props.data.card_dict.tid[j]].length;

               }

                for(let i = 0 ; i<count ; i++)
                {
                if(count - i >= 3)
                {

                var img1 = '/memes/jpgs/' + imageTid[i++];
                var img2 = '/memes/jpgs/' +imageTid[i++];
                var img3 = '/memes/jpgs/' +imageTid[i++];

                  data.push(
                    <Carousel.Item>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                        />
                      </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                      <input
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                      />
                    </div><img
                        src={img2}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                      <input
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                      />
                    </div><img
                        src={img3}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                    </Carousel.Item>
                  );
                }
                else if(count - i  == 2)
                {
                  var img1 = '/memes/jpgs/' + imageTid[i++];
                  var img2 = '/memes/jpgs/' +imageTid[i++];
                  data.push(
                    <Carousel.Item>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                      <input
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                      />
                    </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div>
                      <div>
                      <input
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                      />
                    </div><img
                        src={img2}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                    </Carousel.Item>
                  );
                }
                else {
                  var img1 = '/memes/jpgs/' + imageTid[i++];
                  data.push(
                    <Carousel.Item>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                      <input
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                      />
                    </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                    </Carousel.Item>
                  );

              }
            }
            }
            else if(this.props.card == false && value == "card" && this.props.data && this.props.data.without_insurance_dict.tid != null && this.props.data.without_insurance_dict.tid.length > 0 )
            {
              var count = 0;
              var imageTid= [];
              for(let j = 0 ; j<this.props.data.without_insurance_dict.tid.length; j++)
              {

                var img = images[this.props.data.without_insurance_dict.tid[j]];
                imageTid.push.apply(imageTid, img);
                if(img != null && imageTid.length>0)
                   count+= images[this.props.data.without_insurance_dict.tid[j]].length;

               }
                for(let i = 0 ; i<count ; i++)
                {
                if(count - i >= 3)
                {

                var img1 = '/memes/jpgs/' + imageTid[i++];
                var img2 = '/memes/jpgs/' +imageTid[i++];
                var img3 = '/memes/jpgs/' +imageTid[i++];


                  data.push(
                    <Carousel.Item>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                        />
                      </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                        />
                      </div><img
                        src={img2}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                        />
                      </div><img
                        src={img3}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                    </Carousel.Item>
                  );
                }
                else if(count - i  == 2)
                {
                  var img1 = '/memes/jpgs/' + imageTid[i++];
                  var img2 = '/memes/jpgs/' +imageTid[i++];

                  data.push(
                    <Carousel.Item>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                      <input
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                      />
                    </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                        />
                      </div><img
                        src={img2}
                        alt="logo" style={{height:'250px', width:'350px'}}
                      /></div>
                    </Carousel.Item>
                  );
                }
                else {
                  var img1 = '/memes/jpgs/' + imageTid[i++];
                  // var img1 = "../public/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i] + '/' + imageNames[i++];
                  data.push(
                    <Carousel.Item>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                        />
                      </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                    </Carousel.Item>
                  );
              }
            }
            }
        return data;
  }
    render(){
      return(
        <div style={{marginBottom:'30px'}}>
        <Card style={{width:'unset'}}>
          <Card.Content>
            <Card.Header>Card Memes</Card.Header>
          </Card.Content>

          { this.props.data != null ? <Carousel interval={null}>
            {this.getJpgs("card")}
          </Carousel> : null}
        </Card>
        <Card style={{width:'unset'}}>
          <Card.Content>
            <Card.Header>Insurance Memes</Card.Header>
          </Card.Content>

          { this.props.data != null ? <Carousel interval={null}>
            {this.getJpgs("insurance")}
          </Carousel> : null}
        </Card>
    </div>
      );
  }
}

export default MyCarousel;
