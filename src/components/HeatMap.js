import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

/* global google */
class HeatMap extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11,
    heatmapData :{
      positions: [
        {lat: 55.5, lng: 34.56},
        {lat: 34.7, lng: 28.4},
        {lat: 31.7, lng: 26.4},
        {lat: 32.4, lng: 28.2},
        {lat: 34.7, lng: 30.4}
      ],
      options: {
        radius: 20,
        opacity: 1,
      }
    }
  };


  render() {
    return (

      <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        ref={(el) => this._googleMap = el}
        bootstrapURLKeys= {{key: "AIzaSyCzkDDIEdt6Aei-7iJ9EE0djkOLZJ8uUz4", language:'en'}}
        defaultCenter = {this.props.center}
        defaultZoom={this.props.zoom}
        heatmapLibrary={true}
        heatmap={{  positions: this.props.data,
          options: {
            radius: 20,
            opacity: 1,
            gradient : [
              "rgba(0, 255, 255, 0)",
              "rgba(0, 255, 255, 1)",
              "rgba(0, 191, 255, 1)",
              "rgba(0, 127, 255, 1)",
              "rgba(0, 63, 255, 1)",
              "rgba(0, 0, 255, 1)",
              "rgba(0, 0, 223, 1)",
              "rgba(0, 0, 191, 1)",
              "rgba(0, 0, 159, 1)",
              "rgba(0, 0, 127, 1)",
              "rgba(63, 0, 91, 1)",
              "rgba(127, 0, 63, 1)",
              "rgba(191, 0, 31, 1)",
              "rgba(255, 0, 0, 1)"
            ]
          }
        }}

      />
      </div>
    );
  }
}

export default HeatMap;
