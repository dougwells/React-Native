var React = require('react');

var {
  View,
  Text,
  TextInput,
  StyleSheet,
} = require('react-native');

var Button = require('../common/button')

module.exports = React.createClass({
  getInitialState: function(){
    return {
      username:'',
      password:'',
      passwordConfirmation: ''
    }
  },

  render: function(){
    return (
      <View style={styles.container}>
        <Text>New Users {'\n'}
        Sign in Below:</Text>

        <Text
        style={styles.label}>Username:</Text>
        <TextInput
        style={styles.input}
        onChangeText = {(text)=>this.setState({username: text})}
        value = {this.state.username}
        >
        </TextInput>

        <Text style={styles.label}>Password:</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText = {(pw)=>this.setState({password: pw})}
        value = {this.state.password}
        >
        </TextInput>
        <Text style={styles.label}>Password Confirmation:</Text>
        <TextInput
        secureTextEntry={true}
        style={styles.input}
        onChangeText = {(pwConfirm)=>this.setState({passwordConfirmation: pwConfirm})}
        value = {this.state.passwordConfirmation}
        >
        </TextInput>

        <Button text={"Join Now!"} onPress={this.onPress}></Button>
        <Button text={"Oops .. I have account"} onPress={this.onSignInPress}></Button>
      </View>

    );
  },

  onSignInPress: function(){
    this.props.navigator.pop();
  },

  onPress: function(){
    console.log('SignUp Initiated')
  }

})

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
