import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from'../tempData.json';
import Checkbox from '@material-ui/core/Checkbox';


function SimpleTable(props) {

  var title = "";

  var l = []

  console.log(data);
  var mat = []
  mat.push(data.card_list);
  mat.push(data.cost_list);
  mat.push(data.health_list);
  mat.push(data.patients_list);

  var maxLength = 0;
  if(data.health_list.length > maxLength)
  maxLength = data.health_list.length;
  if(data.medication_list.length>maxLength)
  maxLength = data.medication_list.length;
  if(data.patients_list.length > maxLength)
  maxLength = data.patients_list.length;

  console.log("maxLength = ", maxLength);
  console.log(" value = " + data.health_list);

  for (let i = 0 ; i<maxLength ; i++)
  {
    l.push(<TableRow>
      <TableCell>
      {data.cost_list[i]}
      </TableCell>
      <TableCell>
      {data.card_list ? data.card_list[i] : '-'}
      </TableCell>
      <TableCell>
      </TableCell>
      <TableCell>
      {data.health_list[i]}
      </TableCell>
      <TableCell>
      </TableCell>
      <TableCell>
      </TableCell>
      <TableCell>
      {data.medication_list[i]}
      </TableCell>
      <TableCell>
      {data.patients_list[i]}
      </TableCell>
      <TableCell>
      </TableCell>
      <TableCell>
      </TableCell>
      <TableCell>
        {data.service_list[i]}
      </TableCell>

    </TableRow>)
  }
  // if(type=="domains") {
    return (
      <div className = {"center-col"} >
        <div>
        {/* <Checkbox><h3>
          Card/Customer
        </h3></Checkbox> */}
        <Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Checkbox A' }}
/>
        </div>
      <Paper >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow >
              <TableCell className='headingTable'>Cost List</TableCell >
              <TableCell className='headingTable'>Card List</TableCell>
              <TableCell className='headingTable'>Customer List</TableCell>
              <TableCell className='headingTable'>Health List</TableCell>
              <TableCell className='headingTable'>Inhaler List</TableCell>
              <TableCell className='headingTable'>Insurance List</TableCell>
              <TableCell className='headingTable'>Medication List</TableCell>
              <TableCell className='headingTable'>Patient List</TableCell>
              <TableCell className='headingTable'>Religion List</TableCell>
              <TableCell className='headingTable'>Segment List</TableCell>
              <TableCell className='headingTable'>Service List</TableCell>
              <TableCell className='headingTable'>Transparency</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{l}</TableBody>
        </Table>
      </Paper>
      </div>
      )

  // }
  // else {
    //  return (
      //  <Paper >
      //   <Table >
      //     <TableHead>
      //       <TableRow >
      //         <TableCell className='headingTable'>Top Links</TableCell>
      //         <TableCell className='headingTable' style={{padding: "4px 10px 4px 24px !important"}}>Count</TableCell>
      //      </TableRow>
      //     </TableHead>
      //     <TableBody>{l}</TableBody>
      //   </Table>
      // </Paper>)
  //     <Paper >
  //     <Table >
  //       <TableHead>
  //         <TableRow >
  //           <TableCell className='headingTable'>Top Links</TableCell>
  //           <TableCell className='headingTable' style={{padding: "4px 10px 4px 24px !important"}}>Count</TableCell>
  //        </TableRow>
  //       </TableHead>
  //       <TableBody>{l}</TableBody>
  //     </Table>
  //   </Paper>)
  // }  
  
}

export default SimpleTable;
