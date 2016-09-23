import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {firebaseApp} from './authentication';
import styles from '../../styles';

module.exports = React.createClass({
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Choose Name</Text>
      </View>
    )
  }
})
