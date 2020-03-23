import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import React, { Component } from 'react';
import IframeApp from './iframely.js'


function Mylinks(props) {
  console.log(props.data);
  var l = [];
  var data = [];
  var loc = props.col;
  data = props.data;
  if(data.length != 0 )
  {
    if(data.insurance_dict.external_links && loc == "right")
    {
      for(let i = 0 ; i<data.insurance_dict.external_links.length; i++)
      {
        var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.without_insurance_dict.external_links[i] + '&api_key=13f02bbf1e0968b1e51a45"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
        l.push(
            <TableRow>
            <TableCell>{i+1}</TableCell>
            <TableCell>
              <IframeApp data={iframe} />
            </TableCell>
        </TableRow>
        )
      }
    }
    if(data.insurance_dict.facebook_links && loc == "right")
    {
      for(let i = 0 ; i<data.insurance_dict.facebook_links.length; i++)
      {
        var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.without_insurance_dict.facebook_links[i] + '&api_key=13f02bbf1e0968b1e51a45"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
        l.push(
            <TableRow>
            <TableCell>{i+1}</TableCell>
            <TableCell>
              <IframeApp data={iframe} />
            </TableCell>
        </TableRow>
        )
      }
    }
    if(data.insurance_dict.twitter_links && loc == "right")
    {
    for(let i = 0 ; i<data.insurance_dict.twitter_links.length; i++)
    {
      var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.without_insurance_dict.twitter_links[i] + '&api_key=13f02bbf1e0968b1e51a45"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
      l.push(
          <TableRow>
          <TableCell>{i+1}</TableCell>
          <TableCell>
            <IframeApp data={iframe} />
          </TableCell>
      </TableRow>
      )
    }
    }
    if(props.card == true && data.card_dict.external_links && loc == "left")
    {
      for(let i = 0 ; i<data.card_dict.external_links.length; i++)
      {
        var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.card_dict.external_links[i] + '&api_key=13f02bbf1e0968b1e51a45"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
        l.push(
            <TableRow>
            <TableCell>{i+1}</TableCell>
            <TableCell>
              <IframeApp data={iframe} />
            </TableCell>
        </TableRow>
        )

      }
    }
  if(props.card == true && data.card_dict.facebook_links && loc == "left")
  {
    for(let i = 0 ; i<data.card_dict.facebook_links.length; i++)
    {
      var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.card_dict.facebook_links[i] + '&api_key=13f02bbf1e0968b1e51a45"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
      l.push(
          <TableRow>
          <TableCell>{i+1}</TableCell>
          <TableCell>
            <IframeApp data={iframe} />
          </TableCell>
      </TableRow>
      )
    }
    }
    if(props.card == true && data.card_dict.twitter_links && loc == "left")
    {
    for(let i = 0 ; i<data.card_dict.twitter_links.length; i++)
    {
      var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.card_dict.twitter_links[i] + '&api_key=13f02bbf1e0968b1e51a45"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
      l.push(
          <TableRow>
          <TableCell>{i+1}</TableCell>
          <TableCell>
            <IframeApp data={iframe} />
          </TableCell>
      </TableRow>
      )
    }
    }
    if(props.card == false && data.without_insurance_dict.external_links && loc == "left")
    {
      for(let i = 0 ; i<data.without_insurance_dict.external_links.length; i++)
      {

        var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.without_insurance_dict.external_links[i] + '&api_key=13f02bbf1e0968b1e51a45"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
        l.push(
            <TableRow>
            <TableCell>{i+1}</TableCell>
            <TableCell>
              <IframeApp data={iframe} />
            </TableCell>
        </TableRow>
        )
      }
    }
    if(props.card == false && data.without_insurance_dict.facebook_links && loc == "left")
    {
      for(let i = 0 ; i<data.without_insurance_dict.facebook_links.length; i++)
      {
        var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.without_insurance_dict.facebook_links[i] + '&api_key=13f02bbf1e0968b1e51a45"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
        l.push(
            <TableRow>
            <TableCell>{i+1}</TableCell>
            <TableCell>
              <IframeApp data={iframe} />
            </TableCell>
        </TableRow>
        )
      }
    }
    if(props.card == false && data.without_insurance_dict.twitter_links && loc == "left")
    {
      for(let i = 0 ; i<data.without_insurance_dict.twitter_links.length; i++)
      {
        var iframe = '<iframe style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/api/iframe?url=' + data.without_insurance_dict.twitter_links[i] + '&api_key=13f02bbf1e0968b1e51a45"></iframe><script async style="width:100%; height:300px; border:0; border-radius: 4px; overflow:hidden;" src="//cdn.iframe.ly/embed.js"></script>'
        l.push(
            <TableRow>
            <TableCell>{i+1}</TableCell>
            <TableCell>
              <IframeApp data={iframe} />
            </TableCell>
        </TableRow>
        )
      }
    }
      }
        return (
          <div className="center-col">
          <Paper>
            <Table>
              <TableBody>{l}</TableBody>
            </Table>
          </Paper>
          </div>
          )
    }
export default Mylinks;
