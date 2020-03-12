import React, { Component } from 'react';
import { Icon, Table, Checkbox } from "semantic-ui-react";
import data from './tempData.json';

export default class TableExampleError extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      card_list: [],
      cost_list:[],
     }
     this.renderMyRow = this.renderMyRow.bind(this);
  }
 renderMyRow = (_row, rowIndex) => {
   console.log("value = "+ _row);
   return (
  <Table.Row>
    <Table.cell>0</Table.cell>
    <Table.cell></Table.cell>
    {/* <Table.cell key = {`cel-${rowIndex}-0`} content={data.card_list[rowIndex]}></Table.cell>
    <Table.cell key = {`cel-${rowIndex}-0`} content={data.card_list[rowIndex]}></Table.cell> */}
  </Table.Row>
   )
 }


  render() {
    
    console.log("data = " + data.card_list[0]);
    var l = []
    console.log(data);
    console.log("length" + data.card_list.length);
    var myList = []
    for(let i = 0 ; i<data.card_list.length ; i++)
    {
      l.push(
        <Table.Row>
          <Table.Cell>{data.cost_list[i]}</Table.Cell>
          <Table.cell>{data.card_list[i]}</Table.cell>
        </Table.Row>
      );
    }
  console.log("l =" + l);

    const tbodyMarkup = data.card_list.map(this.renderMyRow);
    // console.log(" tbody = " + tbodyMarkup);
    return ( 
      <div className="card-st">
      <Table celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center' >Cost List</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' >Card List</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' >Customer List</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' >Health List</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' >Inhaler List</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' >Insurance List</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' >Medication List</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' >Patient List</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' >Religion List</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' >Segment List</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' >Service List</Table.HeaderCell>
            <Table.HeaderCell textAlign='center' >Transparency</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
           {l}
           {/* {tbodyMarkup} */}
          {/* <Table.Row >
            <Table.Cell ><Checkbox label='Cancer' /></Table.Cell>
            <Table.Cell > Paracetamol</Table.Cell>
            <Table.Cell>Yes</Table.Cell>
            <Table.Cell>Dogs</Table.Cell>
            <Table.Cell>Family</Table.Cell>
          </Table.Row>
          <Table.Row >
            <Table.Cell><Checkbox label='Diabetes' /></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Checkbox label='Allergy' /></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell ></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell><Checkbox label='TB' /></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
            <Table.Cell></Table.Cell>
          </Table.Row> */}
        </Table.Body>
      </Table>
      </div>
    );
  }
}
 
// export default ;


// const TableExampleError = () => (

//   var cardList = [];
//   props.data.card_list.map(num => {
//     cardList.push(num);
//   });
//   return (
//   <div className="card-st">
//   <Table celled >
//     <Table.Header>
//       <Table.Row >
//         <Table.HeaderCell textAlign='center' >Cost List</Table.HeaderCell>
//         <Table.HeaderCell textAlign='center' >Card List</Table.HeaderCell>
//         <Table.HeaderCell textAlign='center' >Customer List</Table.HeaderCell>
//         <Table.HeaderCell textAlign='center' >Health List</Table.HeaderCell>
//         <Table.HeaderCell textAlign='center' >Inhaler List</Table.HeaderCell>
//         <Table.HeaderCell textAlign='center' >Insurance List</Table.HeaderCell>
//         <Table.HeaderCell textAlign='center' >Medication List</Table.HeaderCell>
//         <Table.HeaderCell textAlign='center' >Patient List</Table.HeaderCell>
//         <Table.HeaderCell textAlign='center' >Religion List</Table.HeaderCell>
//         <Table.HeaderCell textAlign='center' >Segment List</Table.HeaderCell>
//         <Table.HeaderCell textAlign='center' >Service List</Table.HeaderCell>
//         <Table.HeaderCell textAlign='center' >Transparency</Table.HeaderCell>
//       </Table.Row>
//     </Table.Header>
//     <Table.Body >

//       <Table.Row >
//         <Table.Cell ><Checkbox label='Cancer' /></Table.Cell>
//         <Table.Cell > Paracetamol</Table.Cell>
//         <Table.Cell>Yes</Table.Cell>
//         <Table.Cell>Dogs</Table.Cell>
//         <Table.Cell>Family</Table.Cell>
//       </Table.Row>
//       <Table.Row >
//         <Table.Cell><Checkbox label='Diabetes' /></Table.Cell>
//         <Table.Cell></Table.Cell>
//         <Table.Cell></Table.Cell>
//         <Table.Cell></Table.Cell>
//         <Table.Cell></Table.Cell>
//       </Table.Row>
//       <Table.Row>
//         <Table.Cell><Checkbox label='Allergy' /></Table.Cell>
//         <Table.Cell></Table.Cell>
//         <Table.Cell ></Table.Cell>
//         <Table.Cell></Table.Cell>
//         <Table.Cell></Table.Cell>
//       </Table.Row>
//       <Table.Row>
//         <Table.Cell><Checkbox label='TB' /></Table.Cell>
//         <Table.Cell></Table.Cell>
//         <Table.Cell></Table.Cell>
//         <Table.Cell></Table.Cell>
//         <Table.Cell></Table.Cell>
//       </Table.Row>
//     </Table.Body>
//   </Table>
//   </div>
// )
// )

// export default TableExampleError;

