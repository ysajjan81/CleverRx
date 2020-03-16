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
    this.state = { 
        data: this.props.data,
     }
  }
  render() { 
    console.log("infacebookTwitter = ");

      let facebookData = [];
      let twitterData = [] ;
      if(this.state.data.length != 0 )
      {
        console.log("facebook =")
        console.log(this.state.data.facebook);
        console.log("twitter =");
        console.log(this.state.data.twitter);
        console.lgo()
        for(let i = 0 ; i<this.state.data.facebook.length ; i++)
        {
          console.log("insidefor loop count");
          console.log(this.state.data.facebook[i].count)
          facebookData.push(<TableRow>
            <TableCell>
              {this.state.data.facebook[i].count}
            </TableCell>
            <TableCell>
              {this.state.data.facebook[i].link}
            </TableCell>
            <TableCell>
              {this.state.data.facebook[i].phrase}
            </TableCell>
          </TableRow>)
        }
        for(let i = 0 ; i<this.state.data.twitter.length ; i++)
        {
          twitterData.push(
            <TableRow>
            <TableCell>
              {this.state.data.twitter[i].count}
            </TableCell>
            <TableCell>
              {this.state.data.twitter[i].link}
            </TableCell>
            <TableCell>
              {this.state.data.twitter[i].phrase}
            </TableCell>
          </TableRow>
          )
        }
    }
    // const displayPost = (
      // <Tabs>
      //   <TabList>
      //     <Tab>Facebook</Tab>
      //     <Tab>Twitter</Tab>
      //   </TabList>
      //   <TabPanel>
      //   <div >
      // <Paper>
      //   <Table>
      //     <TableHead>
      //       <TableRow >
      //       <TableCell className='headingTable'>Count</TableCell>  
      //       <TableCell className='headingTable'>Links</TableCell>
      //       <TableCell className='headingTable'>Phrase</TableCell>
      //       </TableRow>
      //     </TableHead>
      //     <TableBody>{facebookData}</TableBody>
      //   </Table>
      // </Paper>
      // </div>
      //   </TabPanel>
      //   <TabPanel>
      //   <div >
      // <Paper>
      //   <Table>
      //     <TableHead>
      //       <TableRow >
      //       <TableCell className='headingTable'>Count</TableCell>  
      //       <TableCell className='headingTable'>Links</TableCell>
      //       <TableCell className='headingTable'>Phrase</TableCell>
      //       </TableRow>
      //     </TableHead>
      //     <TableBody>{twitterData}</TableBody>
      //   </Table>
      // </Paper>
      // </div>
      //   </TabPanel>
      // </Tabs>
    // );
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
            <TableCell>Count</TableCell>  
            <TableCell >Links</TableCell>
            <TableCell >Phrase</TableCell>
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