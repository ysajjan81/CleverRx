import React from "react";
import ReactDOM from "react-dom";


// const demos = {
//   soundcloud:
//     '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://apnews.com/22488ea2ab60cb3aa18f12fe9490cefc"></iframe>',
//
//   plotly:
//     '<iframe src="https://codesandbox.io/embed/q7jmjyplvq?fontsize=14" title="Plotly All Graph Types" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>'
// };

//codesandbox.io/s/react-iframe-demo-g3vst codePen =
function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

function IframeApp(props) {
  console.log('iframe', props.data);
  return (
    <div className="App">
      <h1>I frame Demo</h1>
      <Iframe iframe={props.data} allow="autoplay" />,
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<IframeApp />, rootElement);

export default IframeApp;
