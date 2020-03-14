// import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import React, { Component } from 'react';
// export default class Mylinks extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             insurance: this.props.insurane,
//             card: this.props.card,
//             data: this.props.data
//          }
//     }

//     render()
//      {
//          const {data, card, insurance} = this.state
//         var l = [];
//         // var data = [];
//         // data = props.data;
//         // console.log(data);
//       //   console.log("Tweets", data.tweets);
//         var clr = 'green';
//         if(data.length != 0 )
//         {
//           if(this.state.insurance == true)
//           {
//         for(let i = 0 ; i<data.insurance_dict.links.length; i++)
//         {
//             l.push(<TableRow>
//                 <TableCell>{i+1}</TableCell>
//                 <TableCell>
//                     {data.insurance_dict.links[i]}
//                 </TableCell>
//             </TableRow>)
//         }
//       }
//           if(card == true)
//           {
//         for(let i = 0 ; i<data.card_dict.links.length; i++)
//         {
//             l.push(<TableRow>
//                 <TableCell>{i+1}</TableCell>
//                 <TableCell>
//                     {data.card_dict.links[i]}
//                 </TableCell>
//             </TableRow>)
//         }
//       }
//         }

//         return ( <div className="center-col">
//         <Paper>
//           <Table>
//             <TableHead>
//               <TableRow >
//               <TableCell className='headingTable'>Links Count</TableCell >
//               <TableCell className='headingTable'>Links</TableCell >  
//               </TableRow>
//             </TableHead>
//             <TableBody>{l}</TableBody>
//           </Table>
//         </Paper>
//         </div> );
//     }
// }
 
function Mylinks(props) {

  var l = [];
  var data = [];
  data = props.data;
  console.log(data);
//   console.log("Tweets", data.tweets);
  var clr = 'green';
  if(data.length != 0 )
  {
    if(props.insurance == true)
    {
  for(let i = 0 ; i<data.insurance_dict.links.length; i++)
  {
      l.push(<TableRow>
          <TableCell>{i+1}</TableCell>
          <TableCell>
              {data.insurance_dict.links[i]}
          </TableCell>
      </TableRow>)
  }
}
    if(props.card == true)
    {
  for(let i = 0 ; i<data.card_dict.links.length; i++)
  {
      l.push(<TableRow>
          <TableCell>{i+1}</TableCell>
          <TableCell>
              {data.card_dict.links[i]}
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
            <TableCell className='headingTable'>Links Count</TableCell >
            <TableCell className='headingTable'>Links</TableCell >  
            </TableRow>
          </TableHead>
          <TableBody>{l}</TableBody>
        </Table>
      </Paper>
      </div>
      )
}

export default Mylinks;