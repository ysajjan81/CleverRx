import React from 'react'
import { TagCloud } from 'react-tagcloud'

class WordCloud extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return(
      <TagCloud
        minSize={8}
        maxSize={80}
        tags={this.props.data}
        disableRandomColor={true}
        className="myTagCloud"
        onClick={ tag => this.props.handleClick(tag)}
    />
    );
  }
}

export default WordCloud;