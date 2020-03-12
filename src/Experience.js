import React from "react";
import { Icon, Table, Checkbox } from "semantic-ui-react";

const Experience = () => (
  <Table celled color='black'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign='center'>Positive</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Negative</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell height="50%"><Checkbox label='Cancer' /></Table.Cell>
        <Table.Cell><Checkbox label='took long time' />
        <br />
        <Checkbox label='Asthama' />
        </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell><Checkbox label='Diabetes' /></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell><Checkbox label='Allergy' /></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
            <div>
            <Checkbox label='TB' />
            <br />
            <Checkbox label='HapetitisB' />
            <br/>
            <Checkbox label='Diabetes' />
            <br/>
            <Checkbox label='lupus' />
            </div>
            </Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);

export default Experience;
