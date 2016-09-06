var React = require('react');
var {
  View,
  Text,
  StyleSheet,
  TextInput
} = require('react-native');

module.exports = React.createClass({
  render: function(){
    return(
      <View style={styles.container}>
        <Text>Sign-in Below:</Text>
        <Text style={styles.label}>Username:</Text>
        <TextInput style={styles.input}></TextInput>
        <Text style={styles.label}>Password:</Text>
        <TextInput secureTextEntry={true} style={styles.input}></TextInput>

      </View>
    );
  }
});

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
})
