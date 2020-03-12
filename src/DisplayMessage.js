// import React from 'react'
import { Message } from 'semantic-ui-react'
import React, { Component } from 'react';
import data from './tempData.json';
class DisplayMessage extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 

            var content = '';
            if(this.props.title == 'Tweets'){
            for(let i = 0 ; i<data.tweets.length ; i++)
            {
                content +="  =>  " +  data.tweets[i]  + "\n";
                // content += "\n ********************************************** \n";
                // document.write('\n');
            }
        }
        // else if(this.props.title == 'Memes' )
        // {
        //     for(let i = 0 ; i<data.memes.length ; i++)
        //     {
        //         content += data.memes[i];
        //         content += "\n**********************************************\n";
        //         document.write('\n');
        //     }
        // }
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
