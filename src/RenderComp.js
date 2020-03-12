import React, { Component } from 'react';
import DisplayMessage from './DisplayMessage';
import TextContent from './TextContent';
// // import Mytable from './MyTable';
import TableExampleError from './TableExampleError';
import {Grid, Divider, Segment, GridColumn } from 'semantic-ui-react';
import HeaderBar from './HeaderBar';
import Experience from './Experience'
import App from './App';
import { Layout, Icon, Button } from 'antd';
import Topics from './Topics';
import FacebookAndTwitter from './FacebookAndTwitter';
import './assets/css/App.css';
import MyCloud from './MyCloud';
import CardTable from './CardTable';
import SimpleTable from './components/table';
import tweets from './tweets'
// import tableJson from './topicData.json';
const { Header, Footer, Content } = Layout;

class RenderComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            myTopic:'',
            allInformation:[],
         }
         this.changejsonData = this.changejsonData.bind(this);
    }

    changejsonData(item){
        this.setState({allInformation: item});
    }

    render() {
        return (
            <div>
                <HeaderBar></HeaderBar>
                <Grid celled columns={2} divided inverted>
                    <Grid.Row stretched>
                        <Grid.Column width={8}>
                            <Segment><Topics jsonsajData={{allInformation:this.state.allInformation, changejsonData:this.changejsonData.bind(this)}}/></Segment>
                            <Segment><MyCloud/></Segment>
                        </Grid.Column>
                        <Grid.Column width={8} >
                            <Segment><FacebookAndTwitter /></Segment>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>

                    <Grid.Column width={8}>
                    <h2>Card/Customer</h2>
                        <Segment>
                            <h3>Card</h3><Segment><MyCloud/></Segment>
                            <h3>Disease</h3><Segment><MyCloud/></Segment>
                            <h3>Medication</h3><Segment><MyCloud/></Segment>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={8}>
                      <Segment>
                        <h3>Customer</h3><Segment><MyCloud/></Segment>
                        <h3>Health</h3><Segment><MyCloud/></Segment>
                        <h3>Inhaler</h3><Segment><MyCloud/></Segment>
                      </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>

                <Grid.Column width={8}>
                <h2>Insurance/Patient</h2>
                    <Segment>
                        <h3>Insurance</h3><Segment><MyCloud/></Segment>
                        <h3>Patient</h3><Segment><MyCloud/></Segment>
                        <h3>Medication</h3><Segment><MyCloud/></Segment>
                    </Segment>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Segment>
                    <h3>Customer</h3><Segment><MyCloud/></Segment>
                    <h3>Health</h3><Segment><MyCloud/></Segment>
                    <h3>Inhaler</h3><Segment><MyCloud/></Segment>
                  </Segment>
                </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment>
                            <h3>Tweets</h3>
                            {/* <DisplayMessage title='Tweets'/> */}
                            <tweets />
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment>
                        <h3>Links</h3>
                        <DisplayMessage title='Memes'/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={16}>
                        <Segment>
                            <h3>Gifs</h3>
                            <DisplayMessage title='Gifs'/>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

                </Grid>
            </div>

         );
    }
}

export default RenderComp;
