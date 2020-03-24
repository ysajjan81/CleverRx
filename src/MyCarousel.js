import React, { Component } from 'react';
import {Carousel, CarouselItem} from 'react-bootstrap';
import { Card } from 'semantic-ui-react'
// import iframely from 'iframely';
// import './assets/css/App.css';

class MyCarousel extends Component 
{
  constructor(props)
  {
    super(props);
    this.state = {  }
  }

importAll = (r) => {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
}
  getJpgs = (value) =>
  {

    let data=[];
    if(this.props.data && value == "insurance" && this.props.data.insurance_dict.tid.length > 0)
    {
              for(let i = 0 ; i<this.props.data.insurance_dict.tid.length; i++)
              {
                // var temp = "../public/memes/jpgs/123456789"; //+ this.props.data.insurance_dict.tid[j];
                // temp = "123456789"
                // let images = [];
                // images = this.importAll(require.context("../public/memes/jpgs/123456789", false, /\.jpg/));
                // var propOwn = Object.getOwnPropertyNames(images);
                // var count = propOwn.length;
                // let imageNames = []; 
                // imageNames = Object.keys(images);
                // for(let i = 0 ; i<namelist.length ; i++)
                // {
                if(this.props.insurance_dict.length - i >= 3)
                {
                // var img1 = "../public/memes/jpgs/123456789" + this.props.data.insurance_dict.tid[i] + '/' + imageNames[i++];
                // var img2 = "../public/memes/jpgs/123456789" + this.props.data.insurance_dict.tid[i] + '/' + imageNames[i++];
                // var img3 = "../public/memes/jpgs/123456789" + this.props.data.insurance_dict.tid[i] + '/' + imageNames[i++];
                // var img1 = images['0.jpg'];
                // var img2 = images['1.jpg'];
                // var img3 = images['2.jpg'];
                // var img1 = images[imageNames[i++]];
                // var img2 = images[imageNames[i++]];
                // var img3 = images[imageNames[i++]];
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

                else if(this.props.insurance_dict.length - i  == 2)
                {
                  // var img1 = "/memes/jpgs/" + this.props.data.insurance_dict.tid[i] + '/' + imageNames[i++];
                  // var img2 = "/memes/jpgs/" + this.props.data.insurance_dict.tid[i]+ '/' + imageNames[i++];
                  // var img1 = images[imageNames[i++]];
                  // var img2 = images[imageNames[i++]];
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
                  // var img2 = "/memes/jpgs/" + this.props.data.insurance_dict.tid[i]+ "/" + imageNames[i++];
                  // var img1 = images[imageNames[i++]];
                  var img1 = "";
                  try {
                    img1 = "../public/memes/jpgs/123456789_0";// + this.props.data.insurance_dict.tid_0
                  }
                  catch(err) {
                    break;
                    // document.getElementById("demo").innerHTML = err.message;
                  }
                  data.push(
                    <Carousel.Item>
                      <img
                        src={img1}
                        alt="logo"
                        style={{width:'33.3%', height:'370px', display:'inline-block'}}
                      />
                    </Carousel.Item>
                  );
                // }
            }
          }
      }
            // if(this.props.card == true && value == "card" && this.props.data && this.props.data.card_dict.tid.length > 0  )
            // {
              
            //   for(let j = 0 ; j<this.props.data.card_dict.tid.length; j++)
            //   {

            //     var temp = "../public/memes/jpgs/123456789" //+ this.props.data.card_dict.tid[j];
            //     temp = "123456789";
            //     let images = [];
            //     images = this.importAll(require.context("../public/memes/jpgs/" + temp , false, /\.jpg/));
            //     var propOwn = Object.getOwnPropertyNames(images);
            //     var count = propOwn.length;
            //     let imageNames = [] ; 
            //     imageNames = Object.keys(images);

            //     for(let i = 0 ; i<count ; i++)
            //     {
            //     if(count - i >= 3)
            //     {
            //       var img1 = images[imageNames[i++]];
            //       var img2 = images[imageNames[i++]];
            //       var img3 = images[imageNames[i++]];
            //       // var img1 = "../public/memes/jpgs/" + this.props.data.card_dict.tid[i] + '/' + imageNames[i++];
            //       // var img2 = "../public/memes/jpgs/" + this.props.data.card_dict.tid[i] + '/' + imageNames[i++];
            //       // var img3 = "../public/memes/jpgs/" + this.props.data.card_dict.tid[i] + '/' + imageNames[i++];
            //     // var img1 = "/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
            //     // var img2 = "/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
            //     // var img3 = "/memes/jpgs/" + this.props.data.card_dict.tid[i++] + ".jpg";
            //     // var img1 = images['0.jpg']
            //     // var img2 = images['1.jpg'];
            //     // var img3 = images['2.jpg']
                
            //       data.push(
            //         <Carousel.Item>
            //           <img
            //             src={img1}
            //             alt="logo"
            //             style={{width:'33.3%', height:'370px', display:'inline-block'}}
            //           />
            //           <img
            //             src={img2}
            //             alt="logo"
            //             style={{width:'33.3%', height:'370px', display:'inline-block'}}
            //           />
            //           <img
            //             src={img3}
            //             alt="logo"
            //             style={{width:'33.3%', height:'370px', display:'inline-block'}}
            //           />
            //         </Carousel.Item>
            //       );
            //     }
            //     else if(count - i  == 2)
            //     {
            //       // var img2 = "../public/memes/jpgs/" + this.props.data.card_dict.tid[i] + '/' + imageNames[i++];
            //       // var img3 = "../public/memes/jpgs/" + this.props.data.card_dict.tid[i] + '/' + imageNames[i++];
            //       var img2 = images[imageNames[i++]];
            //       var img3 = images[imageNames[i++]];
            //       data.push(
            //         <Carousel.Item>
            //           <img
            //             src={img1}
            //             alt="logo"
            //             style={{width:'33.3%', height:'370px', display:'inline-block'}}
            //           />
            //           <img
            //             src={img2}
            //             alt="logo"
            //             style={{width:'33.3%', height:'370px', display:'inline-block'}}
            //           />
            //         </Carousel.Item>
            //       );
            //     }
            //     else {
            //       // var img2 = "../public/memes/jpgs/" + this.props.data.card_dict.tid[i] + '/' + imageNames[i++];
            //       var img2 = images[imageNames[i++]];
            //       data.push(
            //         <Carousel.Item>
            //           <img
            //             src={img1}
            //             alt="logo"
            //             style={{width:'33.3%', height:'370px', display:'inline-block'}}
            //           />
            //         </Carousel.Item>
            //       );
            //     }
            //   }
            // }
            // }
            // else if(this.props.card == false && value == "card" && this.props.data && this.props.data.without_insurance_dict.tid.length > 0 )
            // {
            //   for(let j = 0 ; j<this.props.data.without_insurance_dict.tid.length; j++)
            //   {

            //     var temp = "../public/memes/jpgs/123456789" //+ this.props.data.without_insurance_dict.tid[j];
            //     let images = [];
            //     images = this.importAll(require.context("../public/memes/jpgs/123456789", false, /\.jpg/));
            //     var propOwn = Object.getOwnPropertyNames(images);
            //     var count = propOwn.length;
            //     let imageNames = [] ; 
            //     imageNames = Object.keys(images);

            //     for(let i = 0 ; i<count ; i++)
            //     {
            //     if(count - i >= 3)
            //     {
            //       var img1 =  images[imageNames[i++]];
            //       var img2 =  images[imageNames[i++]];
            //       var img3 =  images[imageNames[i++]];
            //       // var img1 = "../public/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i] + '/' + imageNames[i++];
            //       // var img2 = "../public/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i] + '/' + imageNames[i++];
            //       // var img3 = "../public/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i] + '/' + imageNames[i++];
            //     // var img1  = "/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
            //     // var img2 = "/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
            //     // var img3 = "/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i++] + ".jpg";
            //     // var img1 = images['0.jpg'];
            //     // var img2 = images['1.jpg'];
            //     // var img3 = images['2.jpg'];
            //       data.push(
            //         <Carousel.Item>
            //           <img
            //             src={img1}
            //             alt="logo"
            //             style={{width:'33.3%', height:'370px', display:'inline-block'}}
            //           />
            //           <img
            //             src={img2}
            //             alt="logo"
            //             style={{width:'33.3%', height:'370px', display:'inline-block'}}
            //           />
            //           <img
            //             src={img3}
            //             alt="logo"
            //             style={{width:'33.3%', height:'370px', display:'inline-block'}}
            //           />
            //         </Carousel.Item>
            //       );
            //     }
            //     else if(count - i  == 2)
            //     {
            //       var img1 = images[imageNames[i++]];
            //       var img2 = images[imageNames[i++]];
            //       // var img1 = "../public/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i] + '/' + imageNames[i++];
            //       // var img2 = "../public/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i] + '/' + imageNames[i++];

            //       data.push(
            //         <Carousel.Item>
            //           <img
            //             src={img1}
            //             alt="logo"
            //             style={{width:'33.3%', height:'370px', display:'inline-block'}}
            //           />
            //           <img
            //             src={img2}
            //             alt="logo"
            //             style={{width:'33.3%', height:'370px', display:'inline-block'}}
            //           />
            //         </Carousel.Item>
            //       );
            //     }
            //     else {
            //       var img1 = images[imageNames[i++]];
            //       // var img1 = "../public/memes/jpgs/" + this.props.data.without_insurance_dict.tid[i] + '/' + imageNames[i++];
            //       data.push(
            //         <Carousel.Item>
            //           <img
            //             src={img1}
            //             alt="logo"
            //             style={{width:'33.3%', height:'370px', display:'inline-block'}}
            //           />
            //         </Carousel.Item>
            //       );
            //     }
            //   }
            // }
            // }
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
