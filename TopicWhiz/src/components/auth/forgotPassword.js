import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from '../../styles';
import {firebaseApp} from './authentication';

module.exports = React.createClass({
  getInitialState(){
    return {
      email:'',
      result: '',
    }
  },
  changePassword(){
    firebaseApp.auth().sendPasswordResetEmail(this.state.email)
      .then(
        (success)=>{
          this.setState({email:'', result:'Password reset email sent'})
        },
        (err)=>{
          this.setState({result: err.message});
          console.log("Error:", err);
        }
      );

  },

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.feedack}>{this.state.result}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter email address"
          value={this.state.email}
          onChangeText={(text)=>this.setState({email:text, result:''})}
        >
        </TextInput>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={()=>this.changePassword()}
        >
          <Text style={styles.button}>Send Reset Email</Text>
        </TouchableOpacity>
      <View style={styles.linkContainer}>
        <TouchableOpacity
          onPress={()=>this.props.navigator.pop()}
        >
          <Text style={styles.link}>Go Back</Text>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
});
