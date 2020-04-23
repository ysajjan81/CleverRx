import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import React, { Component } from 'react';
import IframeApp from './iframely.js'
import {Table, Tab} from 'semantic-ui-react'

class Mylinks extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
    this.sendDataToParent = this.sendDataToParent.bind(this);
    this.sendDataToParentForTwitterLinksForCardCustomer = this.sendDataToParentForTwitterLinksForCardCustomer.bind(this);
  }
sendDataToParent(event, value)
{
  this.props.myCallBack(value);
}
sendDataToParentForTwitterLinksForCardCustomer(event, value)
{
  this.props.myCallBackForTwitterLinks(value);
}
sendDataToParentForTwitterLinksForInsurance(event, value)
{
  this.props.InsuranceTwitterLinks(value);
}

  render() {
    var l = [];
    var e = [];
    var data = [];
    var loc = this.props.col;
    data = this.props.data;
    if(data.length != 0 )
    {
      if(this.props.data != null && data.insurance_dict.external_links != null && loc == "right")
      {
        for(let i = 0 ; i<data.insurance_dict.external_links.length; i++)
        {
          if(data.insurance_dict.external_links == null)
          continue;
          var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.insurance_dict.external_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
          e.push(
              <Table.Row>
              <Table.Cell>
                <IframeApp data={iframe} />
              </Table.Cell>
              <Table.Cell>
              <div>
                  <input
                    key = {data.insurance_dict.external_links.length}
                    type="checkbox"
                    style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
                    onChange ={(event)=>this.sendDataToParent(event, this.props.data.insurance_dict.external_links[i])}
                  />
                  <label style={{fontSize:'13px'}}>{data.insurance_dict.external_links[i][1]}</label>
                </div></Table.Cell>
          </Table.Row>
          )
        }
      }
      if(this.props.data != null && data.insurance_dict.facebook_links != null && loc == "right")
      {
        for(let i = 0 ; i<data.insurance_dict.facebook_links.length; i++)
        {
          if(data.insurance_dict.facebook_links == null)
          continue;
          var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.insurance_dict.facebook_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
          l.push(
              <Table.Row>
  
              <Table.Cell>
                <IframeApp data={iframe} />
              </Table.Cell>
              <Table.Cell><div>
                  <input
                    key = {data.insurance_dict.facebook_links.length}
                    type="checkbox"
                    style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
                    onChange ={(event)=>this.sendDataToParent(event, this.props.data.insurance_dict.facebook_links[i])}
                  />
                  <label style={{fontSize:'13px'}}>{data.insurance_dict.facebook_links[i][1]}</label>
                </div></Table.Cell>
          </Table.Row>
          )
        }
      }
      if(this.props.data != null && data.insurance_dict.twitter_links != null && loc == "right")
      {
      for(let i = 0 ; i<data.insurance_dict.twitter_links.length; i++)
      {
        if(data.insurance_dict.twitter_links == null)
        continue;
        var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.insurance_dict.twitter_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
        l.push(
            <Table.Row>
  
            <Table.Cell>
              <IframeApp data={iframe} />
            </Table.Cell>
            <Table.Cell><div>
                <input
                key = {data.insurance_dict.twitter_links.length}
                  type="checkbox"
                  style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
                  onChange ={(event)=>this.sendDataToParentForTwitterLinksForInsurance(event, this.props.data.insurance_dict.twitter_links[i])}
                />
                <label style={{fontSize:'13px'}}>{data.insurance_dict.twitter_links[i][1]}</label>
              </div>
            </Table.Cell>
        </Table.Row>
        )
      }
      }
      if(this.props.data != null && this.props.card == true && data.card_dict.external_links && loc == "left")
      {
        for(let i = 0 ; i<data.card_dict.external_links.length; i++)
        {
          if(data.card_dict.external_links == null)
          continue;
          var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.card_dict.external_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
          e.push(
              <Table.Row>
              <Table.Cell>
                <IframeApp data={iframe} />
              </Table.Cell>
              <Table.Cell><div>
              <input
               key = {data.card_dict.external_links.length}
                type="checkbox"
                style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
                onChange ={(event)=>this.sendDataToParent(event, this.props.data.card_dict.external_links[i])}
              />
              <label style={{fontSize:'13px'}}>{data.card_dict.external_links[i][1]}</label>
            </div>
            </Table.Cell>
          </Table.Row>
          )
        }
      }
    if(this.props.data != null && this.props.card == true && data.card_dict.facebook_links && loc == "left")
    {
      for(let i = 0 ; i<data.card_dict.facebook_links.length; i++)
      {
        if(data.card_dict.facebook_links == null)
          continue;
        var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.card_dict.facebook_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
        l.push(
            <Table.Row>
            <Table.Cell>
              <IframeApp data={iframe} />
            </Table.Cell>
            <Table.Cell><div>
            <input
              key = {data.card_dict.facebook_links.length}
              type="checkbox"
              style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
              onChange ={(event)=>this.sendDataToParent(event, this.props.data.card_dict.facebook_links[i])}
            />
            <label style={{fontSize:'13px'}}>{data.card_dict.facebook_links[i][1]}</label>
          </div>
          </Table.Cell>
        </Table.Row>
        )
      }
      }
      if(this.props.data != null && this.props.card == true && data.card_dict.twitter_links && loc == "left")
      {
      for(let i = 0 ; i<data.card_dict.twitter_links.length; i++)
      {
        if(data.card_dict.twitter_links == null)
          continue;
        var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.card_dict.twitter_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
        l.push(
            <Table.Row>
  
            <Table.Cell>
              <IframeApp data={iframe} />
            </Table.Cell>
            <Table.Cell><div>
              <input
                key = {data.card_dict.twitter_links.length}
                type="checkbox"
                style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
                onChange ={(event)=>this.sendDataToParentForTwitterLinksForCardCustomer(event, this.props.data.card_dict.twitter_links[i])}
              />
              <label style={{fontSize:'13px'}}>{data.card_dict.twitter_links[i][1]}</label>
            </div></Table.Cell>
        </Table.Row>
        )
      }
      }
      if(this.props.data != null && this.props.card == false && data.without_insurance_dict.external_links && loc == "left")
      {
        for(let i = 0 ; i<data.without_insurance_dict.external_links.length; i++)
        {
          if(data.without_insurance_dict.external_links == null)
          continue;
  
          var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.without_insurance_dict.external_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
          e.push(
              <Table.Row>
  
              <Table.Cell>
                <IframeApp data={iframe} />
              </Table.Cell>
              <Table.Cell>
              <div>
                  <input
                    key = {data.without_insurance_dict.external_links.length}
                    type="checkbox"
                    style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
                    onChange ={(event)=>this.sendDataToParent(event, this.props.data.without_insurance_dict.external_links[i])}
                  />
                  <label style={{fontSize:'13px'}}>{data.without_insurance_dict.external_links[i][1]}</label>
                </div>
              </Table.Cell>
          </Table.Row>
          )
        }
      }
      if(this.props.data != null && this.props.card == false && data.without_insurance_dict.facebook_links && loc == "left")
      {
        for(let i = 0 ; i<data.without_insurance_dict.facebook_links.length; i++)
        {
          if(data.without_insurance_dict.facebook_links == null)
          continue;
          var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.without_insurance_dict.facebook_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
          l.push(
              <Table.Row>
  
              <Table.Cell>
                <IframeApp data={iframe} />
              </Table.Cell>
  
              <Table.Cell>
              <div>
                  <input
                    key = {data.without_insurance_dict.facebook_links.length}
                    type="checkbox"
                    style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
                    onChange ={(event)=>this.sendDataToParentForTwitterLinks(event, this.props.data.without_insurance_dict.facebook_links[i])}
                  />
                  <label style={{fontSize:'13px'}}>{data.without_insurance_dict.facebook_links[i][1]}</label>
                </div>
              </Table.Cell>
          </Table.Row>
          )
        }
      }
      if(this.props.data != null && this.props.card == false && data.without_insurance_dict.twitter_links && loc == "left")
      {
        for(let i = 0 ; i<data.without_insurance_dict.twitter_links.length; i++)
        {
          if(data.without_insurance_dict.twitter_links == null)
          continue;
          var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.without_insurance_dict.twitter_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
          l.push(
              <Table.Row>
              <Table.Cell>
                <IframeApp data={iframe} />
              </Table.Cell>
              <Table.Cell>
                <div>
                    <input
                      key = {data.without_insurance_dict.twitter_links.length}
                      type="checkbox"
                      style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
                      onChange ={(event)=>this.sendDataToParentForTwitterLinksForCardCustomer(event, this.props.data.without_insurance_dict.twitter_links[i])}
                    />
                    <label style={{fontSize:'13px'}}>{data.without_insurance_dict.twitter_links[i][1]}</label>
                  </div></Table.Cell>
          </Table.Row>
          )
        }
      }
        }
        const panes = [
          {
            menuItem: 'External', render: () => <Tab.Pane>
            <div style={{  overflowY: 'scroll', height: '370px'}}>
            <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <h4>Links</h4>
                </Table.HeaderCell>
                <Table.HeaderCell>
                  <h4>Likes</h4>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
              <Table.Body>
                {e}
              </Table.Body>
            </Table>
            </div>
            </Tab.Pane>
            },
          {
          menuItem: 'Twitter', render: () => <Tab.Pane>
          <div style={{  overflowY: 'scroll', height: '370px'}}>
          <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <h4>Links</h4>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <h4>Likes</h4>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
            <Table.Body>
              {l}
            </Table.Body>
          </Table>
          </div>
          </Tab.Pane>
        },
        ]
    


    return ( <Tab panes={panes} /> );
  }
}
 
