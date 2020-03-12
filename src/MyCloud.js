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
  small: {
    opacity: 0.7,
    fontSize: 16
  }
};

class MyCloud extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 3000);
  }

  render() {
    return (
    <div className="word-cloud">
      <div className="app-outer">
        <div className="app-inner">
          {/* <h1>react-tag-cloud demo</h1> */}
          <TagCloud
            className="tag-cloud"
            // rotate={() => Math.round(Math.random()) * 90}
            style={{
              fontFamily: "sans-serif",
            //   fontSize: () => Math.round(Math.random() * 50) + 16,
              fontSize: 30,
              color: () =>
                randomColor({
                  hue: "blue"
                }),
              padding: 5
            }}
          >
            <div
              style={{
                fontFamily: "serif",
                fontSize: 40,
                fontStyle: "italic",
                fontWeight: "bold",
                color: randomColor()
              }}
            >
              Futurama
            </div>
            <CloudItem text="Custom item, Hover me!" /> 
            <CloudItem text="Custom item 2, Hover me!" />
            <div style={styles.large}>Transformers</div>
            <div style={styles.large}>Simpsons</div>
            <div style={styles.large}>Dragon Ball</div>
            <div style={styles.large}>Rick & Morty</div>
            <div style={{ fontFamily: "courier" }}>He man</div>
            <div style={{ fontSize: 30 }}>World trigger</div>
            <div style={{ fontStyle: "italic" }}>Avengers</div>
            <div style={{ fontWeight: 200 }}>Family Guy</div>
            <div style={{ color: "green" }}>American Dad</div>
            <div className="tag-item-wrapper">
              <div>Hover Me Please!</div>
              <div className="tag-item-tooltip">HOVERED!</div>
            </div>
            <div>Gobots</div>
            <div>Thundercats</div>
            <div>M.A.S.K.</div>
            <div>GI Joe</div>
            <div>Inspector Gadget</div>
            <div>Bugs Bunny</div>
            <div>Tom & Jerry</div>
            <div>Cowboy Bebop</div>
            <div>Evangelion</div>
            <div>Bleach</div>
            <div>GITS</div>
            <div>Pokemon</div>
            <div>She Ra</div>
            <div>Fullmetal Alchemist</div>
            <div>Gundam</div>
            <div>Uni Taisen</div>
            <div>Pinky and the Brain</div>
            <div>Bobs Burgers</div>
            <div style={styles.small}>Dino Riders</div>
            <div style={styles.small}>Silverhawks</div>
            <div style={styles.small}>Bravestar</div>
            <div style={styles.small}>Starcom</div>
            <div style={styles.small}>Cops</div>
            <div style={styles.small}>Alfred J. Kwak</div>
            <div style={styles.small}>Dr Snuggles</div>
          </TagCloud>
        </div>
      </div>
      </div>
    );
  }
}

export default MyCloud;


// import React, { Component } from 'react';
// import TagCloud from 'react-tag-cloud';
// import randomColor from 'randomcolor';
// import { Container } from 'semantic-ui-react';

// export default class MyCloud extends Component {
//   render() {
//     return (
//     <div className="word-cloud">
//       <TagCloud 
//         style={{
//           fontFamily: 'sans-serif',
//           fontSize: 30,
//           fontWeight: 'bold',
//           fontStyle: 'italic',
//           color: () => randomColor(),
//           padding: 5,
//           width: '100%',
//           height: '100%'
//         }}>
//         {/* <div style={{fontSize: 50}}>react</div>
//         <div style={{color: 'green'}}>tag</div> */}
//         <div rotate={90}>cloud</div>
//             <div>
//               Futurama
//             </div>
//             {/* <CloudItem text="Custom item, Hover me!" />
//             <CloudItem text="Custom item 2, Hover me!" /> */}
//             <div >Transformers</div>
//             <div >Simpsons</div>
//             <div >Dragon Ball</div>
//             <div >Rick & Morty</div>
//             <div >He man</div>
//             <div>World trigger</div>
//             <div >Avengers</div>
//             <div style={{ fontWeight: 200 }}>Family Guy</div>
//             <div style={{ color: "green" }}>American Dad</div>
//             <div className="tag-item-wrapper">
//               <div>Hover Me Please!</div>
//               <div className="tag-item-tooltip">HOVERED!</div>
//             </div>
//             <div>Gobots</div>
//             <div>Thundercats</div>
//             <div>M.A.S.K.</div>
//             <div>GI Joe</div>
//             <div>Inspector Gadget</div>
//             <div>Bugs Bunny</div>
//             <div>Tom & Jerry</div>
//             <div>Cowboy Bebop</div>
//             <div>Evangelion</div>
//             <div>Bleach</div>
//             <div>GITS</div>
//             <div>Pokemon</div>
//             <div>She Ra</div>
//             <div>Fullmetal Alchemist</div>
//             <div>Gundam</div>
//             <div>Uni Taisen</div>
//             <div>Pinky and the Brain</div>
//             <div>Bobs Burgers</div>
//             <div >Dino Riders</div>
//             <div >Silverhawks</div>
//             <div >Bravestar</div>
//             <div >Starcom</div>
//             <div >Cops</div>
//             <div >Alfred J. Kwak</div>
//             <div >Dr Snuggles</div>
//       </TagCloud>
//       </div>

//     );
//   }
// }



