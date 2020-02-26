import React from 'react'
import { Tab, Form, Comment, Table} from 'semantic-ui-react'
import Cards from './Card.js';
import TweetEmbed from 'react-tweet-embed'
import ReactPlayer from 'react-player'
import { FacebookProvider, EmbeddedPost, Page, Group, Comments} from 'react-facebook';
import { Row, Layout, Col, Card,  Menu, Breadcrumb, Carousel } from 'antd';
import HeatMap from '../components/HeatMap.js'
import userImg from "../assets/img/user.png"
import _ from 'lodash'

const fbOptions = [
  { key: 'pa', text: 'Page', value: 'page' },
  { key: 'g', text: 'Group', value: 'group' },
  { key: 'po', text: 'Post', value: 'post' },
  {key: 'co', text: 'Comment', value:'comment'},
  {key: 'all', text: 'All', value:'all'}
];

const tweetOptions = [
  { key: 'po', text: 'Post', value: 'post' },
  {key: 'co', text: 'Comment', value:'comment'},
  {key: 'all', text: 'All', value:'all'}
];

const youtubeOptions = [
  { key: 'po', text: 'Post', value: 'post' },
  {key: 'co', text: 'Comment', value:'comment'},
  {key: 'all', text: 'All', value:'all'}
];

const sortByOptions = [
  { key: 'li', text: 'Likes', value: 'likes' },
  { key: 'da', text: 'Date', value: 'date' },
]

class Tabs extends React.Component {
  constructor(props) {
      super(props);
      this.averageGeolocation = this.averageGeolocation.bind(this);
      this.handlefBClick  = this.handlefBClick.bind(this);
      this.handletWClick  = this.handletWClick.bind(this);
      this.handleyTClick  = this.handleyTClick.bind(this);
      this.sortData = this.sortData.bind(this);

      this.state ={
        fbsortVar : 'all',
        twsortVar: 'all',
        ytsortVar: 'all',
        datasortVar: 'likes',
        column: null,
        fbdata: [],
        twData: [],
        ytData: [],
        direction: null,
        fbHeatMap: [],
        twHeatMap: [],
        ytHeatMap: []
      };
  }

  handlefBClick(event, {value}){
    this.setState({fbsortVar: value});
  }

  handletWClick(event, {value}){
    this.setState({twsortVar: value});
  }

  handleyTClick(event, {value}){
    this.setState({ytsortVar: value});
  }

  sortData(event, {value}) {
    this.setState({datasortVar: value});
  }

  averageGeolocation(coords) {
    if (coords.length === 1) {
      return coords[0];
    }

    let x = 0.0;
    let y = 0.0;
    let z = 0.0;

    for (let coord of coords) {
      let latitude = coord.lat * Math.PI / 180;
      let longitude = coord.lng * Math.PI / 180;

      x += Math.cos(latitude) * Math.cos(longitude);
      y += Math.cos(latitude) * Math.sin(longitude);
      z += Math.sin(latitude);
    }

    let total = coords.length;

    x = x / total;
    y = y / total;
    z = z / total;

    let centralLongitude = Math.atan2(y, x);
    let centralSquareRoot = Math.sqrt(x * x + y * y);
    let centralLatitude = Math.atan2(z, centralSquareRoot);

    return {
      lat: centralLatitude * 180 / Math.PI,
      lng: centralLongitude * 180 / Math.PI
    };
  }

  formatData(reply, date, likes){
    if(!date) {
      date = " -";
    }
    if(!likes) {
      likes = " -";
    }
    if(!reply) {
      reply = " -";
    }
    return (
      <div>
        <span><b>Reply:</b> {reply} </span><br/>
        <span><b>Date :</b> {date} </span><br/>
        <span><b>Likes:</b> {likes} </span><br/>
      </div>
    );
  }