export default Mylinks;


// function Mylinks(this.props) {
//   var l = [];
//   var e = [];
//   var data = [];
//   var loc = this.props.col;
//   data = this.props.data;
//   if(data.length != 0 )
//   {
//     if(data.insurance_dict.external_links && loc == "right")
//     {
//       for(let i = 0 ; i<data.insurance_dict.external_links.length; i++)
//       {
//         var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.insurance_dict.external_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
//         e.push(
//             <Table.Row>
//             <Table.Cell>
//               <IframeApp data={iframe} />
//             </Table.Cell>
//             <Table.Cell>
//             <div>
//                 <input
//                   key = {data.insurance_dict.external_links[i][1]}
//                   type="checkbox"
//                   style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//                 />
//                 <label style={{fontSize:'13px'}}>{data.insurance_dict.external_links[i][1]}</label>
//               </div></Table.Cell>
//         </Table.Row>
//         )
//       }
//     }
//     if(data.insurance_dict.facebook_links && loc == "right")
//     {
//       for(let i = 0 ; i<data.insurance_dict.facebook_links.length; i++)
//       {
//         var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.insurance_dict.facebook_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
//         l.push(
//             <Table.Row>

//             <Table.Cell>
//               <IframeApp data={iframe} />
//             </Table.Cell>
//             <Table.Cell><div>
//                 <input
//                   key = {data.insurance_dict.facebook_links[i][1]}
//                   type="checkbox"
//                   style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//                 />
//                 <label style={{fontSize:'13px'}}>{data.insurance_dict.facebook_links[i][1]}</label>
//               </div></Table.Cell>
//         </Table.Row>
//         )
//       }
//     }
//     if(data.insurance_dict.twitter_links && loc == "right")
//     {
//     for(let i = 0 ; i<data.insurance_dict.twitter_links.length; i++)
//     {
//       var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.insurance_dict.twitter_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
//       l.push(
//           <Table.Row>

