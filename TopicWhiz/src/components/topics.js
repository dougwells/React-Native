import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {firebaseApp} from './auth/authentication';

import styles from '../styles';

module.exports = React.createClass({
  getInitialState(){
    return({
      displayName: "Doug"
    });
  },

  signOut(){
    console.log("signOut invoked");
    firebaseApp.auth().signOut()
      .then(
        (success)=>{ this.props.navigator.popToTop(); },
        (error)=>{ console.log("Error in signout", error);}
    );
  },

  render(){
    return (
      <View style={styles.topics}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Text
              style={styles.link}
              onPress={()=>{this.signOut()}}
            >
              Sign out & return to sign in page
            </Text>
          </TouchableOpacity>
          <Text style={styles.title}>
            {this.state.displayName}
          </Text>
        </View>
        <View style={styles.body}></View>

      </View>
    )

  }
})
