
import Paper from '@material-ui/core/Paper';
import React from 'react'

import { Tab, Form, Comment, Table, Checkbox} from 'semantic-ui-react'
// import Cards from './Card.js';
import TweetEmbed from 'react-tweet-embed'
import ReactPlayer from 'react-player'
import { FacebookProvider, EmbeddedPost, Page, Group, Comments} from 'react-facebook';
// import { Row, Layout, Col, Card,  Menu, Breadcrumb, Carousel } from 'antd';

export default class    Twitter extends React.Component {
  constructor(props) {
      super(props);
      this.state ={
        fbSum:0,
        twitterSum: 0,
        fbTotalSum:0,
        twitterTotalSum:0,
        fbData:[],
        twData:[],
        fbClicked:0,
        twClicked:0
      };

      this.fbSelected = this.fbSelected.bind(this);
      this.twitterSelected = this.twitterSelected.bind(this);
  }
  fbSelected = (event) =>{
    var val = event.target.value;
    if(event.target.checked == true){
      if(this.state.fbClicked > 0){
        var prevVal = this.state.fbSum; var preClick = this.state.fbClicked
        this.setState({fbSum: prevVal + parseInt(val), fbClicked: preClick+1})
      }
      else{
        this.setState({fbClicked:1, fbSum: parseInt(event.target.value)});
      }
    }
    else{
      if(this.state.fbClicked > 1){
        var prevVal = this.state.fbSum; var preClick = this.state.fbClicked
        this.setState({fbSum: prevVal - parseInt(val), fbClicked: preClick - 1})
      }
      else{
        this.setState({fbClicked:0, fbSum: parseInt(this.state.fbTotalSum)});
      }
    }
  }

  twitterSelected(event){
    var val = event.target.value;
    if(event.target.checked == true){
      if(this.state.twClicked > 0){
        var prevVal = this.state.twitterSum; var preClick = this.state.twClicked
        this.setState({twitterSum: prevVal + parseInt(val), twClicked: preClick+1})
      }
      else{
        this.setState({twClicked:1, twitterSum: parseInt(event.target.value)});
      }
    }
    else{
      if(this.state.twClicked > 1){
        var prevVal = this.state.twitterSum; var preClick = this.state.twClicked
        this.setState({twitterSum: prevVal - parseInt(val), twClicked: preClick - 1})
      }
      else{
        this.setState({twClicked:0, twitterSum: parseInt(this.state.twitterTotalSum)});
      }
    }
  }

  componentDidUpdate(prevProps){
    if(this.props != prevProps && this.props.data != null && this.props.data != prevProps.data){
          let facebookData = [];
          let twitterData = [];
          var fbSum, twSum;
          fbSum = twSum = 0;
          if(this.props.data != null && this.props.data.length !=0)
          {
            for(let i = 0 ; i<this.props.data.facebook.length ; i++)
            {
              var img = "/avatar_pages/" + this.props.data.facebook[i].id + ".png"
              // var img = "/Users/adityarohilla/Desktop/Documents/1_JMhUEV2L_SQrQ55lqtqIhw.png"
              // var img = "https://image.shutterstock.com/image-photo/hands-holding-credit-card-using-600w-289585190.jpg";
              // var img = "http://cips2.engineering.asu.edu:3000/hasancips/cleverRX/avatar_pages/"  + this.props.data.facebook[i].id + ".jpg";
              facebookData.push(<Table.Row>
                <Table.Cell style={{minWidth:'150px'}}>
                <div>
                  <input
                    type="checkbox"
                    name="FB"
                    value={this.props.data.facebook[i].count}
                    onChange={this.fbSelected} style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
                  />
                  <label style={{fontSize:'13px'}}>{this.props.data.facebook[i].phrase}</label>
                </div>
                </Table.Cell>
                <Table.Cell>
                  <a href={this.props.data.facebook[i].link} target="_blank">{this.props.data.facebook[i].pagename}</a>
                </Table.Cell>
                <Table.Cell>
                <img src={img} alt="logo" width="40" height="50" />
                </Table.Cell>
                <Table.Cell>
                  {this.props.data.facebook[i].page_category}
                </Table.Cell>
                <Table.Cell >
                  {this.props.data.facebook[i].count.toLocaleString()}
                  {/* {strWithCommas} */}
                </Table.Cell>
              </Table.Row>)
              fbSum+=this.props.data.facebook[i].count
            }
            for(let i = 0 ; i<this.props.data.twitter.length ; i++)
            {
              twitterData.push(
                <Table.Row>
                <Table.Cell>
                <div>
                  <input
                    type="checkbox"
                    name="Twitter"
                    value={this.props.data.twitter[i].count}
                    onChange={this.twitterSelected} style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
                  />
                  <label>{this.props.data.twitter[i].phrase}</label>
                </div>
                </Table.Cell>

                <Table.Cell>
                  {this.props.data.twitter[i].count.toLocaleString()}
                </Table.Cell>
                <Table.Cell>
                  <a href={"https://" + this.props.data.twitter[i].link} target="_blank">{"https://" + this.props.data.twitter[i].link}</a>
                </Table.Cell>
              </Table.Row>
              )
              twSum+=this.props.data.twitter[i].count
            }
            this.setState({fbTotalSum:fbSum, twitterTotalSum:twSum, fbData:facebookData, twData:twitterData, fbSum:fbSum, twitterSum:twSum});
          }
      }
  }
  render(){
    const panes = [
      {
        menuItem: 'Facebook: ' + this.state.fbSum.toLocaleString(), render: () => <Tab.Pane>
        <div style={{  overflowY: 'scroll', height: '370px'}}>
        <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell >Phrase</Table.HeaderCell>
            <Table.HeaderCell >Page ID</Table.HeaderCell>
            <Table.HeaderCell>Logo</Table.HeaderCell>
            <Table.HeaderCell >Category</Table.HeaderCell>
            <Table.HeaderCell >Likes</Table.HeaderCell>
          </Table.Row>
          </Table.Header>
          <Table.Body>
          {this.state.fbData}
          </Table.Body>
        </Table>
        </div>
        </Tab.Pane>
        },
      {
      menuItem: 'Twitter: ' + this.state.twitterSum.toLocaleString(), render: () => <Tab.Pane>
      <div style={{  overflowY: 'scroll', height: '370px'}}>
      <Table celled>
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell >Phrase</Table.HeaderCell>
        <Table.HeaderCell >Followers</Table.HeaderCell>
        <Table.HeaderCell >Page ID</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {this.state.twData}
      </Table.Body>
      </Table>
      </div>
      </Tab.Pane>
    },
    ]
        return (
        <div className = "facebook-Twitter">
        <Tab panes={panes} />
        </div>
        );
  }
}
