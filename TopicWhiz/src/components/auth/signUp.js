import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
  getInitialState(){
    return {
      email: '',
      password: ''
    }
  },

  render(){
    return(
      <View style={styles.container}>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text)=>this.setState({email: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text)=>this.setState({password: text})}
        />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>Sign Up</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text
            style={styles.link}
            onPress={()=>this.props.navigator.pop()}
          >
          Already a member? Sign in</Text>
        </TouchableOpacity>
      </View>

      </View>

    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#ffffff'
  },
  input: {
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    padding: 5
  },
  buttonContainer: {
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor:'#0000FF',
    marginTop: 5

  },
  button: {
    textAlign: 'center'
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  link: {
    color: '#0000FF',
  }
});
