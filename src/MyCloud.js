import React, { Component } from "react";
import WordCloud from "./WordCloud";
import './assets/css/App.css'

/*Dull Yellow Color*/
const selectedColor = "#cbcb11";

class MyCloud extends Component {

  constructor(props){
    super(props)
    this.state={
      selectedWords: [],
      data:[]
    }
    this.handleCloudWordClick = this.handleCloudWordClick.bind(this);
  }

  
  handleCloudWordClick(event){
    var selectedWords = this.state.selectedWords;
    var data = this.state.data;
    var index = selectedWords.indexOf(event.value)

    if(index>=0) { /*Unselecting the word*/
      selectedWords.splice(index,1);
      data = data.map((item) =>{
        if(item.key == event.key){
          item.color = event.originalColor;
          return item;
        }
        return item;
      })
    }else{ /*Selecting the word*/
      selectedWords.push(event.value);
      data = data.map((item) =>{
        if(item.key == event.key){
          item.color = selectedColor;
          return item;
        }
        return item;
      })
    }

    this.setState({selectedWords, data});
  }

  componentDidUpdate(prevProps){
     if(this.props != prevProps){
      if(Object.keys(this.props.data).length >= 0){
        var total_size = 1;
        var size = 0
        for (var i in this.props.data){
          total_size+=this.props.data[i][0]
        }

        let wordData=[]
        let index=0;
        for (let i in this.props.data){
          /*scaled four times, with the upper bound of 80 and lower bound of 8*/
          size = Math.ceil((this.props.data[i][0]/total_size)*(100) * 4);
          if(size > 80)
            size = 80
          else if(size < 8)
            size = 8

          let temp = {}
          temp.value = i;
          temp.count = size;
          temp.color = this.props.data[i][1] == '-' ? 'red': 'green';
          temp.originalColor = temp.color
          temp.key = index;
          wordData.push(temp);

          index = index + 1;
        }
        
        this.setState({data:wordData})
      }
      else{
        this.setState({data:[]});
      }
    }
  }

  render() {
    return (
      this.state.data.length != 0 ? <WordCloud data={this.state.data} handleClick={this.handleCloudWordClick}/> : null
  )}
}

export default MyCloud;
