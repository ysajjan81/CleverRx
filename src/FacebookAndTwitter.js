import React from "react";
import { Icon, Table, Checkbox, Tab } from "semantic-ui-react";
import DisplayMessage from './DisplayMessage';

// const panes = [
//   { menuItem: 'Facebook', render: () => <Tab.Pane loading>Tab 1 Content</Tab.Pane> },
//   { menuItem: 'Twitter', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
// ]

// const FacebookAndTwitter = () => <Tab panes={panes} />

// export default FacebookAndTwitter;

// import React from 'react'
// import { Tab } from 'semantic-ui-react'



const panes = [
  {
    menuItem: 'Facebook',
    render: () => <Tab.Pane attached={false}>Facebook Content</Tab.Pane>,
  },
  {
    menuItem: 'Twitter',
    render: () => <Tab.Pane attached={false}>{<DisplayMessage title="Tweets"/>}</Tab.Pane>,
    // render: () => <Tab.Pane attached={false}>Twitter Content ... </Tab.Pane>,
  },
]

const FacebookAndTwitter = (props) => <Tab menu={{ pointing: true }} panes={panes} />

export default FacebookAndTwitter

// const FacebookAndTwitter = () => (
//     <div className="center-col">
//   <Table celled >
//     <Table.Header className="sticky">
//       <Table.Row >
//         <Table.HeaderCell textAlign='center'>Facebook</Table.HeaderCell>
//         <Table.HeaderCell textAlign='center'>Twitter</Table.HeaderCell>
//       </Table.Row>
//     </Table.Header>

//     <Table.Body >
//       <Table.Row >
//         <Table.Cell ><Checkbox label='Cancer' /></Table.Cell>
//         <Table.Cell ><Checkbox label='took long time' />
//         <br />
//         <Checkbox label='Asthama' />
//         </Table.Cell>
//       </Table.Row>
//       <Table.Row >
//         <Table.Cell><Checkbox label='Diabetes' /></Table.Cell>
//         <Table.Cell></Table.Cell>
//       </Table.Row>
//       <Table.Row >
//         <Table.Cell><Checkbox label='Diabetes' /></Table.Cell>
//         <Table.Cell></Table.Cell>
//       </Table.Row>
//       <Table.Row >
//         <Table.Cell><Checkbox label='Diabetes' /></Table.Cell>
//         <Table.Cell></Table.Cell>
//       </Table.Row>
//       <Table.Row >
//         <Table.Cell><Checkbox label='Diabetes' /></Table.Cell>
//         <Table.Cell></Table.Cell>
//       </Table.Row>
//       <Table.Row>
//         <Table.Cell><Checkbox label='Allergy' /></Table.Cell>
//         <Table.Cell></Table.Cell>
//       </Table.Row>
//       <Table.Row>
//         <Table.Cell>
//             <div>
//             <Checkbox label='TB' />
//             <br />
//             <Checkbox label='HapetitisB' />
//             <br/>
//             <Checkbox label='Diabetes' />
//             <br/>
//             <Checkbox label='lupus' />
//             </div>
//             </Table.Cell>
           
//         <Table.Cell></Table.Cell>

//       </Table.Row>
//     </Table.Body>
//   </Table>
//   </div>
// );

// export default FacebookAndTwitter;
