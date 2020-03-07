import React, { Component } from 'react';
import { Layout, Icon, Button } from 'antd';


const { Header, Footer, Content } = Layout;

class HeaderBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    //  styleObj = {
    //     fontSize: '50px',
    //     color: 'orange',
    //     textAlign: "center",
    //     backgroundColor: 'black'
    // }
    render() { 
        return ( 
            <div>
                {/* <h1 style={this.styleObj} >CleverRx</h1> */}
                {/* <h1 style={{color:'white'}}>CleverRx</h1> */}
        <Layout >
            
        <Header
          style={{
            width: '100%',
            height:"8vh",
            // backgroundColor:"#000000",
            color: 'white',
            textAlign: 'center',
            backgroundImage: './assets/img/cleverRxImage.png'
          }}
        ><h1><b>CleverRx</b></h1></Header>
       </Layout>
        </div>
         );
    }
}
 
export default HeaderBar;
