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
      data: this.props.data,
    }
  }

  render() {

    let li = [];
    if(this.props.data != null){
      for(var i = 0; i<this.props.data.length; i++){
        li.push(<div style={styles.medium}>{this.props.data[i]}</div>);
      }
    }
    return (
    <div className="word-cloud">
      <div className="app-outer">
        <div className="app-inner">
          <TagCloud
            className="tag-cloud"
            style={{
              fontFamily: "sans-serif",
              fontSize: 30,
              color: () =>
                randomColor({
                  hue: "blue"
                }),
              padding: 5
            }}
          >
          {li}
          </TagCloud>
        </div>
      </div>
      </div>
    );
  }
}

export default MyCloud;
