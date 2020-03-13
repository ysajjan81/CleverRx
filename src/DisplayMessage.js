// import React from 'react'
import { Message } from 'semantic-ui-react'
import React, { Component } from 'react';
// import data from './tempData.json';
class DisplayMessage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [],
            // data = this.props.data,
         }
    }
    render() { 
            // this.setState({data: this.props.data});
            var content = '';
            if(this.state.data != ''){

        //     if(this.props.title == 'Tweets'){
        //     for(let i = 0 ; i<this.state.data.tweets.length ; i++)
        //     {
        //         content +="  =>  " +  this.state.data.tweets[i]  + "\n";
        //         // content += "\n ********************************************** \n";
        //         // document.write('\n');
        //     }
        // }
            // if(this.props.title == 'Gifs' )
            // {
            //     // for(let i = 0 ; i<this.state.data.gifs.length ; i++)
            //     // {
            //     //     content += this.state.data.gifs[i];
            //     // }
            //     if(this.state.data && this.state.data.length > 0){ 
            //     this.state.data.map((img, index) => (
            //       <img src={img.url} /> // include it as src
            //     ))}
            // }
    }
        return (
            <div className="center-col">
            <Message>
            {/* <Message.Header>{this.props.title}</Message.Header> */}
            <p>
            {/* We updated our privacy policy here to better service our customers. We
             recommend reviewing the changes. */}
             {content}
            {/* {
                data.tweets.map(str => str)
            } */}
            </p>
            </Message>
            </div>
         );
    }
}
 
export default DisplayMessage;
// const MessageExampleMessage = () => (
//   <Message>
//     <Message.Header>Content</Message.Header>
//     <p>
//       We updated our privacy policy here to better service our customers. We
//       recommend reviewing the changes.
//   
{/* <div>

</div> // </p> */}
//   </Message>
// )

// export default MessageExampleMessage
