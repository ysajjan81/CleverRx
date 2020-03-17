import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

function MyTweets(props) {
  var l = [];
  var data = [];
  data = props.data;
  var loc = props.col;
  if(data.length != 0 )
  {
      if( data.insurance_dict.tweets && loc == "right")
      {
  for(let i = 0 ; i<data.insurance_dict.tweets.length; i++)
  {
    if(data.insurance_dict.tweets[i][1] == '+')
    {
      l.push(<TableRow>
          <TableCell>{i+1}</TableCell>
          <TableCell style={{backgroundColor:'lightgreen'}}>
              {data.insurance_dict.tweets[i][0]}
          </TableCell>
      </TableRow>)
    }
    else {
      l.push(<TableRow>
        <TableCell>{i+1}</TableCell>
        <TableCell style={{backgroundColor:'#E34234', color:'white'}}>
            {data.insurance_dict.tweets[i][0]}
        </TableCell>
    </TableRow>)
    }
  }
}
if(props.card == true && data.card_dict.tweets && loc == "left")
{
  for(let i = 0 ; i<data.card_dict.tweets.length ; i++)
  {
    if(data.card_dict.tweets[i][1] == '+'){
    l.push(<TableRow>
        <TableCell>{i+1}</TableCell>
        <TableCell style={{backgroundColor:'lightgreen'}}>
            {data.card_dict.tweets[i][0]}
        </TableCell>
    </TableRow>)
    }
    else
    {
      l.push(<TableRow>
        <TableCell>{i+1}</TableCell>
        <TableCell style={{backgroundColor:'E34234', color:'white'}}>
            {data.card_dict.tweets[i][0]}
        </TableCell>
    </TableRow>)
    }
  }
}
else if(props.card == false && data.without_insurance_dict && loc == "left")
{
  for(let i = 0 ; i<data.without_insurance_dict.tweets.length ; i++)
  {
    if(data.without_insurance_dict.tweets[i][1] == '+'){
    l.push(<TableRow>
        <TableCell>{i+1}</TableCell>
        <TableCell style={{backgroundColor:'lightgreen'}}>
            {data.without_insurance_dict.tweets[i][0]}
        </TableCell>
    </TableRow>)
    }
    else
    {
      l.push(<TableRow>
        <TableCell>{i+1}</TableCell>
        <TableCell style={{backgroundColor:'#E34234' , color:'white'}}>
            {data.without_insurance_dict.tweets[i][0]}
        </TableCell>
    </TableRow>)
    }
  }
}
  }
  return (
    <div className="center-col">
    <Paper>
      <Table>
        <TableBody>{l}</TableBody>
      </Table>
    </Paper>
    </div>
    )
}
export default MyTweets;