  formatReply(reply) {
    if(!reply) {
      reply = " -";
    }
    return (
      <div>
        <span><b>Reply:</b> {reply} </span><br/>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState){

    if(this.props.data !== prevProps.data || this.state.fbsortVar !== prevState.fbsortVar || this.state.twsortVar !== prevState.twsortVar || this.state.ytsortVar !== prevState.ytsortVar || this.state.datasortVar !== prevState.datasortVar){
      console.log("Clicked");
      var fbdata = this.props.data["FACEBOOK"]["posts"];
      var fbList = [];
      var position = [];

      if(this.state.fbsortVar == 'all' || this.state.fbsortVar == 'post'){
        for(var key = 0; key<fbdata.length; key++){
          if(fbdata[key]['latitude'] != null && fbdata[key]['longitude'] != null)
            position.push({lat: parseFloat(fbdata[key]['latitude']) , lng: parseFloat(fbdata[key]['longitude'])});
            fbList.push({
              post: <FacebookProvider appId="996887387351331">
                    <EmbeddedPost href={fbdata[key]["post_url"]}  />
                    </FacebookProvider>,
              data : this.formatData(fbdata[key]["reply"], fbdata[key]["posted_date"], fbdata[key]["likes"]),
              likes : fbdata[key]["likes"],
              postedTime : new Date(Date.parse(fbdata[key]["posted_date"])).getTime()
        });
      }

      if(this.state.datasortVar == 'likes') {
        [].sort.call( fbList, ({ likes: prev }, { likes: current }) => {
          if(current != null && prev != null ){
            return current - prev;
          } else if(prev == null) {
            return 1;
          } else if ( current == null){
            return -1;
          }
        });
      } else if(this.state.datasortVar == 'date') {
        [].sort.call( fbList, ({ postedTime: t1 }, { postedTime: t2 }) => {
          if(t2 != null && t1 != null ){
            return t2 - t1;
          } else if(t1 == null) {
            return 1;
          } else if ( t2 == null){
            return -1;
          }
        });
      }

      }
      fbdata = this.props.data["FACEBOOK"]["groups"];

      if(this.state.fbsortVar == 'all' || this.state.fbsortVar == 'group'){
        for(var key = 0; key<fbdata.length; key++){
          if(fbdata[key]['latitude'] != null && fbdata[key]['longitude'] != null)
            position.push({lat: parseFloat(fbdata[key]['latitude']) , lng: parseFloat(fbdata[key]['longitude'])});
            fbList.push({
            post:  <FacebookProvider appId="996887387351331">
              <Group href={fbdata[key]["group_url"]}  />
              </FacebookProvider>,
            data : this.formatReply(fbdata[key]["reply"]),
          });
        }
      }

      fbdata = this.props.data["FACEBOOK"]["page"];

      if(this.state.fbsortVar == 'all' || this.state.fbsortVar == 'page'){
        for(var key = 0; key<fbdata.length; key++){
          if(fbdata[key]['latitude'] != null && fbdata[key]['longitude'] != null)
            position.push({lat: parseFloat(fbdata[key]['latitude']) , lng: parseFloat(fbdata[key]['longitude'])});
            fbList.push({
              post: <FacebookProvider appId="996887387351331">
              <Page href={fbdata[key]["page_url"]} tabs="timeline" />
              </FacebookProvider>,
              data : this.formatReply(fbdata[key]["reply"]),
             });
        }
      }
      fbdata = this.props.data["FACEBOOK"]["comments"];

      if(this.state.fbsortVar == 'all' || this.state.fbsortVar == 'comment'){
        for(var key = 0; key<fbdata.length; key++){
          if(fbdata[key]['latitude'] != null && fbdata[key]['longitude'] != null)
            position.push({lat: parseFloat(fbdata[key]['latitude']) , lng: parseFloat(fbdata[key]['longitude'])});
            fbList.push({
              post: <FacebookProvider appId="996887387351331">
              <Comments href={fbdata[key]["comment_url"]} />
              </FacebookProvider>,
              data : this.formatReply(fbdata[key]["reply"]),
            });

        }
      }
      var pos = '';
      if(position.length != 0){
        var center = this.averageGeolocation(position);
        pos = <Row style={{'marginTop':'20px'}}><HeatMap center={{ lat: center.lat, lng: center.lng }} zoom={14} data={position} /></Row>
      }
      this.setState({fbData: fbList, fbHeatMap: pos});


      var twitterList =[];
      position = [];
      if(this.state.twsortVar == 'all' || this.state.twsortVar == 'post'){
        var twdata = this.props.data["TWITTER"]["posts"];
        for(var key = 0; key<twdata.length; key++){
              if(twdata[key]['latitude'] != null && twdata[key]['longitude'] != null)
            position.push({lat: parseFloat(twdata[key]['latitude'] ), lng: parseFloat(twdata[key]['longitude']) });
            twitterList.push({
              post:<TweetEmbed id={twdata[key]["tweet_url"]} options={{theme: 'dark' }}/>,
              data : this.formatReply(twdata[key]["reply"]),
            });
        }
      }

      if(this.state.twsortVar == 'all' || this.state.twsortVar == 'comment'){
        twdata = this.props.data["TWITTER"]["comments"];
        for(var key = 0; key<twdata.length; key++){
            if(twdata[key]['latitude'] != null && twdata[key]['longitude'] != null)
          position.push({lat: parseFloat(twdata[key]['latitude'] ), lng: parseFloat(twdata[key]['longitude']) });
          twitterList.push({
            post: <TweetEmbed id={twdata[key]["tweet_url"]} options={{theme: 'dark' }}/>,
            data : this.formatReply(twdata[key]["reply"]),
          });
        }
      }
      var pos = '';
      if(position.length != 0){
        var center = this.averageGeolocation(position);
        pos = <Row style={{'marginTop':'20px'}}><HeatMap center={{ lat: center.lat, lng: center.lng }} zoom={14} data={position} /></Row>
      }
      this.setState({twData: twitterList, twHeatMap: pos});

      var youtubeList = [];
      position = [];

      if(this.state.ytsortVar == 'all' || this.state.ytsortVar == 'post'){
        var youtubeData = this.props.data["YOUTUBE"]["posts"];
        for(var key = 0; key<youtubeData.length; key++){
            if(youtubeData[key]['latitude'] != null && youtubeData[key]['longitude'] != null)
          position.push({lat: parseFloat(youtubeData[key]['latitude']) , lng: parseFloat(youtubeData[key]['longitude']) });
          youtubeList.push({
              post: <ReactPlayer
                url={youtubeData[key]['video_url']}
                youtubeConfig={{ playerVars: { showinfo: 1 } }}/>,
              data : this.formatReply(youtubeData[key]["reply"]),
            });
        }
      }

      if(this.state.ytsortVar == 'all' || this.state.ytsortVar == 'comment'){
        youtubeData = this.props.data["YOUTUBE"]["comments"];
        for(var key = 0; key<youtubeData.length; key++){
          if(youtubeData[key]['latitude'] != null && youtubeData[key]['longitude'] != null)
          position.push({lat: parseFloat(youtubeData[key]['latitude']) , lng: parseFloat(youtubeData[key]['longitude']) });
            youtubeList.push({
              post:
              <Comment>
               <Comment.Avatar  height="70px" width="70px" src={userImg} />
               <Comment.Content>
                 <Comment.Author as='a'>User</Comment.Author>
                 <Comment.Metadata>
                   <div>{youtubeData[key]['commented_data']}</div>
                 </Comment.Metadata>
                 <Comment.Text style={{'width':'500px'}}>{youtubeData[key]['video_comment']}</Comment.Text>
               </Comment.Content>
             </Comment>,
             data : this.formatReply(youtubeData[key]["reply"]),
           });
        }
      }
      var pos;
      if(position.length != 0){

        var center = this.averageGeolocation(position);
        var pos = <Row style={{'marginTop':'20px'}}><HeatMap center={{ lat: center.lat, lng: center.lng }} zoom={14} data={position} /></Row>
      }
      this.setState({ytData: youtubeList, ytHeatMap: pos});
    }
  }

  render(){
    const { column, fbData, twData, ytData, fbHeatMap, ytHeatMap, twHeatMap, direction } = this.state
    const FbSort = () =>
    <Form style={{'textAlign':'left', 'marginBottom':'20px', 'display':'flex'}}>
      <Form.Select style={{'width':'120px'}} fluid selection label='Select By:' options = {fbOptions}  value = {this.state.fbsortVar} onChange={this.handlefBClick}  placeholder = 'All' />
      <div style={{'marginLeft':'20px'}}><Form.Select fluid selection label='Sort By:' options = {sortByOptions}  value = {this.state.datasortVar} onChange={this.sortData}  placeholder = 'All' /></div>
    </Form>;
    const TwSort = () =><Form style={{'width':'300px', 'textAlign':'left', 'marginBottom':'20px'}}> <Form.Select fluid selection label='Select By:' options = {tweetOptions}  value = {this.state.twsortVar} onChange={this.handletWClick}   placeholder = 'All' /></Form>;
    const YtSort = () =><Form style={{'width':'300px', 'textAlign':'left', 'marginBottom':'20px'}}> <Form.Select fluid selection label='Select By:' options = {youtubeOptions}  value = {this.state.ytsortVar} onChange={this.handleyTClick}  placeholder = 'All' /></Form>;
    var index = 0;
    const panes = [
      { menuItem: 'Facebook', render: () => <Tab.Pane><FbSort />
        <Table celled fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell >Post</Table.HeaderCell>
            <Table.HeaderCell >Data</Table.HeaderCell>
          </Table.Row>
          </Table.Header>
          <Table.Body>
          {_.map(fbData, ({ post, data}) => (
            <Table.Row key={post}>
              <Table.Cell>{post}</Table.Cell>
              <Table.Cell>{data}</Table.Cell>
            </Table.Row>

          ))}
          </Table.Body>
          <Table.Footer></Table.Footer>
        </Table>
        {fbHeatMap}
        </Tab.Pane> },
      { menuItem: 'Twitter', render: () => <Tab.Pane><TwSort />
      <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell >Tweet</Table.HeaderCell>
        <Table.HeaderCell >Data</Table.HeaderCell>

        </Table.Row>
      </Table.Header>
      <Table.Body>
      {_.map(twData, ({ post, data }) => (
        <Table.Row key={post}>
          <Table.Cell>{post}</Table.Cell>
          <Table.Cell>{data}</Table.Cell>
        </Table.Row>
      ))}
      </Table.Body>
        <Table.Footer></Table.Footer>
      </Table>
      {twHeatMap}
      </Tab.Pane>
    },
      { menuItem: 'Youtube', render: () => <Tab.Pane><YtSort />
      <Table sortable celled fixed>
      <Table.Header>
        <Table.Row>
        <Table.HeaderCell>Video</Table.HeaderCell>
        <Table.HeaderCell>Data</Table.HeaderCell>
        </Table.Row>
        </Table.Header>
        <Table.Body>
        {_.map(ytData, ({ post, data}) => (
          <Table.Row key={post}>
            <Table.Cell>{post}</Table.Cell>
            <Table.Cell>{data}</Table.Cell>
          </Table.Row>
        ))}
        </Table.Body>
          <Table.Footer></Table.Footer>
        </Table>
        {ytHeatMap}
        </Tab.Pane>
    },
    ]
        return (<Tab panes={panes} />);
  }
}
export default Tabs