//           <Table.Cell>
//             <IframeApp data={iframe} />
//           </Table.Cell>
//           <Table.Cell><div>
//               <input
//               key = {data.insurance_dict.twitter_links[i][1]}
//                 type="checkbox"
//                 style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//               />
//               <label style={{fontSize:'13px'}}>{data.insurance_dict.twitter_links[i][1]}</label>
//             </div>
//           </Table.Cell>
//       </Table.Row>
//       )
//     }
//     }
//     if(this.props.card == true && data.card_dict.external_links && loc == "left")
//     {
//       for(let i = 0 ; i<data.card_dict.external_links.length; i++)
//       {
//         var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.card_dict.external_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
//         e.push(
//             <Table.Row>
//             <Table.Cell>
//               <IframeApp data={iframe} />
//             </Table.Cell>
//             <Table.Cell><div>
//             <input
//              key = {data.card_dict.external_links[i][1]}
//               type="checkbox"
//               style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//             />
//             <label style={{fontSize:'13px'}}>{data.card_dict.external_links[i][1]}</label>
//           </div>
//           </Table.Cell>
//         </Table.Row>
//         )
//       }
//     }
//   if(this.props.card == true && data.card_dict.facebook_links && loc == "left")
//   {
//     for(let i = 0 ; i<data.card_dict.facebook_links.length; i++)
//     {
//       var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.card_dict.facebook_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
//       l.push(
//           <Table.Row>
//           <Table.Cell>
//             <IframeApp data={iframe} />
//           </Table.Cell>
//           <Table.Cell><div>
//           <input
//             key = {data.card_dict.facebook_links[i][1]}
//             type="checkbox"
//             style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//           />
//           <label style={{fontSize:'13px'}}>{data.card_dict.facebook_links[i][1]}</label>
//         </div>
//         </Table.Cell>
//       </Table.Row>
//       )
//     }
//     }
//     if(this.props.card == true && data.card_dict.twitter_links && loc == "left")
//     {
//     for(let i = 0 ; i<data.card_dict.twitter_links.length; i++)
//     {
//       var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.card_dict.twitter_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
//       l.push(
//           <Table.Row>

