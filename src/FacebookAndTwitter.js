
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import React from 'react'
import { Tab, Form, Comment, Table} from 'semantic-ui-react'
// import Cards from './Card.js';
import TweetEmbed from 'react-tweet-embed'
import ReactPlayer from 'react-player'
import { FacebookProvider, EmbeddedPost, Page, Group, Comments} from 'react-facebook';
// import { Row, Layout, Col, Card,  Menu, Breadcrumb, Carousel } from 'antd';

export default class FacebookAndTwitter extends React.Component {
  constructor(props) {
      super(props);
      this.state ={
        data: this.props.data,
      };
  }

  // convertNumbertoCommaSeparatedString = (number) =>{
  //   var temp = "";
  //   var a = '';
  //   var cnt = 0 ; 
  //   while(number > 0)
  //   {
  //     cnt += 1; 
  //     a = number%10;
  //     number = number /10;
  //     temp = temp + a ;
  //     if(cnt == 3 && number > 0)
  //     {
  //     temp += ',';
  //     cnt = 0
  //     }
  
  //   }
  //   var ans = "";
  //   for(let i = temp.length-1 ; i>=0 ; i++)
  //   {
  //     ans += temp[i];
  //   }
  //   return ans;
  //   console.log(ans);
  // }

  render(){

      let facebookData = [];
      let twitterData = [] ;
      if(this.props.data != null && this.props.data.length !=0)
      {

        for(let i = 0 ; i<this.props.data.facebook.length ; i++)
        {
          // var strWithCommas = this.convertNumbertoCommaSeparatedString(this.props.data.facebook[i].count);
          
          facebookData.push(<TableRow>
            <TableCell style={{minWidth:'150px'}}>
              {this.props.data.facebook[i].phrase}
            </TableCell>
            <TableCell>
              {this.props.data.facebook[i].count}
              {/* {strWithCommas} */}
            </TableCell>
            <TableCell>
              <a href={this.props.data.facebook[i].link} target="_blank">{this.props.data.facebook[i].link}</a>
            </TableCell>
          </TableRow>)
        }
        for(let i = 0 ; i<this.props.data.twitter.length ; i++)
        {
          twitterData.push(
            <TableRow>
            <TableCell>
              {this.props.data.twitter[i].count}
            </TableCell>
            <TableCell>
              <a href={"https://" + this.props.data.twitter[i].link} target="_blank">{"https://" + this.props.data.twitter[i].link}</a>
            </TableCell>
            <TableCell style={{minWidth:'100px'}}>
              {this.props.data.twitter[i].phrase}
            </TableCell>
          </TableRow>
          )
        }
      }
    const panes = [
      {
        menuItem: 'Facebook', render: () => <Tab.Pane>
        <Table sortable celled stickyHeader aria-label="sticky table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell >Phrase</Table.HeaderCell>
            <Table.HeaderCell >Likes</Table.HeaderCell>
            <Table.HeaderCell >User ID</Table.HeaderCell>
          </Table.Row>
          </Table.Header>
          <Table.Body>
          {facebookData}
          </Table.Body>
        </Table>
        </Tab.Pane>
        },
      {
        menuItem: 'Twitter', render: () => <Tab.Pane>
      <Table sortable celled >
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell >Phrase</Table.HeaderCell>
        <Table.HeaderCell >Followers</Table.HeaderCell>
        <Table.HeaderCell >User ID</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
      {twitterData}
      </Table.Body>
      </Table>
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
