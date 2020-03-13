import React, { Component } from 'react';
import DisplayMessage from './DisplayMessage';
import TextContent from './TextContent';
// // import Mytable from './MyTable';
import TableExampleError from './TableExampleError';
import {Grid, Divider, Segment, GridColumn, Dropdown, Form , Button } from 'semantic-ui-react';
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
// import tableJson from './topicData.json';
// const { Header, Footer, Content } = Layout;

const topicOptions = [
    {
      key: 'Heart Hypertension',
      text: 'Heart Hypertension',
      value: 'Heart Hypertension',
      // image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
      key: 'Diabetes',
      text: 'Diabetes',
      value: 'Diabetes',
      // image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
      key: 'Cancer',
      text: 'Cancer',
      value: 'Cancer',
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
      value: 'Allergy',
      // image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
      key: 'Liver',
      text: 'Liver',
      value: 'Liver',
      // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'Adiction',
      text: 'Adiction',
      value: 'Adiction',
      // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'Alzheimer',
      text: 'Alzheimer',
      value: 'Alzheimer',
      // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'Pain',
      text: 'Pain',
      value: 'Pain',
      // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'Asthma',
      text: 'Asthma',
      value: 'Asthma',
      // image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
    {
      key: 'Pregnancy',
      text: 'Pregnancy',
      value: 'Pregnancy',
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
            myTopic:'',
            allInformation:[],
            data: [],
         }
        //  this.changejsonData = this.changejsonData.bind(this);
         this.handleTopicSelect = this.handleTopicSelect.bind(this);
         this.getData = this.getData.bind(this);
    }

    handleTopicSelect(event, {value})
    {
      this.setState({myTopic: value});
    }

    getData = () =>
    {
    // alert("button clicked !! and topic selected is " + this.state.myTopic);
   console.log("insidegetData");
  if(this.state.myTopic != '')
  {
    //   alert("here");
    console.log("Selected Topic = " + this.state.myTopic);
    // var url = "/topic?context_phrase="+this.state.myTopic;
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
            console.log("hitApi");
            alert("hit api");
            // this.componentDidMount();
            return response.json();
          }
  			else {
  				alert('Uh Oh! Something went wrong');
  				return -1;
  			}
      }).then((data) => {
  			if(data == -1)
          return;
          this.setState({data: data})
          console.log("data = " + JSON.stringify(this.state.data));
        //   console.log( );
        // gif = str(open(img_file, 'rb').write())
  		}
  		)
    }
}
    render() {

        // const { myTopic } = this.state
        return (
            <div>
                <div>
                <HeaderBar></HeaderBar>
                </div>
                <Grid celled columns={2} divided>
                    <Grid.Row stretched>
                        <Grid.Column width={8}>
                            <Segment>
                            <Form>
                            <Form.Group>
                            <Form.Field width ={14}>
                             <Dropdown  placeholder='Select Topic' fluid selection options={topicOptions} onChange={this.handleTopicSelect}/>
                            </Form.Field>
                             <Form.Field>
                             <Button onClick={this.getData}>Submit</Button>
                            </Form.Field>
                            </Form.Group>
                             </Form>
                            </Segment>
                            {/* <Segment><MyCloud/></Segment> */}
                        </Grid.Column>
                        <Grid.Column width={8} >
                            <Segment><FacebookAndTwitter data = {this.state.data}/></Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>

                    <Grid.Column width={8}>
                    <h2>Card/Customer</h2>
                        <Segment>
                            <h3>Card</h3><Segment><MyCloud data={this.state.data.insurance_dict.health_list}/></Segment>
                            <h3>Disease</h3><Segment><MyCloud data={this.state.data.health_list}/></Segment>
                            <h3>Medication</h3><Segment><MyCloud data={this.state.data.medication_list}/></Segment>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Segment>
                        <h3>Customer</h3><Segment><MyCloud data={this.state.data.health_list}/></Segment>
                        <h3>Health</h3><Segment><MyCloud data={this.state.data.health_list}/></Segment>
                        <h3>Service</h3><Segment><MyCloud data={this.state.data.service_list}/></Segment>
                      </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                <Grid.Column width={8}>
                <h2>Insurance/Patient</h2>
                    <Segment>
                        <h3>Insurance</h3><Segment><MyCloud data={this.state.data.health_list}/></Segment>
                        <h3>Patient</h3><Segment><MyCloud data={this.state.data.health_list}/></Segment>
                        <h3>Medication</h3><Segment><MyCloud data={this.state.data.medication_list}/></Segment>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Segment>
                    <h3>Customer</h3><Segment><MyCloud data={this.state.data.health_list}/></Segment>
                    <h3>Health</h3><Segment><MyCloud data={this.state.data.health_list}/></Segment>
                    <h3>Service</h3><Segment><MyCloud data={this.state.data.service_list}/></Segment>
                  </Segment>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment>
                            <h3>Tweets</h3>
                            {/* <DisplayMessage title='Tweets'/> */}
                            <MyTweets data = {this.state.data}/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment>
                        <h3>Links</h3>
                        <DisplayMessage title='Memes'/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment>
                            <h3>Gifs</h3>
                            <DisplayMessage title='Gifs'/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </div>
         );
    }
}

export default RenderComp;
