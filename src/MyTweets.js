import React from 'react';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import Table.Cell from '@material-ui/core/Table.Cell';
// import Table.Head from '@material-ui/core/Table.Head';
// import Table.Row from '@material-ui/core/Table.Row';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import {Table} from 'semantic-ui-react'

function MyTweets(props) {
  var l = [];
  var data = [];
  data = props.data;
  var loc = props.col;
  if(data.length != 0)
  {
  if( data.insurance_dict.tweets && loc == "right")
      {
  for(let i = 0 ; i<data.insurance_dict.tweets.length; i++)
  {
    if(data.insurance_dict.tweets[i][2] == '+' && props.insurancePositiveSentiment == true)
    {
      l.push(<Table.Row>

          <Table.Cell style={{backgroundColor:'lightgreen'}}>
              {data.insurance_dict.tweets[i][0]}
          </Table.Cell>
          <Table.Cell >
          <div>
              <input
                type="checkbox"
                style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
              />
              <label style={{fontSize:'13px'}}>{data.insurance_dict.tweets[i][1]}</label>
            </div>
          </Table.Cell>
      </Table.Row>)
    }
    else if(data.insurance_dict.tweets[i][2] == '-' && props.insuranceNegativeSentiment == true) {
      l.push(<Table.Row>

        <Table.Cell style={{backgroundColor:'#E34234', color:'white'}}>
            {data.insurance_dict.tweets[i][0]}
        </Table.Cell>
        <Table.Cell >
        <div>
            <input
              type="checkbox"
              style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
            />
            <label style={{fontSize:'13px'}}>{data.insurance_dict.tweets[i][1]}</label>
          </div>
        </Table.Cell>
    </Table.Row>)
    }
  }
}
if(props.card == true && data.card_dict.tweets && loc == "left")
{
  for(let i = 0 ; i<data.card_dict.tweets.length ; i++)
  {
    if(data.card_dict.tweets[i][2] == '+' && props.cardSentimentPositive == true){
    l.push(<Table.Row>

        <Table.Cell style={{backgroundColor:'lightgreen'}}>
            {data.card_dict.tweets[i][0]}
        </Table.Cell>
        <Table.Cell >
        <div>
            <input
              type="checkbox"
              style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
            />
            <label style={{fontSize:'13px'}}>{data.card_dict.tweets[i][1]}</label>
          </div>
        </Table.Cell>
    </Table.Row>)
    }
    else if (data.card_dict.tweets[i][2] == '-' && props.cardSentimentNegative == true)
    {
      l.push(<Table.Row>

        <Table.Cell style={{backgroundColor:'#E34234', color:'white'}}>
            {data.card_dict.tweets[i][0]}
        </Table.Cell>
        <Table.Cell >
        <div>
            <input
              type="checkbox"
              style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
            />
            <label style={{fontSize:'13px'}}>{data.card_dict.tweets[i][1]}</label>
          </div>
        </Table.Cell>
    </Table.Row>)
    }
  }
}
else if(props.card == false && data.without_insurance_dict && loc == "left")
{
  for(let i = 0 ; i<data.without_insurance_dict.tweets.length ; i++)
  {
    if(data.without_insurance_dict.tweets[i][2] == '+' && props.cardSentimentPositive == true){
    l.push(<Table.Row>

        <Table.Cell style={{backgroundColor:'lightgreen'}}>
            {data.without_insurance_dict.tweets[i][0]}
        </Table.Cell>
        <Table.Cell >
        <div>
            <input
              type="checkbox"
              style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
            />
            <label style={{fontSize:'13px'}}>{data.without_insurance_dict.tweets[i][1]}</label>
          </div>
        </Table.Cell>
    </Table.Row>)
    }
    else if(data.without_insurance_dict.tweets[i][2] == '-' && props.cardSentimentNegative == true)
    {
      l.push(<Table.Row>

        <Table.Cell style={{backgroundColor:'#E34234' , color:'white'}}>
            {data.without_insurance_dict.tweets[i][0]}
        </Table.Cell>
        <Table.Cell >
        <div>
            <input
              type="checkbox"
              style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
            />
            <label style={{fontSize:'13px'}}>{data.without_insurance_dict.tweets[i][1]}</label>
          </div>
        </Table.Cell>
    </Table.Row>)
    }
  }
}
  }
  return (
    <div className="center-col">

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <h4>Messages</h4>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <h4>Likes</h4>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{l}</Table.Body>
      </Table>
    </div>
    )
}
export default MyTweets;
