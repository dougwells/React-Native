// //only use code below if created app w/ $ react-native init appName --version 0.24.0
// var React = require('react-native');
// var {Text, View, AppRegistry} = React;

//Import Required Code
var React = require('react');
var {Text, View, MapView, AppRegistry, StyleSheet} = require('react-native')


var Weather = React.createClass({


  getInitialState: function(){
    return {
      pin: {latitude: 40.6461, longitude: -111.4980}
    }
  },

  render: function(){

    return <MapView
      annotations = {[this.state.pin]}
      onRegionChangeComplete = {this.onRegionChangeComplete}
      style={styles.map}
      ></MapView>
  },
  onRegionChangeComplete: function(region){
    console.log(region);
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });
  },



}); //End Weather

var styles = StyleSheet.create({

  map: {
    flex: 1,  //Fill entire screen
  }

});

AppRegistry.registerComponent('weather', ()=>Weather);
