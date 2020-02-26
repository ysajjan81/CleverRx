import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch } from 'react-router-dom';
import { Layout, Icon, Button } from 'antd';
import LoginContainer from './containers/LoginContainer';
import MainContainer from './containers/MainContainer';
import auth from './helpers/firebase';
import * as actions from './actions';
import './assets/css/App.css';
import artisImg from "./assets/img/artis.png"


const { Header, Footer, Content } = Layout;
const loadingIcon = <Icon type="loading" style={{ fontSize: 34 }} spin />;

class App extends Component {
  constructor(props) {
    super(props);
    auth.onAuthStateChanged(props.actions.loginStateChange);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.store.user.empty === true
      || nextProps.store.user.isAuthenticated !== this.props.store.user.isAuthenticated) {
      this.props.history.push(`${global.BASE_PATH}/${auth.currentUser !== null ? 'main' : 'login'}`);
    }
  }

  render() {
    return (
      <Layout >
        <Header
          style={{
            width: '100%',
            height:"8vh",
            backgroundColor:"#000000"
          }}
        >

        <a   href="https://artislookingglass.com/" target="_blank"><img style={{'marginTop':'1vh'}} alt="Artic Looking Glass" src={artisImg}  height="50"></img></a>
          {
            auth.currentUser !== null && (
              <div style={{ float: 'right' }}>
                <Button type="danger" icon="logout" shape="circle" size="small" onClick={this.props.actions.logout} />
              </div>
            )
          }
        </Header>
        <div style={{ marginTop: '30px', marginBottom: '35px',height:'100%' }}>
         { this.props.store.user.empty === true ? (
           <div style={{ textAlign: 'center', marginTop: '20vh' }}>
             { loadingIcon }
           </div>
         ) : (
           <Switch>
             <Route exact path={`${global.BASE_PATH}/login`} component={LoginContainer} />
             <Route exact path={`${global.BASE_PATH}/main`} component={MainContainer} />
           </Switch>
         )}
       </div>
       </Layout>

    );
  }
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    logout: PropTypes.func.isRequired,
    loginStateChange: PropTypes.func.isRequired,
  }).isRequired,
  store: PropTypes.shape({
    data: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  store: state,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
