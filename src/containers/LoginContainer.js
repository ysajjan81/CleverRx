import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Layout } from 'antd';
import LoginForm from '../components/LoginForm';
import * as actions from '../actions';

import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import auth from '../helpers/firebase';
const { Content } = Layout;

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC08O5gdf0deIHAa8am6z9E4gWVZ-WVwiY",
    authDomain: "ethiopia-80361.firebaseapp.com"
  })

}



class LoginContainer extends Component {
  uiConfig = {
     signInFlow: "popup",
     signInOptions: [
       firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     ],
     callbacks: {
        signInSuccess: () => false
      }
  }
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    document.title = 'Ethiopia Dashboard | Login';
  }


  render() {
    return (
      <Content style={{ marginTop: '20vh' }}>
        <Row type="flex" justify="center">
        <StyledFirebaseAuth
             uiConfig={this.uiConfig}
             firebaseAuth={firebase.auth()}
        />
        </Row>
      </Content>


    );
  }
}

const mapStateToProps = state => ({
  store: state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
