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
  getInitialState(){
    return({
        name: ''
    })
  },

  updateDisplayName(){
    let user = firebase.auth().currentUser.updateProfile({
      displayName: this.state.name
    }).then(()=>{
      this.props.navigator.push({name:'topics'});   // Update successful
    }, function(error) {
      console.log("Error in chooseName/updateDisplayName", error)
    });
  },

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Choose a display name</Text>
        <TextInput
          style={styles.input}
          placeholder='Example: Doug'
          onChangeText = {(text)=>this.setState({name: text})}
        >
        </TextInput>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={()=>this.updateDisplayName()}
        >
          <Text style={styles.button}>Confirm</Text>
        </TouchableOpacity>

      </View>
    )
  }
})
