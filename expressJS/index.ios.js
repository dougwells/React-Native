
var React = require('react');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} = require('react-native');

var ToDo = React.createClass({
  render: function(){
    return(
      <View>
        <Text>Hello World! ... again</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('expressJS', () => ToDo);
