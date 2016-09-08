var React = require('react');
var {
  View,
  Text,
  StyleSheet,
  TextInput
} = require('react-native');

var Button = require('../common/button')

module.exports = React.createClass({
  getInitialState: function(){
    return {
      username:'',
      password: ''
    }
  },

  render: function(){
    return(
      <View style={styles.container}>
        <Text>Sign-in Below:</Text>

        <Text
        style={styles.label}>Username:</Text>
        <TextInput
        style={styles.input}
        onChangeText = {(text)=>this.setState({username: text})}
        value = {this.state.username}
        ></TextInput>

        <Text style={styles.label}>Password:</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText = {(pw)=>this.setState({password: pw})}
        value = {this.state.password}
        >
        </TextInput>
        <Button text={"Sign In"} onPress={this.onPress}></Button>
        <Button text={"I need an account"} onPress={this.onSignupPress}></Button>
      </View>
    );
  },
  onSignupPress: function(){
    //navigate to signUp
    // ideal: --> navigator.push() but need ref to navigator
    // (we can pass via props in main.js when render Component)
    this.props.navigator.push({name: 'signup'});
  },
  onPress: function(){
    this.props.navigator.push({name: 'welcome'})
    //sign the user in
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
