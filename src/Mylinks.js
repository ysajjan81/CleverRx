// import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import React, { Component } from 'react';
import EmbedContainer from 'react-oembed-container';


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
    // var url = "http://iframe.ly/api/oembed?url=" + data.insurance_dict.external_links[i] + "&api_key=13f02bbf1e0968b1e51a45"
    var url = "http://iframe.ly/api/oembed?url=" + data.insurance_dict.external_links[i] + "&api_key=9c5fcb4b5845b1fe3369a0"
    var html = [];
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      if(response.status == 200)
        {
          return response.json();
        }
      else {
        alert('Uh Oh! Something went wrong');
        return -1;
      }
    }).then((data) => {
      if(data == -1)
        return;
        console.log("Iframely Data =");
        console.log(data);
        html = data.html;
    })
    // console.log('html', html)
      l.push(<TableRow>
          <TableCell>
          {html}
          </TableCell>
      </TableRow>
      )
  }
}
if(data.insurance_dict.facebook_links && loc == "right")
{
for(let i = 0 ; i<data.insurance_dict.facebook_links.length; i++)
{
  var url = "http://iframe.ly/api/oembed?url=" + data.insurance_dict.facebook_links[i] + "&api_key=13f02bbf1e0968b1e51a45"
  var html;
  fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response) => {
    if(response.status == 200)
      {
        return response.json();
      }
    else {
      alert('Uh Oh! Something went wrong');
      return -1;
    }
  }).then((data) => {
    if(data == -1)
      return;
      console.log("Iframely data = ")
      console.log(data);
      html = data.html;
  })
  l.push(<TableRow>
      <TableCell>
      {html}
      </TableCell>
  </TableRow>)
}
}
if(data.insurance_dict.twitter_links && loc == "right")
{
for(let i = 0 ; i<data.insurance_dict.twitter_links.length; i++)
{
  var url = "http://iframe.ly/api/oembed?url=" + data.insurance_dict.twitter_links[i] + "&api_key=13f02bbf1e0968b1e51a45"
  var html;
  fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response) => {
    if(response.status == 200)
      {
        return response.json();
      }
    else {
      alert('Uh Oh! Something went wrong');
      return -1;
    }
  }).then((data) => {
    if(data == -1)
      return;
      // html = data["html"]
      html = data.html;
  })
  console.log(html);
  l.push(<TableRow>

      <TableCell>
      {html}
      </TableCell>
  </TableRow>)
}
}
    if(props.card == true && data.card_dict.external_links && loc == "left")
    {
  for(let i = 0 ; i<data.card_dict.external_links.length; i++)
  {
    var url = "http://iframe.ly/api/oembed?url=" + data.card_dict.external_links[i] + "&api_key=13f02bbf1e0968b1e51a45"
    var html;
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      if(response.status == 200)
        {
          return response.json();
        }
      else {
        alert('Uh Oh! Something went wrong');
        return -1;
      }
    }).then((data) => {
      if(data == -1)
        return;
        // html = data["html"]
        html = data.html
    })
      l.push(<TableRow>

          <TableCell>
              {html}
          </TableCell>
      </TableRow>)
  }
}
if(props.card == true && data.card_dict.facebook_links && loc == "left")
{
for(let i = 0 ; i<data.card_dict.facebook_links.length; i++)
{
  var url = "http://iframe.ly/api/oembed?url=" + data.card_dict.facebook_links[i] + "&api_key=13f02bbf1e0968b1e51a45"
  var html;
  fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response) => {
    if(response.status == 200)
      {
        return response.json();
      }
    else {
      alert('Uh Oh! Something went wrong');
      return -1;
    }
  }).then((data) => {
    if(data == -1)
      return;
      html = data["html"]
  })
  l.push(<TableRow>

      <TableCell>
          {html}
      </TableCell>
  </TableRow>)
}
}
if(props.card == true && data.card_dict.twitter_links && loc == "left")
{
for(let i = 0 ; i<data.card_dict.twitter_links.length; i++)
{
  var url = "http://iframe.ly/api/oembed?url=" + data.card_dict.twitter_links[i]+ "&api_key=13f02bbf1e0968b1e51a45"
  var html;
  fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((response) => {
    if(response.status == 200)
      {
        return response.json();
      }
    else {
      alert('Uh Oh! Something went wrong');
      return -1;
    }
  }).then((data) => {
    if(data == -1)
      return;
      html = data["html"]
  })
  l.push(<TableRow>

      <TableCell>
          {html}
      </TableCell>
  </TableRow>)
}
}
if(props.card == false && data.without_insurance_dict.external_links && loc == "left")
{
  for(let i = 0 ; i<data.without_insurance_dict.external_links.length; i++)
  {
    var url = "http://iframe.ly/api/oembed?url=" + data.without_insurance_dict.external_links[i]+ "&api_key=13f02bbf1e0968b1e51a45"
    var html;
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      if(response.status == 200)
        {
          return response.json();
        }
      else {
        alert('Uh Oh! Something went wrong');
        return -1;
      }
    }).then((data) => {
      if(data == -1)
        return;
        html = data["html"]
    })
      l.push(
          <TableRow>
          <TableCell>{i+1}</TableCell>
          <TableCell>
          {html}
          </TableCell>
      </TableRow>
      )
  }
}
if(props.card == false && data.without_insurance_dict.facebook_links && loc == "left")
{
  for(let i = 0 ; i<data.without_insurance_dict.facebook_links.length; i++)
  {
    var url = "http://iframe.ly/api/oembed?url=" + data.without_insurance_dict.facebook_links[i] + "&api_key=13f02bbf1e0968b1e51a45"
    var html;
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      if(response.status == 200)
        {
          return response.json();
        }
      else {
        alert('Uh Oh! Something went wrong');
        return -1;
      }
    }).then((data) => {
      if(data == -1)
        return;
        html = data["html"]
    })
      l.push(
          <TableRow>
          <TableCell>{i+1}</TableCell>
          <TableCell>
          {html}
          </TableCell>
      </TableRow>
      )
  }
}
if(props.card == false && data.without_insurance_dict.twitter_links && loc == "left")
{
  for(let i = 0 ; i<data.without_insurance_dict.twitter_links.length; i++)
  {
    var url = "http://iframe.ly/api/oembed?url=" + data.without_insurance_dict.twitter_links[i] + "&api_key=13f02bbf1e0968b1e51a45"
    var html;
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then((response) => {
      if(response.status == 200)
        {
          return response.json();
        }
      else {
        alert('Uh Oh! Something went wrong');
        return -1;
      }
    }).then((data) => {
      if(data == -1)
        return;
        html = data["html"]
    })
      l.push(
          <TableRow>
          <TableCell>{i+1}</TableCell>
          <TableCell>
          {html}
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
