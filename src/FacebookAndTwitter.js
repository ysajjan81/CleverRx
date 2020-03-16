
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
  render(){

      let facebookData = [];
      let twitterData = [] ;
      if(this.props.data != null && this.props.data.length !=0)
      {

        for(let i = 0 ; i<this.props.data.facebook.length ; i++)
        {

          facebookData.push(<TableRow>
            <TableCell>
              {this.props.data.facebook[i].count}
            </TableCell>
            <TableCell>
              <a href={this.props.data.facebook[i].link} target="_blank">{this.props.data.facebook[i].link}</a>
            </TableCell>
            <TableCell style={{minWidth:'150px'}}>
              {this.props.data.facebook[i].phrase}
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
              <a href={this.props.data.twitter[i].link} target="_blank">{this.props.data.twitter[i].link}</a>
            </TableCell>
            <TableCell style={{minWidth:'100px'}}>
              {this.props.data.twitter[i].phrase}
            </TableCell>
          </TableRow>
          )
        }
      }
      // else{
      //   facebookData.push(<div></div>);
      //   twitterData.push(<div></div>);
      // }

    const panes = [
      {
        menuItem: 'Facebook', render: () => <Tab.Pane>
        <Table sortable celled stickyHeader aria-label="sticky table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell >Count</Table.HeaderCell>
            <Table.HeaderCell >Link</Table.HeaderCell>
            <Table.HeaderCell >Phrase</Table.HeaderCell>
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
        <Table.HeaderCell >Count</Table.HeaderCell>
        <Table.HeaderCell >Link</Table.HeaderCell>
        <Table.HeaderCell >Phrase</Table.HeaderCell>
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
