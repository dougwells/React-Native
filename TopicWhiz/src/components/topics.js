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
      name: "Doug"
    });
  },

  componentDidMount(){
    let user = firebaseApp.auth().currentUser;
    if(!user.displayName){
      this.chooseName();
    } else{
      this.setState({name: user.displayName})
    }
  },

  signOut(){
    console.log("signOut invoked");
    firebaseApp.auth().signOut()
      .then(
        (success)=>{ this.props.navigator.popToTop(); },
        (error)=>{ console.log("Error in signout", error);}
    );
  },

  chooseName(){
    this.props.navigator.push({name:'chooseName'})
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
              Sign in page
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={styles.link}
              onPress={()=>{this.chooseName()}}
            >
              Change name
            </Text>
          </TouchableOpacity>
          <Text style={styles.title}>
            {this.state.name}
          </Text>
        </View>

        <View style={styles.body}>

        </View>

      </View>
    )

  }
})
