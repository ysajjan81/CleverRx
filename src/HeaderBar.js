import React, { Component } from 'react';
import { Layout, Icon, Button } from 'antd';


const { Header, Footer, Content } = Layout;

class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        return (
            <div>
                {/* <h1 style={this.styleObj} >CleverRx</h1> */}
                {/* <h1 style={{color:'white'}}>CleverRx</h1> */}
        <Layout >

        <Header
          style={{
            width: '100%',
            textAlign: 'center',
            backgroundColor:'black'
          }}
        ><h1 style={{color:"white", fontSize:50}}><b>CleverRx</b></h1></Header>
       </Layout>
        </div>
         );
    }
}

export default HeaderBar;
