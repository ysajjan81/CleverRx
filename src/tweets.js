import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from'./tempData.json';
import Checkbox from '@material-ui/core/Checkbox';

function tweets(props) {
  var l = []

  for(let i = 0 ; i<data.tweets.length; i++)
  {
      l.push(<TableRow>
          <TableCell>
              {data.tweets[i]}
          </TableCell>
      </TableRow>)
  }
    return (
      <div className = {"center-col"} >
      <Paper>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              <TableCell className='headingTable'>Tweets</TableCell >
            </TableRow>
          </TableHead>
          <TableBody>{l}</TableBody>
        </Table>
      </Paper>
      </div>
      )
}

export default tweets;
