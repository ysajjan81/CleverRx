// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import Table.Cell from '@material-ui/core/Table.Cell';
// import Table.Head from '@material-ui/core/Table.Head';
// import Table.Row from '@material-ui/core/Table.Row';
import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
import {Table, Checkbox} from 'semantic-ui-react'
import React, { Component, ReactPropTypes } from 'react';


class MyTweets extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
    this.sendDataToParent = this.sendDataToParent.bind(this);
    // this.callbackFromParent = this.props.callbackFromParent.bind(this);
  }
  sendDataToParent(event, value)
  {
  this.props.callbackFromParent(value);
  }
  
  render() 
  {
    var l = [];
    var data = [];
    data = this.props.data;
    var loc = this.props.col;
    if(data.length != 0)
    {
    if( data.insurance_dict.tweets && loc == "right")
    {
    for(let i = 0 ; i<data.insurance_dict.tweets.length; i++)
    {
      if(data.insurance_dict.tweets[i][2] == '+' && this.props.insurancePositiveSentiment == true)
      {
        l.push(<Table.Row>
            <Table.Cell style={{backgroundColor:'lightgreen'}}>
                {data.insurance_dict.tweets[i][0]}
            </Table.Cell>
            <Table.Cell >
            <div>
                {/* <input
                  type="checkbox"
                  style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
                /> */}
                <Checkbox Checkbox key={data.insurance_dict.tweets.length} style={{marginRight:'5px', display:'inline'}} onChange={(event)=>this.sendDataToParent(event, data.insurance_dict.tweets[i])} value={data.insurance_dict.tweets[i][0]}/>
                <label style={{fontSize:'13px'}}>{data.insurance_dict.tweets[i][1]}</label>
              </div>
            </Table.Cell>
        </Table.Row>)
      }
      else if(data.insurance_dict.tweets[i][2] == '-' && this.props.insuranceNegativeSentiment == true) {
        l.push(<Table.Row>
  
          <Table.Cell style={{backgroundColor:'#E34234', color:'white'}}>
              {data.insurance_dict.tweets[i][0]}
          </Table.Cell>
          <Table.Cell >
          <div>
              {/* <input
                type="checkbox"
                style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
              /> */}
              <Checkbox Checkbox key={data.insurance_dict.tweets.length} style={{marginRight:'5px', display:'inline'}} onChange={(event)=>this.sendDataToParent(event, data.insurance_dict.tweets[i])} value={data.insurance_dict.tweets[i][0]}/>
              <label style={{fontSize:'13px'}}>{data.insurance_dict.tweets[i][1]}</label>
            </div>
          </Table.Cell>
      </Table.Row>)
      }
    }
  }
  if(this.props.card == true && data.card_dict.tweets && loc == "left")
  {
    for(let i = 0 ; i<data.card_dict.tweets.length ; i++)
    {
      if(data.card_dict.tweets[i][2] == '+' && this.props.cardSentimentPositive == true){
      l.push(<Table.Row>
  
          <Table.Cell style={{backgroundColor:'lightgreen'}}>
              {data.card_dict.tweets[i][0]}
          </Table.Cell>
          <Table.Cell >
          <div>
              {/* <input
                type="checkbox"
                style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
              /> */}
              <Checkbox Checkbox key={data.card_dict.tweets.length} style={{marginRight:'5px', display:'inline'}} onChange={(event)=>this.sendDataToParent(event, data.card_dict.tweets[i])} value={data.card_dict.tweets[i][0]}/>
              <label style={{fontSize:'13px'}}>{data.card_dict.tweets[i][1]}</label>
            </div>
          </Table.Cell>
      </Table.Row>)
      }
      else if (data.card_dict.tweets[i][2] == '-' && this.props.cardSentimentNegative == true)
      {
        l.push(<Table.Row>
  
          <Table.Cell style={{backgroundColor:'#E34234', color:'white'}}>
              {data.card_dict.tweets[i][0]}
          </Table.Cell>
          <Table.Cell >
          <div>
              {/* <input
                type="checkbox"
                style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
              /> */}
              <Checkbox Checkbox key={data.card_dict.tweets.length} style={{marginRight:'5px', display:'inline'}} onChange={(event)=>this.sendDataToParent(event, data.card_dict.tweets[i])} value={data.card_dict.tweets[i][0]}/>
              <label style={{fontSize:'13px'}}>{data.card_dict.tweets[i][1]}</label>
            </div>
          </Table.Cell>
      </Table.Row>)
      }
    }
  }
  else if(this.props.card == false && data.without_insurance_dict && loc == "left")
  {
    for(let i = 0 ; i<data.without_insurance_dict.tweets.length ; i++)
    {
      if(data.without_insurance_dict.tweets[i][2] == '+' && this.props.cardSentimentPositive == true)
    {
      l.push(<Table.Row>
  
          <Table.Cell style={{backgroundColor:'lightgreen'}}>
              {data.without_insurance_dict.tweets[i][0]}
          </Table.Cell>
          <Table.Cell >
          <div>
              {/* <input
                type="checkbox"
                style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
              /> */}
              <Checkbox Checkbox key={data.without_insurance_dict.tweets.length} style={{marginRight:'5px', display:'inline'}} onChange={(event)=>this.sendDataToParent(event, data.without_insurance_dict.tweets[i])} value={data.without_insurance_dict.tweets[i][0]}/>
              <label style={{fontSize:'13px'}}>{data.without_insurance_dict.tweets[i][1]}</label>
            </div>
          </Table.Cell>
      </Table.Row>)
    }
      else if(data.without_insurance_dict.tweets[i][2] == '-' && this.props.cardSentimentNegative == true)
      {
        l.push(<Table.Row>
  
          <Table.Cell style={{backgroundColor:'#E34234' , color:'white'}}>
              {data.without_insurance_dict.tweets[i][0]}
          </Table.Cell>
          <Table.Cell >
          <div>
              {/* <input
                type="checkbox"
                style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
              /> */}
              <Checkbox Checkbox key={data.without_insurance_dict.tweets.length} style={{marginRight:'5px', display:'inline'}} onChange={(event)=>this.sendDataToParent(event, data.without_insurance_dict.tweets[i])} value={data.without_insurance_dict.tweets[i][0]}/>
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
     );
  }
}
 
export default MyTweets;

// function MyTweets(props) 
// {
//   var l = [];
//   var data = [];
//   data = props.data;
//   var loc = props.col;
//   if(data.length != 0)
//   {
//   if( data.insurance_dict.tweets && loc == "right")
//   {
//   for(let i = 0 ; i<data.insurance_dict.tweets.length; i++)
//   {
//     if(data.insurance_dict.tweets[i][2] == '+' && props.insurancePositiveSentiment == true)
//     {
//       l.push(<Table.Row>
//           <Table.Cell style={{backgroundColor:'lightgreen'}}>
//               {data.insurance_dict.tweets[i][0]}
//           </Table.Cell>
//           <Table.Cell >
//           <div>
//               {/* <input
//                 type="checkbox"
//                 style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//               /> */}
//               <Checkbox Checkbox key={data.insurance_dict.tweets[i][1]} style={{marginRight:'5px', display:'inline'}} onChange={this.sendDataToParent} value={data.insurance_dict.tweets[i][1]}/>
//               <label style={{fontSize:'13px'}}>{data.insurance_dict.tweets[i][1]}</label>
//             </div>
//           </Table.Cell>
//       </Table.Row>)
//     }
//     else if(data.insurance_dict.tweets[i][2] == '-' && props.insuranceNegativeSentiment == true) {
//       l.push(<Table.Row>

//         <Table.Cell style={{backgroundColor:'#E34234', color:'white'}}>
//             {data.insurance_dict.tweets[i][0]}
//         </Table.Cell>
//         <Table.Cell >
//         <div>
//             <input
//               type="checkbox"
//               style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//             />
//             <label style={{fontSize:'13px'}}>{data.insurance_dict.tweets[i][1]}</label>
//           </div>
//         </Table.Cell>
//     </Table.Row>)
//     }
//   }
// }
// if(props.card == true && data.card_dict.tweets && loc == "left")
// {
//   for(let i = 0 ; i<data.card_dict.tweets.length ; i++)
//   {
//     if(data.card_dict.tweets[i][2] == '+' && props.cardSentimentPositive == true){
//     l.push(<Table.Row>

//         <Table.Cell style={{backgroundColor:'lightgreen'}}>
//             {data.card_dict.tweets[i][0]}
//         </Table.Cell>
//         <Table.Cell >
//         <div>
//             <input
//               type="checkbox"
//               style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//             />
//             <label style={{fontSize:'13px'}}>{data.card_dict.tweets[i][1]}</label>
//           </div>
//         </Table.Cell>
//     </Table.Row>)
//     }
//     else if (data.card_dict.tweets[i][2] == '-' && props.cardSentimentNegative == true)
//     {
//       l.push(<Table.Row>

//         <Table.Cell style={{backgroundColor:'#E34234', color:'white'}}>
//             {data.card_dict.tweets[i][0]}
//         </Table.Cell>
//         <Table.Cell >
//         <div>
//             <input
//               type="checkbox"
//               style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//             />
//             <label style={{fontSize:'13px'}}>{data.card_dict.tweets[i][1]}</label>
//           </div>
//         </Table.Cell>
//     </Table.Row>)
//     }
//   }
// }
// else if(props.card == false && data.without_insurance_dict && loc == "left")
// {
//   for(let i = 0 ; i<data.without_insurance_dict.tweets.length ; i++)
//   {
//     if(data.without_insurance_dict.tweets[i][2] == '+' && props.cardSentimentPositive == true){
//     l.push(<Table.Row>

//         <Table.Cell style={{backgroundColor:'lightgreen'}}>
//             {data.without_insurance_dict.tweets[i][0]}
//         </Table.Cell>
//         <Table.Cell >
//         <div>
//             <input
//               type="checkbox"
//               style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//             />
//             <label style={{fontSize:'13px'}}>{data.without_insurance_dict.tweets[i][1]}</label>
//           </div>
//         </Table.Cell>
//     </Table.Row>)
//     }
//     else if(data.without_insurance_dict.tweets[i][2] == '-' && props.cardSentimentNegative == true)
//     {
//       l.push(<Table.Row>

//         <Table.Cell style={{backgroundColor:'#E34234' , color:'white'}}>
//             {data.without_insurance_dict.tweets[i][0]}
//         </Table.Cell>
//         <Table.Cell >
//         <div>
//             <input
//               type="checkbox"
//               style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//             />
//             <label style={{fontSize:'13px'}}>{data.without_insurance_dict.tweets[i][1]}</label>
//           </div>
//         </Table.Cell>
//     </Table.Row>)
//     }
//   }
// }
//   }
//   return (
//     <div className="center-col">

//       <Table>
//         <Table.Header>
//           <Table.Row>
//             <Table.HeaderCell>
//               <h4>Messages</h4>
//             </Table.HeaderCell>
//             <Table.HeaderCell>
//               <h4>Likes</h4>
//             </Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>
//         <Table.Body>{l}</Table.Body>
//       </Table>
//     </div>
//     )
// }
// export default MyTweets;
