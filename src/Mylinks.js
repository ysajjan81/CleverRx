// import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import React, { Component } from 'react';


function Mylinks(props) {


  var l = [];
  var data = [];
  data = props.data;
  var clr = 'green';
  if(data.length != 0 )
  {
    if(props.insurance == true)
    {
  for(let i = 0 ; i<data.insurance_dict.links.length; i++)
  {
      l.push(<TableRow>

          <TableCell><a href={data.insurance_dict.links[i]} target="_blank">
              {data.insurance_dict.links[i]}</a>
          </TableCell>
      </TableRow>)
  }
}
    if(props.card == true)
    {
  for(let i = 0 ; i<data.card_dict.links.length; i++)
  {
      l.push(<TableRow>

          <TableCell>
              {data.card_dict.links[i]}
          </TableCell>
      </TableRow>)
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

export default Mylinks;
