import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';

module.exports = React.createClass({
  signOut(){
    console.log("signOut invoked");
    this.props.navigator.pop()
  },

  render(){
    return (
      <View style={styles.container}>
        <Text>Topics Page</Text>
        <TouchableOpacity>
          <Text
            style={styles.link}
            onPress={this.signOut}
          >
            Return to signIn Page
          </Text>
        </TouchableOpacity>
      </View>
    )

  }
})
