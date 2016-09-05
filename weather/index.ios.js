// //only use code below if created app w/ $ react-native init appName --version 0.24.0
// var React = require('react-native');
// var {Text, View, AppRegistry} = React;

//Import Required Code
var React = require('react');
var {Text, View, MapView, AppRegistry, StyleSheet} = require('react-native')

var Api = require('./src/api');

var Weather = React.createClass({


  getInitialState: function(){
    return {
      pin: {latitude: 40.6461, longitude: -111.4980},
      city: '',
      temperature: '',
      description: ''
    }
  },

  render: function(){

    return <View style = {styles.container}>
      <MapView
        annotations = {[this.state.pin]}
        onRegionChangeComplete = {this.onRegionChangeComplete}
        style={styles.map}
        ></MapView>
      <View style={styles.textWrapper}>
        <Text style={styles.text}>{this.state.city}</Text>
        <Text style={styles.text}>{this.state.temperature}</Text>
        <Text style={styles.text}>{this.state.description}</Text>
      </View>
    </View>
  },
  onRegionChangeComplete: function(region){
    this.setState({
      pin: {
        latitude: region.latitude,
        longitude: region.longitude
      }
    });
      Api(region.latitude, region.longitude)
      .then((data)=>{       //use fat arrow fn to pass thru "this" (the component)
        this.setState(data);
      });
  },



}); //End Weather

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 2,  //Fill two-thirds of screen
    marginTop: 30
  },
  textWrapper: {
    flex: 1,  //Fill one-third of screen
    alignItems: 'center'
  },
  text: {
    fontSize: 30
  }
});

AppRegistry.registerComponent('weather', ()=>Weather);
