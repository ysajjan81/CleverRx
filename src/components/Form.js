import React from 'react'
import { Button, Checkbox, Form, Header } from 'semantic-ui-react'
import Tabs from '../components/Tabs.js';
import s1 from "../assets/img/s1.png"
import s2 from "../assets/img/s2.png"
import s3 from "../assets/img/s3.png"
import { Row, Layout, Col, Card,  Menu, Breadcrumb, Carousel, Icon } from 'antd';
import { Left } from 'react-bootstrap/lib/Media';
import axios from 'axios';

var mediaOptions = [
  { key: '1', text: 'CATEGORY1', value: 'CATEGORY1' },
  { key: '2', text: 'CATEGORY2', value: 'CATEGORY2' },
  { key: '3', text: 'Other', value: 'other' },
]

var societyOptions = [
  { key: '1', text: 'CATEGORY1', value: 'CATEGORY1' },
  { key: '2', text: 'CATEGORY2', value: 'CATEGORY2' },
  { key: '3', text: 'Other', value: 'other' },
]


const url_final = "http://18.224.61.159:8100/api/v1/get_user_categories/?category=";
const loadingIcon = <Icon type="loading" style={{ fontSize: 34 }} spin />;
class DetailsForm extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        media: "",
        society: "",
        searchQuery:"",
        allData: [],
        loading:false,
        category: "",
        mytarget: "",
        JWTToken: "",
        allCategories: [],
        allTargets: []
      };

      this.handleSearchChange = this.handleSearchChange.bind(this);
      this.handleMediaInputChange = this.handleMediaInputChange.bind(this);
      this.handleSocietyInputChange = this.handleSocietyInputChange.bind(this);

      this.sendData = this.sendData.bind(this);
      this.fetchData = this.fetchData.bind(this);
      this.addCategory = this.addCategory.bind(this);
      //this.addTaregt = this.addTarget.bind(this);
  }

  handleMediaInputChange(event, {value}){
    this.setState({media: value});
  }
  handleSocietyInputChange(event, {value}){
    this.setState({society: value});
  }

  handleSearchChange(event){
    this.setState({searchQuery: event.target.value});
  }

  handleCategoryChange = (event) => {
    this.setState({category: event.target.value});
  }

  handleTargetChange = (event) => {
    this.setState({mytarget: event.target.value});
  }

  componentDidMount(){

      var categories = [];
      var targets = [];

      var category_url = "http://18.224.61.159:8100/api/v1/get_all_categories/";
      var target_url = "http://18.224.61.159:8100/api/v1/get_all_targets/";

      fetch(category_url,{
  			headers: {
  				'Accept': 'application/json',
  				'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  			},
  		}).then((response) => {
  			if(response.status == 200)
  				return response.json()
  			else {
  				alert('Uh Oh! Something went wrong');
  				return -1;
  			}
      }).then((data) => {
  			if(data == -1)
  				return;


          if(data != []){
            var cat = [];
            var obj = {};
            for(var i = 0; i<data.length; i++){
              obj = {};
              obj.key = i; obj.text = data[i]; obj.value = data[i];
              cat.push(obj);
            }
          }
          //console.log("Incoming categories", cat);
    			this.setState({
    				allCategories: cat
    			});
  		});

      fetch(target_url,{
  			headers: {
  				'Accept': 'application/json',
  				'Content-Type': 'application/json',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  			},
  		}).then((response) => {
  			if(response.status == 200)
  				return response.json()
  			else {
  				alert('Uh Oh! Something went wrong');
  				return -1;
  			}
      }).then((data) => {
  			if(data == -1)
  				return;

          if(data != []){
            var cat = [];
            var obj = {};
            for(var i = 0; i<data.length; i++){
              obj = {};
              obj.key = i; obj.text = data[i]; obj.value = data[i]; 
              cat.push(obj);
            }
          }
          //console.log("Incoming targets", cat);
          this.setState({
            allTargets: cat
          });
  		});
  }
  fetchData(){
    this.setState({loading:true});
    var url = url_final + this.state.media;
    fetch(url,{
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
			},
		}).then((response) => {
			if(response.status == 200)
				return response.json()
			else {
				alert('Uh Oh! Something went wrong');
				return -1;
			}
    }).then((data) => {
			if(data == -1)
				return;
        console.log("Incoming data", data);
			this.setState({
				allData:data,
        loading: false
			});
		}
		)
  }
  addCategory(){
    var url = "http://18.224.61.159:8100/api/v1/add_category/";
    if(this.state.JWTToken != ""){
      let category  = {
        category: this.state.category
      }
      fetch(url,{
        method: 'POST',
  			headers: {
  				'Accept': 'application/json',
  				'Content-Type': 'application/json',
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          "api-token":this.state.JWTToken
        },
        body:JSON.stringify(category)
      }).then((response) => {
  			if(response.status == 201){
          //console.log("addCategory done");
          this.componentDidMount();
          return response.json()
        }
  			else {
  				alert('Uh Oh! Something went wrong');
  				return -1;
  			}
      }).then((data) => {

  			if(data == -1)
  				return;
  		}
  		)
    }
  }

  addTaregt(){
    var url = "http://18.224.61.159:8100/api/v1/add_target_group/";
    if(this.state.JWTToken != ""){
      let target  = {
        target: this.state.mytarget
      }
      fetch(url, {
        method: 'POST',
  			headers: {
  				'Accept': 'application/json',
  				'Content-Type': 'application/json',
          "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
          "api-token":this.state.JWTToken
        },
        body:JSON.stringify(target)
      }).then((response) => {
        if(response.status == 201)
          {
            //console.log("addTaget done");
            this.componentDidMount();
            return response.json();
          }
  			else {
  				alert('Uh Oh! Something went wrong');
  				return -1;
  			}
      }).then((data) => {
  			if(data == -1)
  				return;
  		}
  		)
    }
  }
  sendData(){
    var url = "http://18.224.61.159:8100/api/v1/users/";
    let details = {
      account_id: "110555227442303573944",
      email: "vr76841@gmail.com",
      name: "Vamsi Reddy"
    }
    fetch(url, {
      method: 'POST',
      headers:
      {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
         "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      },
      body:JSON.stringify(details),
		}).then((response) => {
      //console.log(response)
			if(response.status == 201)
				return response.json()
			else {
				alert('Uh Oh! Something went wrong');
				return -1;
			}
    }).then((data) => {
			if(data == -1)
				return;
        //console.log("sendData", data);
       this.setState({JWTToken:data.jwt_token});
        if(this.state.category != "")
          this.addCategory();
        if(this.state.mytarget != "")
          this.addTaregt();
		 })
  }
  render(){
      const {category, target } = this.state
    return(
      <Row>
        <Form style={{'background':'#7DABEE', 'padding':'30px'}}>
        <Form.Group widths='equal'>
                <Form.Select fluid label='Hatespeech Category' options = {this.state.allCategories} onChange={this.handleMediaInputChange} />
                <Form.Select fluid label='Hatespeech Target' options = {this.state.allTargets} onChange={this.handleSocietyInputChange} />
          </Form.Group>
        <Form.Field style={{'width': '750px', 'textAlign':'center', 'margin': '0 auto'}} >
          <label>Search</label>
          <input />
        </Form.Field>
        <Form.Field />
          <Form.Group widths='equal'>
            <Form.Input fluid label='Add Category' placeholder='Enter Category' value = {category} onChange={this.handleCategoryChange}/>
            <Form.Input fluid label='Add Target' placeholder='Enter Target' value = {target} onChange = {this.handleTargetChange}/>
          </Form.Group>
          <Button type='submit' onClick = {this.sendData}>ADD</Button>
        <Form.Field  />
          {/* <Form.Group widths='equal'>
                <Form.Select fluid label='Hatespeech Category' options = {this.state.allCategories} onChange={this.handleMediaInputChange} />
                <Form.Select fluid label='Hatespeech Target' options = {this.state.allTargets} onChange={this.handleSocietyInputChange} />
          </Form.Group> */}
          <Button type='submit' onClick = {this.fetchData}>Search</Button>

        </Form>
        <Row style={{'marginTop':'100px'}}>
          <Row><Header size='huge'>Results</Header></Row>
          { this.state.loading === true ? (
            <div style={{ textAlign: 'center', }}>
              { loadingIcon }
            </div>
          ) : (<div/>)
          }
          <Row><Tabs data={this.state.allData}/></Row>
          { this.state.allData.length == 0 ? (
            <div></div>
          ) : (
            <Row style ={{'width':'100%'}}>
              <img style={{'marginTop':'1vh'}} alt="Pie Chart" src={s1}  height="350px" ></img>
              <img style={{'marginTop':'1vh'}} alt="Pie Chart" src={s2}  height="350px"></img>
              <img style={{'marginTop':'1vh'}} alt="Pie Chart" src={s3}  height="350px"></img>
            </Row>
          )}
        </Row>
      </Row>
    )
  }
}
export default DetailsForm
