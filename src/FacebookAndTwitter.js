import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class FacebookAndTwitter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("infacebookTwitter = ");

      let facebookData = [];
      let twitterData = [] ;
      if(this.props.data.length != 0 )
      {

        for(let i = 0 ; i<this.props.data.facebook.length ; i++)
        {
          facebookData.push(<TableRow>
            <TableCell>
              {this.props.data.facebook[i].count}
            </TableCell>
            <TableCell>
              {this.props.data.facebook[i].link}
            </TableCell>
            <TableCell>
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
              {this.props.data.twitter[i].link}
            </TableCell>
            <TableCell>
              {this.props.data.twitter[i].phrase}
            </TableCell>
          </TableRow>
          )
        }
    }

    return (
      <div>
        {/* {displayPost} */}
        <Tabs>
        <TabList>
          <Tab>Facebook</Tab>
          <Tab>Twitter</Tab>
        </TabList>
        <TabPanel>
        <div >
      <Paper>
        <Table>
          <TableHead>
            <TableRow >
            <TableCell >FBCount</TableCell>
            <TableCell >FbLinks</TableCell>
            <TableCell >FbPhrase</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{facebookData}</TableBody>
        </Table>
      </Paper>
      </div>
        </TabPanel>
        <TabPanel>
        <div >
      <Paper>
        <Table>
          <TableHead>
            <TableRow >
            <TableCell className='headingTable'>Count</TableCell>
            <TableCell className='headingTable'>Links</TableCell>
            <TableCell className='headingTable'>Phrase</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{twitterData}</TableBody>
        </Table>
      </Paper>
      </div>
        </TabPanel>
      </Tabs>
      </div>
     );
  }
}
export default FacebookAndTwitter;
