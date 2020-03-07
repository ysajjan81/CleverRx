import React, { Component } from 'react';
import DisplayMessage from './DisplayMessage';
import TextContent from './TextContent';
// // import Mytable from './MyTable';
import TableExampleError from './TableExampleError';
import {Grid, Divider, Segment } from 'semantic-ui-react';
import HeaderBar from './HeaderBar';
import Experience from './Experience'
import App from './App';
import { Layout, Icon, Button } from 'antd';
import Topics from './Topics';
import FacebookAndTwitter from './FacebookAndTwitter';
import './assets/css/App.css';

// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { Route, Switch } from 'react-router-dom';
// import { Layout, Icon, Button } from 'antd';
// import LoginContainer from './containers/LoginContainer';
// import MainContainer from './containers/MainContainer';
// import auth from './helpers/firebase';
// import * as actions from './actions';
// import './assets/css/App.css';
// import artisImg from "./assets/img/artis.png"



const { Header, Footer, Content } = Layout;

class RenderComp extends Component {


    constructor(props) {
        super(props);
        this.state = { 
         }
    }

    render() {
        return ( 

            <div > 
                {/* <App/> */}
                <HeaderBar></HeaderBar>
                <Grid celled >
                    <Grid.Row>
                        <Grid.Column width={8}>
                            {/* <TableExampleError /> */}
                            <Topics/>
                                {/* <h3>Content</h3> */}
                                {/* <DisplayMessage title='Content'/> */}
                                {/* <h3>Experience</h3> */}
                                {/* <FacebookAndTwitter/> */}
                                {/* <TextContent rows='6'/> */}
                                {/* <Experience /> */}
                        </Grid.Column>
                        <Grid.Column width={8}>
                        {/* <TextContent rows='9' cols='10'/>
                        <TextContent rows='10' cols='10'/>
                        <TextContent rows='9' cols='10'/> */}
                        <FacebookAndTwitter/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <h3>Tweets</h3>
                <DisplayMessage title='Tweets'/>
                <h3>Memes</h3>
                <DisplayMessage title='Memes'/>
                <h3>Gifs</h3>
                <DisplayMessage title='Gifs'/>
            </div>

         );
    }
}
 
export default RenderComp;