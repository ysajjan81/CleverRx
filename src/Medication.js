// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import React, { Component } from 'react';
// import Table from '@material-ui/core/Table';


// // import { Tab, Form, Comment, Table, Checkbox} from 'semantic-ui-react'


// class Medication extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//           // data: this.props.data,
//          }
//     }
//     render() 
//     {
//       var medList = [];
//       var myTable = [];
//       if(this.props.data && this.props.data.length != 0)
//       {
//       // medList = Object.keys(this.state.data);
//       medList = Object.keys(this.props.data);
//       console.log("here = ")
//       console.log(medList);
//       let myTable = [];
//       for(var i in this.props.data)
//       {
//         var temp = medList[i];
//         console.log("medication = ")
//         // console.log(temp);
//         // console.log(this.state.data + "."+ {temp[0]});
//         // console.log("this.state.data." + temp);
//         // var string = "this.state.data." + temp; 
//         myTable.push(<div><TableRow>
//           <TableCell>
//           {i}
//           </TableCell>
//           this.props
//           <TableCell>
//             {this.props.data[i][0]}
//           </TableCell>
//           <TableCell>
//             {this.props.data[i][1]}
//         </TableCell>
//         </TableRow></div>);
//       }
//     }
//         return ( 
//           <div>
//               <Table>
//                 <TableHead>
//                   <TableRow>
//                   <TableCell>Medication</TableCell>
//                   <TableCell>Frequency</TableCell>
//                   <TableCell>Disease</TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {myTable}
//                 </TableBody>
//               </Table>
//           </div>
//          );
//     }
// }
 
// export default Medication;

import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

function Medication(props)
 {

  var l = [];
      if(props.data && props.data.length != 0)
      {
  for(var i in props.data)
  {
      l.push(<TableRow>
          <TableCell>{i}</TableCell>
          <TableCell >
              {props.data[i][0]}
          </TableCell>
          <TableCell >
              {props.data[i][2]}
          </TableCell>
      </TableRow>)
    }
  }
  return (
    <div className="center-col">
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Medication</TableCell>
            <TableCell>Frequency</TableCell>
            <TableCell>Disease</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{l}</TableBody>
      </Table>
    </Paper>
    </div>
    )
}
export default Medication;
