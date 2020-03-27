import React from 'react';
import {Table, Image, Header, Icon} from 'semantic-ui-react'
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

function Medication(props)
 {

  var l = [];
      if(props.data && props.data.length != 0)
      {
        for(var i in props.data)
        {
          // var img = props.data[i][1][1];
          // var img = "/medication_avatar/5.png";
          // if(props.data[i][1][1] != "")
          var img = "/medication_avatar/" + i + ".png";
          // var img = "";
            l.push(<Table.Row>
                <Table.Cell>  
                  <div>
                    <input
                      type="checkbox"
                      name="Meds"
                      value={props.data[i][0]}
                      style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
                    />
                    <label style={{fontSize:'13px', display: 'inline'}}>{props.data[i][0]}</label>
                  </div>
                  </Table.Cell>
                  <Table.Cell width={2}>
                  {props.data[i][1][1].length == 0 ?<div></div>:
                    <img src = {props.data[i][1][1]} alt="logo" width="40" height="50"/>
                  }
                  </Table.Cell>
                <Table.Cell >
                    {props.data[i][1][2]}
                </Table.Cell>
                <Table.Cell >
                    {props.data[i][1][0]}
                </Table.Cell>
            </Table.Row>)
          }
        }
  return (
    <div className="center-col">
    <Paper>
      <Table celled >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell >Medication</Table.HeaderCell>
            <Table.HeaderCell>Logo</Table.HeaderCell>
            <Table.HeaderCell >Disease</Table.HeaderCell>
            <Table.HeaderCell >Frequency</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{l}</Table.Body>
      </Table>
    </Paper>
    </div>
    )
}
export default Medication;
