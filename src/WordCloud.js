import React, { Component } from "react";
import randomColor from "randomcolor";
import TagCloud from "react-tag-cloud";
import CloudItem from "./CloudItem";
import './assets/css/App.css'
import MultipleSelect from './MultipleSelect';
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

class WordCloud extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      data: this.props.data,
    }
  }

  render() {
    let li = [];
    if(this.props.data != null){
      for(var i = 0; i<this.props.data.length; i++){
    li.push(<div style={{fontSize: this.props.data[i][1]*8}}>{this.props.data[i][0]}</div>);
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

export default WordCloud;








// import { TagCloud } from 'react-tagcloud'
// import React, { Component } from 'react';
// import MultipleSelect from './MultipleSelect';
 
// let mat = [
  // { value: 'JavaScript', count: 38 },
//   { value: 'React', count: 30 },
//   { value: 'Nodejs', count: 28 },
//   { value: 'Express.js', count: 25 },
//   { value: 'HTML5', count: 33 },
//   { value: 'MongoDB', count: 18 },
//   { value: 'CSS3', count: 20 },
//     { value: 'CSS3', count: 20 },
//     { value: 'CSS3', count: 20 },
//     { value: 'CSS3', count: 20 },
//     { value: 'CSS3', count: 20 },
// ]

// const data = []
// insertInSelected = (tag) =>
// {
//   alert("You selected " + tag.value);
//   <MultipleSelect data={tag} />
// }
// const WordCloud = (props) => {
//   mat = [];
//     console.log("insideWordCloud = ");
//     console.log(props.data);

//     for(let i = 0 ; i<props.data.length ; i++)
//     {
//         mat.push({value: props.data[i][0], count: props.data[i][1]});
//     }
//     // data = props.data;
//     console.log("Data value = ");
//     console.log(mat);
//     return (
//   <TagCloud
//     minSize={12}
//     maxSize={35}
//     tags={mat}
//     onClick= {insertInSelected(tag)}//{tag => alert(`'${tag.value}' was selected!`)}
//   />)
// }

// export default WordCloud;

// class WordCloud extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
      
//      }
//   }
//   // insertInSelected = (tag) =>
//   // {
//   //     alert("You selected " + tag);
//   //     <MultipleSelect data={tag} />
//   // }
//   render() { 
      
// let mat = [];
//     for(let i = 0 ; i<this.props.data.length ; i++)
//     {
//         mat.push({value: this.props.data[i][0], count: this.props.data[i][1]});
//     }
//     return ( 
//       <TagCloud
//     minSize={12}
//     maxSize={35}
//     tags={mat}
//     // onClick={alert(`'${tag.value}' was selected!`)}
//     />
//       );
//   }
// }
 
// export default WordCloud;



// class WordCloud 
// extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { 
//             topicData: this.props.data,
//          }
//     }
//     render() {
//         console.log("topicData =" );
//         console.log(this.state.topicData); 
//         // const { data } = this.state
//         return ( 
//             <TagCloud
//             minSize={12}
//             maxSize={35}
//             tags={data}
//             onClick={tag => alert(`'${tag.value}' was selected!`)}
//           />);
        
//     }
// }
 
// export default WordCloud;