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
    this.sendDataToParentToCardCustomer = this.sendDataToParentToCardCustomer.bind(this);
    this.sendDataToParentToInsurance = this.sendDataToParentToInsurance.bind(this);
  }
  sendDataToParentToCardCustomer(event, value)
  {
    this.props.propsForCardCustomer(value);
  }
  sendDataToParentToInsurance(event, value)
  {
    this.props.propsForInsurance(value);
  }

  getJpgs = (value) =>
  {

    let data=[];
    if(this.props.data!=null && value == "insurance" && this.props.data.insurance_dict.tid != null && this.props.data.insurance_dict.tid.length > 0)
    {
              var count = 0;
              var imageTid= [];
              var validInsuranceMemes=[]
              for(let j = 0 ; j<this.props.data.insurance_dict.tid.length; j++)
              {
                var img = images[this.props.data.insurance_dict.tid[j]];
                imageTid.push.apply(imageTid, img);
                if(img != null && imageTid.length>0){
                   count+= images[this.props.data.insurance_dict.tid[j]].length;
                   validInsuranceMemes.push(this.props.data.insurance_dict.tid[j])
                }
               }

              for(let i = 0 ; i<count ; i++)
                {
                if(count - i >= 3)
                {
                var img1 = '/memes/jpgs/' + imageTid[i++];
                var img2 = '/memes/jpgs/' + imageTid[i++];
                var img3 = '/memes/jpgs/' + imageTid[i++];
                   data.push(
                    <Carousel.Item>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                        <div>
                        <input
                          key={this.props.data.insurance_dict.tid.length}
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                          onChange={(event)=>this.sendDataToParentToInsurance(event,validInsuranceMemes[i-3])}
                        />
                      </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                        <div>
                        <input
                        key={this.props.data.insurance_dict.tid.length}
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                        onChange={(event)=>this.sendDataToParentToInsurance(event,validInsuranceMemes[i-2])}
                      />
                    </div><img
                        src={img2}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                        <div>
                        <input
                          key={this.props.data.insurance_dict.tid.length}
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                          onChange={(event)=>this.sendDataToParentToInsurance(event,validInsuranceMemes[i-1])}
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
                        key={this.props.data.insurance_dict.tid.length}
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                        onChange={(event)=>this.sendDataToParentToInsurance(event,validInsuranceMemes[i-2])}
                      />
                    </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                        key={this.props.data.insurance_dict.tid.length}
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                          onChange={(event)=>this.sendDataToParentToInsurance(event,validInsuranceMemes[i-1])}
                        />
                      </div><img
                        src={img2}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                    </Carousel.Item>
                  );
                }
                else if (count - i  == 1){
                  var img1 = '/memes/jpgs/' + imageTid[i++];
                  data.push(
                    <Carousel.Item>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                        key={this.props.data.insurance_dict.tid.length}
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                          onChange={(event)=>this.sendDataToParentToInsurance(event,validInsuranceMemes[i-1])}
                        />
                      </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                    </Carousel.Item>
                  );
                }
                i--;

          }
      }
            if(this.props.card == true && value == "card" && this.props.data.card_dict.tid != null && this.props.data && this.props.data.card_dict.tid.length > 0  )
            {
              var count = 0;
              var imageTid= [];
              var validCardsWithInsuranceMemes=[]
              for(let j = 0 ; j<this.props.data.card_dict.tid.length; j++)
              {
                var img = images[this.props.data.card_dict.tid[j]];
                imageTid.push.apply(imageTid, img);
                if(img != null && imageTid.length>0){
                   count+= images[this.props.data.card_dict.tid[j]].length;
                   validCardsWithInsuranceMemes.push(this.props.data.card_dict.tid[j])
                }
               }
              //  console.log("count = " + count);
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
                        key={this.props.data.card_dict.tid.length}
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                          onChange={(event)=>this.sendDataToParentToCardCustomer(event,validCardsWithInsuranceMemes[i-3])}
                        />
                      </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                      <input
                      key={this.props.data.card_dict.tid.length}
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                        onChange={(event)=>this.sendDataToParentToCardCustomer(event,validCardsWithInsuranceMemes[i-2])}
                      />
                    </div><img
                        src={img2}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                      <input
                      key={this.props.data.card_dict.tid.length}
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                        onChange={(event)=>this.sendDataToParentToCardCustomer(event,validCardsWithInsuranceMemes[i-1])}
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
                      key={this.props.data.card_dict.tid.length}
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                        onChange={(event)=>this.sendDataToParentToCardCustomer(event,validCardsWithInsuranceMemes[i-2])}
                      />
                    </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div>
                      <div>
                      <input
                        key={this.props.data.card_dict.tid.length}
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                        onChange={(event)=>this.sendDataToParentToCardCustomer(event,validCardsWithInsuranceMemes[i-1])}
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
                        key={this.props.data.card_dict.tid.length}
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                        onChange={(event)=>this.sendDataToParentToCardCustomer(event,validCardsWithInsuranceMemes[i-1])}
                      />
                    </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                    </Carousel.Item>
                  );

              }
              i--;
            }
            }
            else if(this.props.card == false && value == "card" && this.props.data && this.props.data.without_insurance_dict.tid != null && this.props.data.without_insurance_dict.tid.length > 0 )
            {
              // console.log("insidegetJpgs =" + this.props.data.without_insurance_dict.tid.length);
              var count = 0;
              var imageTid= [];
              var validCardsWithoutInsuranceMemes=[]
              for(let j = 0 ; j<this.props.data.without_insurance_dict.tid.length; j++)
              {
                var img = images[this.props.data.without_insurance_dict.tid[j]];
                
                imageTid.push.apply(imageTid, img);
                if(img != null && imageTid.length>0){
                  count+= images[this.props.data.without_insurance_dict.tid[j]].length;
                  validCardsWithoutInsuranceMemes.push(this.props.data.without_insurance_dict.tid[j])
                }
               }
              //  console.log("count = " + count);
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
                          key={this.props.data.without_insurance_dict.tid.length}
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                          onChange={(event)=>this.sendDataToParentToCardCustomer(event,validCardsWithoutInsuranceMemes[i-3])}
                        />
                      </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                          key={this.props.data.without_insurance_dict.tid.length}
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                          onChange={(event)=>this.sendDataToParentToCardCustomer(event,validCardsWithoutInsuranceMemes[i-2])}
                        />
                      </div><img
                        src={img2}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                        key={this.props.data.without_insurance_dict.tid.length}
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                          onChange={(event)=>this.sendDataToParentToCardCustomer(event,validCardsWithoutInsuranceMemes[i-1])}
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
                      key={this.props.data.without_insurance_dict.tid.length}
                        type="checkbox"
                        style={{ transform: 'scale(1.5)', }}
                        onChange={(event)=>this.sendDataToParentToCardCustomer(event,validCardsWithoutInsuranceMemes[i-2])}
                      />
                    </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}

                      /></div>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                        key={this.props.data.without_insurance_dict.tid.length}
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                          onChange={(event)=>this.sendDataToParentToCardCustomer(event,validCardsWithoutInsuranceMemes[i-1])}
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
                  // var img1 = "../public/memes/jpgs/" + validCardsWithoutInsuranceMemes[i] + '/' + imageNames[i++];
                  data.push(
                    <Carousel.Item>
                      <div style={{width:'33.3%',  display:'inline-block'}}>
                      <div>
                        <input
                          key={this.props.data.without_insurance_dict.tid.length}
                          type="checkbox"
                          style={{ transform: 'scale(1.5)', }}
                          onChange={(event)=>this.sendDataToParentToCardCustomer(event,validCardsWithoutInsuranceMemes[i-1])}
                        />
                      </div><img
                        src={img1}
                        alt="logo" style={{height:'250px', width:'350px'}}
                      /></div>
                    </Carousel.Item>
                  );
              }
              i--;
            }
            }
        return data;
  }
    render()
    {
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
