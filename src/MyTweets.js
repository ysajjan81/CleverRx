import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import data from'./tempData.json';
import Checkbox from '@material-ui/core/Checkbox';

function MyTweets(props) {

  var l = [];
  var data = [];
  data = props.data;
  console.log(data);
//   console.log("Tweets", data.tweets);
  var clr = 'green';
  if(data.length != 0 )
  {
      if(props.insurance == true && data.insurance_dict.tweets)
      {
  for(let i = 0 ; i<data.insurance_dict.tweets.length; i++)
  {
      l.push(<TableRow>
          <TableCell>{i+1}</TableCell>
          <TableCell>
              {data.insurance_dict.tweets[i][0]}
              {}
          </TableCell>
      </TableRow>)
  }
}
if(props.card == true && data.card_dict.tweets){
  for(let i = 0 ; i<data.card_dict.tweets.length ; i++)
  {
    l.push(<TableRow>
        <TableCell>{i+1}</TableCell>
        <TableCell>
            {data.card_dict.tweets[i][0]}
            {}
        </TableCell>
    </TableRow>)
  }
}
  }
    return (
      <div>
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
