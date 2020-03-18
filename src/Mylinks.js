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
  var loc = props.col;
  data = props.data;
  if(data.length != 0 )
  {
    if(data.insurance_dict.links && loc == "right")
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
    if(props.card == true && data.card_dict.links && loc == "left")
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
else if(props.card == false && data.without_insurance_dict.links && loc == "left")
{
  for(let i = 0 ; i<data.without_insurance_dict.links.length; i++)
  {
      l.push(
          <TableRow>
          <TableCell>{i+1}</TableCell>
          <TableCell><a href={data.without_insurance_dict.links[i]} target="_blank">
              {data.without_insurance_dict.links[i]}</a>
          </TableCell>
      </TableRow>
      )
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
