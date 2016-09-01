// //only use code below if created app w/ $ react-native init appName --version 0.24.0
// var React = require('react-native');
// var {Text, View, AppRegistry} = React;

//Import Required Code
var React = require('react');
var {Text, View, AppRegistry} = require('react-native')


var StopWatch = React.createClass({
  render: function(){
    return <View>
    <Text>
    Hello World!
    </Text>
    </View>
  }
});

AppRegistry.registerComponent('stopwatch', ()=>StopWatch);
