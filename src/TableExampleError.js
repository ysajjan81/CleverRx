import React from "react";
import { Icon, Table, Checkbox } from "semantic-ui-react";
// import React from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
const mystyle = {
fontSize: '2',
color: 'red',
cellPadding: '1',
};
const colors = [
 
]
const TableExampleError = () => (
  <div style={{mystyle}}>
  <Table celled >
    <Table.Header>
      <Table.Row >
        <Table.HeaderCell textAlign='center'  style={{padding: "1px 1px 1px 1px !important"}}>Disease</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Medication</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Insurance</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Pets</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Insurance</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body >
      <Table.Row >
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
      </Table.Row>
    </Table.Body>
  </Table>

  </div>
)

export default TableExampleError;

