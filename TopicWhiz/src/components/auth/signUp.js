import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import {firebaseApp} from './authentication';

import styles from '../../styles';

module.exports = React.createClass({
  getInitialState(){
    return {
      email: '',
      password: '',
      confirmPassword: '',
      result:''
    }
  },

componentDidMount(){
      firebaseApp.auth().onAuthStateChanged(user=> {
            if(user){
              console.log('user', user)
              //navigate to main navigation page
            }
      })
  },

  signUp(){
    let {email, password, confirmPassword} = this.state;
    if(password === confirmPassword){
      firebaseApp.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.log('error: ', error.message);
        this.setState({result: error.message});
      });
    } else {
      this.setState({result: "Oops ... passwords do not match"})
    }
  },

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.feedback}>{this.state.result}</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text)=>this.setState({email: text})}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text)=>this.setState({password: text})}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          onChangeText={(text)=>this.setState({confirmPassword: text})}
          secureTextEntry={true}
        />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={()=>{this.signUp()}}
        >
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
