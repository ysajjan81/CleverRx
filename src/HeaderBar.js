import React, { Component } from 'react';
class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
     styleObj = {
        fontSize: '50px',
        color: 'orange',
        textAlign: "center",
        backgroundColor: 'black'
    }
    render() { 
        return ( 
            <div>
                <h1 style={this.styleObj} >CleverRx</h1>
            </div>
         );
    }
}
 
export default HeaderBar;
