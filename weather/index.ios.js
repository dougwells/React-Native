// //only use code below if created app w/ $ react-native init appName --version 0.24.0
// var React = require('react-native');
// var {Text, View, AppRegistry} = React;

//Import Required Code
var React = require('react');
var {Text, View, MapView, AppRegistry, StyleSheet} = require('react-native')


var Weather = React.createClass({

  getInitialState: function(){
    return {
    }
  },

  render: function(){
    return <MapView style={styles.map}></MapView>
  }


}); //End Weather

var styles = StyleSheet.create({

  map: {
    flex: 1,  //Fill entire screen
  }

});

AppRegistry.registerComponent('weather', ()=>Weather);
