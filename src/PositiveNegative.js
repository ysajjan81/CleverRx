// import React, { Component } from 'react';
import React, { Component } from 'react';
import TextContent from './TextContent';
import {Grid, Divider, Segment, GridColumn, Dropdown, Form , Button, Checkbox, Icon } from 'semantic-ui-react';
import HeaderBar from './HeaderBar';
import App from './App';
import FacebookAndTwitter from './FacebookAndTwitter';
import './assets/css/App.css';
import MyCloud from './MyCloud';
import SimpleTable from './components/table';
import MyTweets from './MyTweets';
import Mylinks from './Mylinks';
import phrase from './phrase_frequency.json';
import MultipleSelect from './MultipleSelect';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class PositiveNegative extends Component {
    constructor(props) {
        super(props);
        this.state = {
            myTopic: this.props.topic,
         }
    }
    render() {
        return (
            <div >
            <Paper>
              <Table>
                <TableBody>
                <Checkbox key = {this.props.data.length} label="Neg" style={{marginRight:"10px"}} onChange={this.handleCardSentimentPositive}></Checkbox>
               <Checkbox key = {this.props.data.length} label="Pos"  onChange={this.handleCardSentimentNegative}></Checkbox>
                </TableBody>
              </Table>
            </Paper>
            </div>
         );
    }
}
export default PositiveNegative;
