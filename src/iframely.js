import React from "react";
import ReactDOM from "react-dom";

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

function IframeApp(props) {
  //console.log('iframe', props.data);
  return (
    <div className="App">
      <h1>I frame Demo</h1>
      <Iframe iframe={props.data} allow="autoplay" />
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<IframeApp />, rootElement);

export default IframeApp;
