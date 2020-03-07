import React from "react";
import { Icon, Table, Checkbox } from "semantic-ui-react";

const FacebookAndTwitter = () => (
    <div className="center-col">
  <Table celled color='black' className="cell-padding">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell textAlign='center'>Facebook</Table.HeaderCell>
        <Table.HeaderCell textAlign='center'>Twitter</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body >
      <Table.Row className="cell-padding">
        <Table.Cell className="cell-padding"><Checkbox label='Cancer' /></Table.Cell>
        <Table.Cell className="cell-padding"><Checkbox label='took long time' />
        <br />
        <Checkbox label='Asthama' />
        </Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell><Checkbox label='Diabetes' /></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell><Checkbox label='Diabetes' /></Table.Cell>
        <Table.Cell></Table.Cell>
      </Table.Row>
      <Table.Row >
        <Table.Cell><Checkbox label='Diabetes' /></Table.Cell>
        <Table.Cell></Table.Cell>
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
  </div>
);

export default FacebookAndTwitter;
