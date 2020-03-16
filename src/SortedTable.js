import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import data from'./tempData.json';
import Checkbox from '@material-ui/core/Checkbox';

const orderStyle ={
    size: 5,
}
function SortedTable(props) {
  var l = [];
  var data = [];
  data = props.data;
  console.log(data);
//   console.log("Tweets", data.tweets);
  var clr = 'green';
  if(data.length != 0 )
  {
      let i = 0 ; 
    while(i < data.length)
  {
      l.push(<TableRow>
          {/* <TableCell>{data[i][1]}</TableCell> */}
          <TableCell style={orderStyle}><Checkbox />{data[i++][0]}</TableCell>
          <TableCell style={orderStyle}><Checkbox />{data[i++][0]}</TableCell>
          <TableCell style={orderStyle}><Checkbox />{data[i++][0]}</TableCell>
      </TableRow>)
  }
  }
    return (
      <div >
      <Paper>
        <Table>
          <TableHead>
            <TableRow >
            {/* <TableCell className='headingTable'>Frequency</TableCell> */}
            <TableCell className='headingTable'>Phrase</TableCell>  
            <TableCell className='headingTable'></TableCell>
            <TableCell className='headingTable'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{l}</TableBody>
        </Table>
      </Paper>
      </div>
      )
}

export default SortedTable;
