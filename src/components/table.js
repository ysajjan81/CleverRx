import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import data from'../tempData.json';
import Checkbox from '@material-ui/core/Checkbox';

// class SimpleTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {  }
//   }
//   render() { 
//     return ( 




//      );
//   }
// }
 
// export default SimpleTable;




// const styles = theme => ({

//   table: {
//     minWidth: 700,
//   },
// });
// String.prototype.trunc = String.prototype.trunc ||
//       function(n){
//           return (this.length > n) ? this.substr(0, n-1) + '...' : this;
//   };


function SimpleTable(props) {

  var title = "";

  // handleCardSelected = () => {
    
  // }
  // const { data, type } = props;
  // console.log(data, type);

  var l = []
  // if(type == 'links' && data != null){
  //   for(let i = 0; i<data.length; i++){
  //     var s = data[i][0];
     
  //     var title = s.split('/')
      
  //     s = 'https://'+ title[2]
  //     l.push(<TableRow><TableCell key={i + data[i][0]}><a href={data[i][0]} target='_blank'>{s.trunc(45)}</a></TableCell>
  //               <TableCell key={i+ data[i][1]}>{data[i][1]}</TableCell>
  //         </TableRow>); //
  //   }

  // }
  // for( let i = 0 ; i<data.card_list.length ; i++)
  // {
  // l.push(<TableRow>
  //         <TableCell><Checkbox />{data.card_list[i]}</TableCell>
  //         <TableCell >{data.cost_list[i]}</TableCell>
  //         </TableRow>); 
  // }
  // Object.keys(obj.shareInfo[0]).length
  console.log(data);
  var mat = []
  mat.push(data.card_list);
  mat.push(data.cost_list);
  mat.push(data.health_list);
  mat.push(data.patients_list);

  // // console.log(mat);
  // for(let i = 0 ; i<mat.length ; i++)
  // {
  //   // console.log(mat[i]);
  //   for(let j = 0 ; j <(mat[i]).length ; j++)
  //   {
  //     console.log(mat[i][j]);
  //   }
  // }

  var maxLength = 0;
  // if(Object.keys(data.card_list).length > maxLength)
  // maxLength = Object.keys(data.card_list).length;
  // if(Object.keys(data.cost_list).length > maxLength)
  // maxLength = Object.keys(data.cost_list).length;
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
