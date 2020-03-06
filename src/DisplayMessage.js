// import React from 'react'
import { Message } from 'semantic-ui-react'
import React, { Component } from 'react';

class DisplayMessage extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return (
            <div>
            <Message>
            <Message.Header>{this.props.title}</Message.Header>
            <p>
            We updated our privacy policy here to better service our customers. We
             recommend reviewing the changes.
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
