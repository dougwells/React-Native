var React = require('react');
var {View, Text, StyleSheet} = require('react-native');

var Signin = require('./components/signin');

module.exports = React.createClass({
  render: function(){
    return(
      <View style={styles.container}>
      <Signin></Signin>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
