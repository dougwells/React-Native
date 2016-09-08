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
      passwordConfirmation: '',
      errorMessage:''
    }
  },

  render: function(){
    return (
      <View style={styles.container}>
        <Text>New Users {'\n'}
        Sign in Below:
        {'\n'}
        </Text>

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
        <Text style={styles.label}>{this.state.errorMessage}</Text>

        <Button text={"Join Now!"} onPress={this.onPress}></Button>
        <Button text={"Oops .. I have account"} onPress={this.onSignupPress}></Button>
      </View>

    );
  },

  onSignupPress: function(){
    this.props.navigator.pop();
  },

  onPress: function(){
    if(this.state.password !== this.state.passwordConfirmation){
      return this.setState({errorMessage: "Passwords do not match"});
    }
    console.log('SignUp Initiated')
    this.props.navigator.immediatelyResetRouteStack([{name:'welcome'}]);
  },

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
