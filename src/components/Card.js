import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

class Cards extends React.Component{

  constructor(props) {
      super(props);
      var data = this.props.data;
      this.state ={
        name: data.name,
        postLink: "",
        target:data.target,
        post_data:data.posted_date,
        post_url:"",
        trigger_words: data.trigger_words
      };
  }

  render(){
    var data = this.props.data;
   return (
     <Card style={{'width':'250px'}}>
      <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} style={{'width':'250px'}}/>
      <Card.Content>
        <Card.Header>{this.state.name}</Card.Header>
        <Card.Meta>
          <span className='date'>{this.state.posted_date}</span>
        </Card.Meta>
        <Card.Description>
          "Trigger words:"  {this.state.trigger_words}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
    )
  }
}

export default Cards
