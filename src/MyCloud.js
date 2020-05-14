import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import CloudItem from "./CloudItem";
import './assets/css/App.css'

const styles = {
  large: {
    fontSize: 60,
    fontWeight: "bold"
        },
  small:
  {
    opacity: 0.7,
    fontSize: 16
  }
};

class MyCloud extends Component {

  constructor(props){
    super(props)
    this.state={
      li: [],
      selectedWords: [],
    }
    this.handleCloudWordClick = this.handleCloudWordClick.bind(this);
  }

  handleCloudWordClick(event, word){
      var selectedWords = this.state.selectedWords;
      selectedWords.push(word);
      this.setState({ selectedWords})
  }

  componentDidUpdate(prevProps){
     if(this.props != prevProps){
      let temp = []
      if(Object.keys(this.props.data).length != 0){

        var total_size = 1;
        var size = 0
        var count = 0
        for (var i in this.props.data){
          total_size+=this.props.data[i][0]
          count+=1
        }

        for (let i in this.props.data){
          /*scaled four times, with the upper bound of 45 and lower bound of 5*/
          size = Math.ceil((this.props.data[i][0]/total_size)*(100) * 4);
          if(size > 40)
            size = 40
          else if(size < 5)
            size = 5
          if(this.props.data[i][1] == '-')
            temp.push(<div style={{fontSize: size, color:"red", cursor:"pointer"}} onClick={(event)=>this.handleCloudWordClick(event,i)}>{i}</div>);
          else
            temp.push(<div style={{fontSize: size, color:"green", cursor:"pointer"}} onClick={(event)=>this.handleCloudWordClick(event,i)}>{i}</div>);
        }
        this.setState({li:temp});
      }
      else{
        this.setState({li:[]});
      }
    }
  }
  render() {
    return (
      <div>
      {
        this.state.li.length == 0 ?
        (<div></div>) :
        (
        <div className="word-cloud">
        <div className="app-outer">
          <div className="app-inner">
            <TagCloud
              className="tag-cloud"
              style={{
                fontFamily: "sans-serif",
                padding: 2,
                backgroundColor:"white",
                whitespace:"no-wrap off"
              }}
            >
            {this.state.li}
            </TagCloud>
          </div>
        </div>
        </div>
      )
    }
    </div>
  )}
}

export default MyCloud;
