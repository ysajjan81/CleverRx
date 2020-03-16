import React, { Component } from 'react';
import DisplayMessage from './DisplayMessage';
import TextContent from './TextContent';
// // import Mytable from './MyTable';
import TableExampleError from './TableExampleError';
import {Grid, Divider, Segment, GridColumn, Dropdown, Form , Button, Checkbox, Icon } from 'semantic-ui-react';
import HeaderBar from './HeaderBar';
import Experience from './Experience'
import App from './App';
// import { Layout, Icon, Button } from 'antd';
import Topics from './Topics';
import FacebookAndTwitter from './FacebookAndTwitter';
import './assets/css/App.css';
import MyCloud from './MyCloud';
import CardTable from './CardTable';
import SimpleTable from './components/table';
// import tweets from './tweets'
// import myTweets from './myTweets'
import MyTweets from './MyTweets';
import Mylinks from './Mylinks';
// import tableJson from './topicData.json';
// const { Header, Footer, Content } = Layout;
import WordCloud from './WordCloud';
import phrase from './phrase_frequency.json';
import MultipleSelect from './MultipleSelect';
import SortedTable from './SortedTable';

const loadingIcon = <Icon loading style={{ fontSize: 150, color:"black" }} name='spinner' />;
let current = '';
let prev = '';
const topicOptions = [
    {
      key: 'Heart Hypertension',
      text: 'Heart Hypertension',
      value: 'heart hypertension',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'Diabetes',
      text: 'Diabetes',
      value: 'diabetes',
      // image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
      key: 'Cancer',
      text: 'Cancer',
      value: 'cancer',
      // image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
      key: 'STD/Infection',
      text: 'STD/Infection',
      value: 'STD/Infection',
      // image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
      key: 'Allergy',
      text: 'Allergy',
      value: 'allergy',
      // image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
      key: 'Liver',
      text: 'Liver',
      value: 'liver',
      // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'Adiction',
      text: 'Adiction',
      value: 'adiction',
      // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'Alzheimer',
      text: 'Alzheimer',
      value: 'alzheimer',
      // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'Pain',
      text: 'Pain',
      value: 'pain',
      // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'Asthma',
      text: 'Asthma',
      value: 'asthma',
      // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'Pregnancy',
      text: 'Pregnancy',
      value: 'pregnancy',
      // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'heart',
      text: 'Heart',
      value: 'heart',
      // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
  ];

class RenderComp extends Component {

    constructor(props)
     {
        super(props);
        this.state = {
            myTopic:"",
            allInformation:[],
            card:false,
            insur:false,
            data: [],
            img:"",
            cloudData:[],
            phraseSelected:[],
            multiplePhraseSelected:[],
            getApiResultForMultiplePhrase:[],
            phraseString:"",
            loading:false,
         }
        //  this.changejsonData = this.changejsonData.bind(this);
         this.handleTopicSelect = this.handleTopicSelect.bind(this);
         this.getData = this.getData.bind(this);
         this.cardSelected = this.cardSelected.bind(this);
         this.insuranceSelected = this.insuranceSelected.bind(this);
         this.handlePhraseSelected = this.handlePhraseSelected.bind(this);
         this.sendPhrases = this.sendPhrases.bind(this);
    }
    componentDidUpdate(prevProps, prevState, snapshot){

      if(this.state.myTopic != '' && current != prev){
        prev = current;
        console.log("Selected Topic = " + this.state.myTopic);
        var url = "/topic?topic_name="+this.state.myTopic;
          fetch(url, {
            method: 'GET',
      			headers: {
      				'Accept': 'application/json',
      				'Content-Type': 'application/json',
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
          }).then((response) => {
            if(response.status == 200)
              {
                return response.json();
              }
      			else {
      				alert('Uh Oh! Something went wrong');
      				return -1;
      			}
          }).then((data) => {
      			if(data == -1)
              return;
              this.setState({data: data, loading:false});
              this.createWordCloudData();
              // console.log("data = ");
               console.log(data);
            //   console.log("data = " + JSON.stringify(this.state.data));
            //   console.log( );
              //gif = str(open(img_file, 'rb').write())
              // var base64Flag = 'data:image/jpeg;base64,';
              // var imageStr = this.arrayBufferToBase64(this.state.data.card_dict.gifs[0]);
              // // this.setState({img: imageStr});
              // this.setState({
              //     img: imageStr + base64Flag
              // });
      		}
      		)
      }
    }
    // componentDidMount(){
    //   if(this.state.myTopic != ''){
    //     console.log("Selected Topic = " + this.state.myTopic);
    //     var url = "/topic?topic_name="+this.state.myTopic;
    //       fetch(url, {
    //         method: 'GET',
    //   			headers: {
    //   				'Accept': 'application/json',
    //   				'Content-Type': 'application/json',
    //                 "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
    //         },
    //       }).then((response) => {
    //         if(response.status == 200)
    //           {
    //             console.log("hitApi");
    //             return response.json();
    //           }
    //   			else {
    //   				alert('Uh Oh! Something went wrong');
    //   				return -1;
    //   			}
    //       }).then((data) => {
    //   			if(data == -1)
    //           return;
    //           this.setState({data: data});
    //           this.createWordCloudData();
    //           console.log("data = ");
    //           console.log(data);
    //         //   console.log("data = " + JSON.stringify(this.state.data));
    //         //   console.log( );
    //           //gif = str(open(img_file, 'rb').write())
    //           var base64Flag = 'data:image/jpeg;base64,';
    //           var imageStr = this.arrayBufferToBase64(this.state.data.card_dict.gifs[0]);
    //           // this.setState({img: imageStr});
    //           this.setState({
    //               img: imageStr + base64Flag
    //           });
    //   		}
    //   		)
    //   }
    // }
    handleTopicSelect(event, {value})
    {
      this.setState({myTopic: value, loading:true});
      current = value;
      // alert("inside hadnleTopicSelect");
      // alert(value);
      // this.getData(value);


      // if(this.state.myTopic != ''){
      //   console.log("Selected Topic = " + this.state.myTopic);
      //   var url = "/topic?topic_name="+this.state.myTopic;
      //     fetch(url, {
      //       method: 'GET',
      // 			headers: {
      // 				'Accept': 'application/json',
      // 				'Content-Type': 'application/json',
      //               "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      //       },
      //     }).then((response) => {
      //       if(response.status == 200)
      //         {
      //           console.log("hitApi");
      //           return response.json();
      //         }
      // 			else {
      // 				alert('Uh Oh! Something went wrong');
      // 				return -1;
      // 			}
      //     }).then((data) => {
      // 			if(data == -1)
      //         return;
      //         this.setState({data: data});
      //         this.createWordCloudData();
      //       //   console.log("data = ");
      //       //   console.log(data);
      //       // //   console.log("data = " + JSON.stringify(this.state.data));
      //       // //   console.log( );
      //       //   //gif = str(open(img_file, 'rb').write())
      //       //   var base64Flag = 'data:image/jpeg;base64,';
      //       //   var imageStr = this.arrayBufferToBase64(this.state.data.card_dict.gifs[0]);
      //       //   // this.setState({img: imageStr});
      //       //   this.setState({
      //       //       img: imageStr + base64Flag
      //       //   });
      // 		}
      // 		)
      // }
    }
    // getSnapshotBeforeUpdate(prevProps, prevState){
    //   if(prevState !== this.state.topic)
    //   return true;
    //   return false;
    // }
    cardSelected(event)
    {
    var temp = !(this.state.card);
    this.setState({card: temp});
    console.log(" card checked = " + this.state.card);
}
    insuranceSelected(event)
    {
        var temp = !(this.state.insur);
        this.setState({insur: temp});
        console.log("Insurance checked =" + this.state.insur);
    }
    handlePhraseSelected(event, {value}){
      // this.setState({})
      // let mytemp = this.state.multiplePhraseSelected;
      // mytemp = mytemp +  value + ",";
      // mytemp.push(event.value + ",");
      this.setState({multiplePhraseSelected: value});
      // console.log("myTemp = ");
      // console.log(this.state.multiplePhraseSelected);
    }
    sendPhrases(){
      // console.log("in sendPhrase myTemp = ");
      // console.log(this.state.multiplePhraseSelected);
      var temp = "";
      this.setState({loading: true});
      for(let i = 0 ; i<this.state.multiplePhraseSelected; i++)
      {
        temp += this.state.multiplePhraseSelected[i] + ',';
      }
      this.setState({phraseString: temp});
      console.log("phraseString = ");
      console.log(this.state.phraseString);
      var url ="/topic?topic_name="+this.state.phraseString;
      fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
        },
      }).then((response) => {
        if(response.status == 200)
          {
            console.log("hitApi");
            return response.json();
          }
        else {
          alert('Uh Oh! Something went wrong');
          return -1;
        }
      }).then((data) => {
        if(data == -1)
          return;
          // this.setState({data: data});
          this.setState({getApiResultForMultiplePhrase: data, loading:false});
          this.createWordCloudData();
          // console.log("API result = ");
          // console.log(this.state.getApiResultForMultiplePhrase);
          // console.log("data = ");
          // console.log(data);
        //   console.log("data = " + JSON.stringify(this.state.data));
        //   console.log( );
          //gif = str(open(img_file, 'rb').write())
          // var base64Flag = 'data:image/jpeg;base64,';
          // var imageStr = this.arrayBufferToBase64(this.state.data.card_dict.gifs[0]);
          // // this.setState({img: imageStr});
          // this.setState({
          //     img: imageStr + base64Flag
          // });
      }
      )
    }

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };
    createWordCloudData = () =>
    {
        var myData = [];
        let myoptions = [];
        for(let i = 0 ; i<phrase.length ; i++)
        {
          var temp = [];
          // console.log(phrase[i].Topic);
          if(phrase[i].Topic === this.state.myTopic)
          {
            // console.log("Here =  " + phrase[i].Phrase);

            temp.push(phrase[i].Phrase);
            temp.push(phrase[i].Frequency);
            myData.push(temp);
            myoptions.push({key: phrase[i].Phrase, text: phrase[i].Phrase, value: phrase[i].Phrase});
          }
        }
        this.setState({cloudData: myData});
        this.setState({phraseSelected: myoptions})
    }

    getData = (value) =>
    {
      console.log("inside getData ");
      this.setState({loading: true});
      console.log("myTopic =");
      console.log(this.state.myTopic);
      if(this.state.myTopic != ''){
        console.log("Selected Topic = " + this.state.myTopic);
        var url = "/topic?topic_name="+value;
          fetch(url, {
            method: 'GET',
      			headers: {
      				'Accept': 'application/json',
      				'Content-Type': 'application/json',
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
            },
          }).then((response) => {
            if(response.status == 200)
              {
                console.log("hitApi");
                return response.json();
              }
      			else {
      				alert('Uh Oh! Something went wrong');
      				return -1;
      			}
          }).then((data) => {
      			if(data == -1)
              return;
              this.setState({data: data, loading:false});
              this.createWordCloudData();
              console.log("data = ");
              console.log(data);
            //   console.log("data = " + JSON.stringify(this.state.data));
            //   console.log( );
              //gif = str(open(img_file, 'rb').write())
              var base64Flag = 'data:image/jpeg;base64,';
              var imageStr = this.arrayBufferToBase64(this.state.data.card_dict.gifs[0]);
              // this.setState({img: imageStr});
              this.setState({
                  img: imageStr + base64Flag
              });
      		}
      		)
      }
}
    render() {
        const checkBoxStyle = {
            fontSize: '30px', paddingBottom:'18px'
        }
        // const { myTopic } = this.state
        const {img} = this.state
        console.log("Img", img)
        return (
            <div>
                <div>
                <HeaderBar></HeaderBar>
                </div>
                <Grid textAlign='center' style={{padding:'20px'}} columns={2}>
                    <Grid.Row >
                        <Grid.Column width={8}>
                            <Segment>

                             <Dropdown  placeholder='Select Topic' fluid selection options={topicOptions} onChange={this.handleTopicSelect}/>
                            </Segment>
                            <Segment>
                            <SortedTable data = {this.state.cloudData}/>
                            </Segment>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Segment>
                              <FacebookAndTwitter data = {this.state.data}/>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{backgroundColor:"rgb(125, 171, 238)"}}>


                      { this.state.loading == true ? (
                        <div style={{ textAlign: 'center',width:'200px', height:'200px', zIndex:'10', position:'absolute' }}>
                          { loadingIcon }
                        </div>
                      ) : (<div/>)
                      }

                      <Grid.Column>
                      <Checkbox label="Card/Customer" style = {checkBoxStyle} onChange={this.cardSelected}></Checkbox>
                      </Grid.Column>
                      <Grid.Column>
                      <Checkbox label="Insurance/Patient" style = {checkBoxStyle} onChange={this.insuranceSelected}></Checkbox>
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{backgroundColor:"rgb(125, 171, 238)"}}>
                    <Grid.Column style={{maxHeight:'1200px', overflowY:'auto'}}>
                       <Segment>
                       <div style={{position:'absolute', zIndex:'10', fontSize:'22px'}}>Card</div>
                      {
                        this.state.data.length == 0 ? (
                             <div style={{'width':'5px'}}></div>
                           ) : (
                             <div ><MyCloud data={this.state.data.card_dict.card_list}/></div>
                          )
                        }
                      </Segment>
                        <Segment>
                       <div style={{position:'absolute', zIndex:'10', fontSize:'22px'}}>Disease</div>
                      {
                        this.state.data.length == 0 ? (
                             <div></div>
                           ) : (
                             <div ><MyCloud data={this.state.data.card_dict.disease_list}/></div>
                          )
                        }
                      </Segment>
                       <Segment>
                      <div style={{position:'absolute', zIndex:'10', fontSize:'22px'}}>Medication</div>
                      {
                        this.state.data.length == 0 ? (
                             <div></div>
                           ) : (
                            <div ><MyCloud data={this.state.data.card_dict.medication_list} /></div>
                          )
                        }
                      </Segment>
                       <Segment>
                      <div style={{position:'absolute', zIndex:'10', fontSize:'22px'}}>Health</div>
                      {
                        this.state.data.length == 0 ? (
                             <div></div>
                           ) : (
                             <div ><MyCloud data={this.state.data.card_dict.health_list}/></div>
                          )
                        }
                      </Segment>
                     <Segment>
                      <div style={{position:'absolute', zIndex:'10', fontSize:'22px'}}>Cost</div>
                      {
                        this.state.data.length == 0 ? (
                             <div></div>
                           ) : (
                             <div><MyCloud data={this.state.data.card_dict.cost_list}/></div>
                          )
                        }
                      </Segment>
                     <Segment>
                      <div style={{position:'absolute', zIndex:'10', fontSize:'22px'}}>Service</div>
                      {
                        this.state.data.length == 0 ? (
                             <div></div>
                           ) : (
                            <div><MyCloud data={this.state.data.card_dict.service_list}/></div>
                          )
                        }
                      </Segment>
                      </Grid.Column>
                      <Grid.Column style={{maxHeight:'1200px', overflowY:'auto'}}>
                     <Segment>
                       <div style={{position:'absolute', zIndex:'10', fontSize:'22px'}}>Cost</div>
                      {
                        this.state.data.length == 0 ? (
                             <div></div>
                           ) : (
                             <div><MyCloud data={this.state.data.insurance_dict.cost_list}/></div>
                          )
                        }
                      </Segment>
                       <Segment>
                       <div style={{position:'absolute', zIndex:'10', fontSize:'22px'}}>Disease</div>
                      {
                        this.state.data.length == 0 ? (
                             <div></div>
                           ) : (
                             <div ><MyCloud data={this.state.data.insurance_dict.disease_list}/></div>
                          )
                        }
                      </Segment>
                       <Segment>
                      <div style={{position:'absolute', zIndex:'10', fontSize:'22px'}}>Medication</div>
                      {
                        this.state.data.length == 0 ? (
                             <div></div>
                           ) : (
                            <div><MyCloud data={this.state.data.insurance_dict.medication_list}/></div>
                          )
                        }
                      </Segment>
                       <Segment>
                      <div style={{position:'absolute', zIndex:'10', fontSize:'22px'}}>Health</div>
                      {
                        this.state.data.card_dict == null ? (
                             <div></div>
                           ) : (
                             <div><MyCloud data={this.state.data.insurance_dict.patients_list}/></div>
                          )
                        }
                      </Segment>
                     <Segment>
                      <div style={{position:'absolute', zIndex:'10', fontSize:'22px'}}>Segment</div>
                      {
                        this.state.data.card_dict == null ? (
                             <div></div>
                           ) : (
                             <div><MyCloud data={this.state.data.insurance_dict.segment_list}/></div>
                          )
                        }
                      </Segment>
                       <Segment>
                      <div style={{position:'absolute', zIndex:'10', fontSize:'22px'}}>Service</div>
                      {
                        this.state.data.length == 0 ? (
                             <div></div>
                           ) : (
                            <div><h3>Service</h3><MyCloud data={this.state.data.insurance_dict.service_list}/></div>
                          )
                        }
                      </Segment>
                      </Grid.Column>
                    </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment>
                            <h3>Tweets</h3>
                            {/* <DisplayMessage title='Tweets'/> */}
                            <MyTweets data = {this.state.data} insurance={this.state.insur} card={this.state.card}/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment>
                        <h3>Links</h3>
                        {/* <DisplayMessage title='Memes'/> */}
                        <Mylinks data = {this.state.data} insurance={this.state.insur} card={this.state.card}/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                      {/*  <Segment>
                            <h3>Gifs</h3>
                            <img
                            src={img}
                            alt='Helpful alt text'/>
                             <DisplayMessage title='Gifs'/>

                             </Segment>
                        */}
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </div>
         );
    }
}

export default RenderComp;
