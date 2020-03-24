// import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'

import React, { Component } from 'react';
class TextContent extends Component {
    constructor(props) {
        super(props);
        this.state = {

         }
    }
    render() {
        return (
            <Form>
                <TextArea disabled rows={this.props.rows} cols={this.props.cols} placeholder="Data will be desplayed here "/>
            </Form>
          );
    }
}

export default TextContent;
