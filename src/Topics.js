// import React from 'react'
import { Dropdown, Form, Button } from 'semantic-ui-react'
import React, { Component } from 'react';
import axios from 'axios';

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
export default class Topics extends Component {
  constructor(props)
   {
    super(props);
    this.state = {  
        myTopic:'',
        data: [],
    }
    this.handleTopicSelect = this.handleTopicSelect.bind(this);
    // this.getTopicData = this.getTopicData.bind(this);
    this.getData = this.getData.bind(this);
  }

  // handleTopicSelect =() =>{
  //     this.setState({myTopic:{value}})
  //     console.log("Topic Selected ", this.state.myTopic);
  // }
  // handleChange = (e, { value }) =>
  // {
  //    this.setState({ myTopic: value });
  //    alert("selected color is ", this.state.myTopic);
  //     console.log("Topic Selected ", value);
  // }
  handleTopicSelect(event, {value})
  {
    this.setState({myTopic: value});
  }

// componentDidMount()
// {
//   console.log("inComponentDidMount");
//   if(this.state.myTopic != '')
//   {
//     alert("selected topic is " + this.state.myTopic);
//   var url = "http://www.cips2.engineering.asu.edu:2900/topic?context_phrase="+this.state.myTopic;
//   // var url = 'https://jsonplaceholder.typicode.com/posts';
//     fetch(url,{
//       method: 'GET',
// 			headers: {
// 				'Accept': 'application/json',
// 				'Content-Type': 'application/json',
//         'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
//         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
//         // "Access-Control-Allow-Origin": 'https://localhost3000'
//         // 'type':'cors'
// 			},
//     }).then(response => {
//       console.log(response);
//       console.log(response.data);
//       this.setState({data: response.data});
//     }).catch(error => {
//       console.log("error = " + error);
//     })
//   }
// }
getData = () =>
{

  console.log("insidegetData");
  if(this.state.myTopic != '')
  {
    console.log("Selected Topic = " + this.state.myTopic);
    var url = "/topic?context_phrase="+this.state.myTopic;
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
          // this.props.jsonData.changejsonData(this.state.data);
          console.log("data = ");
          // console.log(this.data.card_list);
          console.log(data);
  		}
  		)
    }
}
  render() { 
    const { myTopic } = this.state
    return ( 
    <div>
      <Form>
      <Form.Group>
      <Form.Field width ={14}>
    <Dropdown  placeholder='Select Topic' fluid selection options={topicOptions} onChange={this.handleTopicSelect}/>
    {/* {this.getTopicData()} */}
    </Form.Field>
    <Form.Field>
      <Button onClick={this.getData}>Submit</Button>
      </Form.Field>
    </Form.Group>
    </Form>
    </div>
    );
  }

}
