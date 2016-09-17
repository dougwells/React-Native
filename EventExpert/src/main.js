import React, {Component} from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native';

import API_KEY from '../secrets/api'
const ROOT_URL = 'https://www.eventbriteapi.com/v3/events/search/';
const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});

module.exports = React.createClass({
  getInitialState(){
    return{
      dataSource: ds.cloneWithRows([
        {
          name: {text: 'Event 1'},
          url: 'www.google.com'
        }
      ])
    }
  },

  componentDidMount(){
    this.searchEvents('hackathon', 'New York City');
  },

  searchEvents(category, city){
    const FETCH_URL = `${ROOT_URL}?q=${category}&location.address=${city}/`;
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
  renderRow(rowData) {
    return (
      <View>
        <Text>{rowData.name.text}</Text>
        <Text>{rowData.url}</Text>
      </View>
    )
  },

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Event Expert</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData)=>this.renderRow(rowData)}
          style={styles.list}
          />
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
  title: {
    flex:1,
    marginTop: 40,
    color: 'red'
  },
  list: {
    flex:1
  }
})
