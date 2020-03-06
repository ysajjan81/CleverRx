import React, { Component } from 'react';
import DisplayMessage from './DisplayMessage';
import TextContent from './TextContent';
// import Mytable from './MyTable';
import TableExampleError from './TableExampleError';
import {Grid, Divider, Segment } from 'semantic-ui-react';
import HeaderBar from './HeaderBar';
import Experience from './Experience'
import App from './App';
class RenderComp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
         }
    }
    render() {
        return ( 

            <div> 
                {/* <App/> */}
                <HeaderBar></HeaderBar>
                <Grid celled='internally'>
                    <Grid.Row>
                        <Grid.Column width={12}>
                            <TableExampleError />
                                <h3>Content</h3>
                                <DisplayMessage title='Content'/>
                                <h3>Experience</h3>
                                {/* <TextContent rows='6'/> */}
                                <Experience />
                        </Grid.Column>
                        <Grid.Column width={4}>
                        <TextContent rows='9' cols='10'/>
                        <TextContent rows='10' cols='10'/>
                        <TextContent rows='9' cols='10'/>
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