//           <Table.Cell>
//             <IframeApp data={iframe} />
//           </Table.Cell>
//           <Table.Cell><div>
//             <input
//               key = {data.card_dict.twitter_links[i][1]}
//               type="checkbox"
//               style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//             />
//             <label style={{fontSize:'13px'}}>{data.card_dict.twitter_links[i][1]}</label>
//           </div></Table.Cell>
//       </Table.Row>
//       )
//     }
//     }
//     if(this.props.card == false && data.without_insurance_dict.external_links && loc == "left")
//     {
//       for(let i = 0 ; i<data.without_insurance_dict.external_links.length; i++)
//       {

//         var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.without_insurance_dict.external_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
//         e.push(
//             <Table.Row>

//             <Table.Cell>
//               <IframeApp data={iframe} />
//             </Table.Cell>
//             <Table.Cell>
//             <div>
//                 <input
//                   key = {data.without_insurance_dict.external_links[i][1]}
//                   type="checkbox"
//                   style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//                 />
//                 <label style={{fontSize:'13px'}}>{data.without_insurance_dict.external_links[i][1]}</label>
//               </div>
//             </Table.Cell>
//         </Table.Row>
//         )
//       }
//     }
//     if(this.props.card == false && data.without_insurance_dict.facebook_links && loc == "left")
//     {
//       for(let i = 0 ; i<data.without_insurance_dict.facebook_links.length; i++)
//       {
//         var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.without_insurance_dict.facebook_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
//         l.push(
//             <Table.Row>

//             <Table.Cell>
//               <IframeApp data={iframe} />
//             </Table.Cell>

//             <Table.Cell>
//             <div>
//                 <input
//                   key = {data.without_insurance_dict.facebook_links[i][1]}
//                   type="checkbox"
//                   style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//                 />
//                 <label style={{fontSize:'13px'}}>{data.without_insurance_dict.facebook_links[i][1]}</label>
//               </div>
//             </Table.Cell>
//         </Table.Row>
//         )
//       }
//     }
//     if(this.props.card == false && data.without_insurance_dict.twitter_links && loc == "left")
//     {
//       for(let i = 0 ; i<data.without_insurance_dict.twitter_links.length; i++)
//       {
//         var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.without_insurance_dict.twitter_links[i][0] + '&api_key=9ae8d9c2e9f179fa866756"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
//         l.push(
//             <Table.Row>

//             <Table.Cell>
//               <IframeApp data={iframe} />
//             </Table.Cell>
//             <Table.Cell>
//               <div>
//                   <input
//                     key = {data.without_insurance_dict.twitter_links[i][1]}
//                     type="checkbox"
//                     style={{marginRight:'10px', transform: 'scale(1.5)', 'margin': '10px'}}
//                   />
//                   <label style={{fontSize:'13px'}}>{data.without_insurance_dict.twitter_links[i][1]}</label>
//                 </div></Table.Cell>
//         </Table.Row>
//         )
//       }
//     }
//       }
//       const panes = [
//         {
//           menuItem: 'External', render: () => <Tab.Pane>
//           <div style={{  overflowY: 'scroll', height: '370px'}}>
//           <Table celled>
//           <Table.Header>
//             <Table.Row>
//               <Table.HeaderCell>
//                 <h4>Links</h4>
//               </Table.HeaderCell>
//               <Table.HeaderCell>
//                 <h4>Likes</h4>
//               </Table.HeaderCell>
//             </Table.Row>
//           </Table.Header>
//             <Table.Body>
//               {e}
//             </Table.Body>
//           </Table>
//           </div>
//           </Tab.Pane>
//           },
//         {
//         menuItem: 'Twitter', render: () => <Tab.Pane>
//         <div style={{  overflowY: 'scroll', height: '370px'}}>
//         <Table celled>
//         <Table.Header>
//           <Table.Row>
//             <Table.HeaderCell>
//               <h4>Links</h4>
//             </Table.HeaderCell>
//             <Table.HeaderCell>
//               <h4>Likes</h4>
//             </Table.HeaderCell>
//           </Table.Row>
//         </Table.Header>
//           <Table.Body>
//             {l}
//           </Table.Body>
//         </Table>
//         </div>
//         </Tab.Pane>
//       },
//       ]
//   return (

//     <Tab panes={panes} />

//   );
// }
// export default Mylinks;
