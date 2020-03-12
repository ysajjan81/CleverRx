import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import data from'./tempData.json';
import Checkbox from '@material-ui/core/Checkbox';

// class MyTweets extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         return (  );
//     }
// }
 
// export default MyTweets;




function MyTweets(props) {

  var l = [];
  var data = [];
  data = props.data;
//   console.log(data);
  console.log("Tweets", data.tweets);
  var clr = 'green';
  if(data.length != 0)
  {
  for(let i = 0 ; i<data.tweets.length; i++)
  {
      l.push(<TableRow>
          <TableCell>{i+1}</TableCell>
          <TableCell>
              {data.tweets[i][0]}
          </TableCell>
      </TableRow>)
  }
  }
    return (
      <div className="center-col">
      <Paper>
        <Table>
          <TableHead>
            <TableRow >
            <TableCell className='headingTable'>Tweet Count</TableCell >
            <TableCell className='headingTable'>Tweets</TableCell >  
            </TableRow>
          </TableHead>
          <TableBody>{l}</TableBody>
        </Table>
      </Paper>
      </div>
      )
}

export default MyTweets;
