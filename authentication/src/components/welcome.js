var React = require('react');

var {
  View,
  Text,
  StyleSheet,
} = require('react-native');

var Button = require('../common/button')

module.exports = React.createClass({
  getInitialState: function(){
    return {

    }
  },

  render: function(){
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Welcome New Users! {'\n'}
        </Text>
        <Button text={'Logout'} onPress={this.onPress}>Logout</Button>
      </View>
    );
  },
  onPress: function(){
    console.log('logging out ....');
    this.props.navigator.immediatelyResetRouteStack([{name:'signup'}]);
  }
}); //End createClass

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    padding: 4,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    width: 200,
    alignSelf: 'center'
  },
  label: {
    fontSize: 18
  }
});
