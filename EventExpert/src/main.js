import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import API_KEY from '../secrets/api'

const ROOT_URL = 'https://www.eventbriteapi.com/v3/events/search/';

module.exports = React.createClass({
  componentDidMount(){
    this.searchEvents('hackathon', 'San Francisco');
  },

  searchEvents(category, city){
    const FETCH_URL = ROOT_URL + '?q=' + category + '&venue.city=' + city;
    fetch(FETCH_URL, {
      method: 'GET',
      headers: {
        'Authorization': API_KEY
      }
    })
    .then((response)=> response.json())
    .then((responseJSON)=>{
      console.log('responseJSON', responseJSON);
    });
  },

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.content}>Welcome to Event Expert</Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    color: 'red'
  }
})
