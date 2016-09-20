import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import styles from '../../styles';

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
          onChangeText={(text)=>{this.setState({password: text})}}
        />
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.button}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.link}>Forget Password?  </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={styles.link}
            onPress={()=>this.props.navigator.push({name:'signUp'})}
          >
          Sign Up</Text>
        </TouchableOpacity>
      </View>

      </View>

    );
  }
});
