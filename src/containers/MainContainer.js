import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Layout, Col, Card,  Menu, Breadcrumb, Carousel } from 'antd';
import { css } from '@emotion/core';
import * as actions from '../actions';
import {Line, HorizontalBar, Bar} from 'react-chartjs-2';
import { ClipLoader, PulseLoader } from 'react-spinners';
import { FacebookProvider, EmbeddedPost, EmbeddedVideo, Profile, Page, Feed } from 'react-facebook';

import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import comp from '../assets/img/computer.jpg';

import Slider from "react-slick";
import randomColor from 'randomcolor';
import $ from 'jquery';
import { Timeline, Tweet} from 'react-twitter-widgets';
import {ToastContainer, toast} from 'react-toastify'

import twitter_card from '../components/twitter_card'
import { Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SimpleTable from '../components/table'


import DetailsForm from '../components/Form.js';
import { Header } from 'semantic-ui-react'





class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    document.title = 'Ethiopia | App';

    this.state = {allData : null};
  };

  filterList(){
    console.log("Search")
  }

  render() {
    var that = this;


    return (
      <div style={{'textAlign': 'center', 'marginLeft':'50px', 'marginRight':'50px'}}>
        <Col>
          <DetailsForm />
        </Col>
      </div>
    );
  }
}

MainContainer.propTypes = {
  store: PropTypes.shape({
    ui: PropTypes.object.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
