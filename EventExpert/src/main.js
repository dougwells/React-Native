import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
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
    this.searchEvents('hackathon', 'San Francisco');
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
      this.setState({dataSource: ds.cloneWithRows(responseJSON.events)})
      console.log('responseJSON', responseJSON);
    });
  },
  renderRow(rowData) {
    const defaultImg = 'https://cdn.vectorstock.com/i/composite/31,80/question-mark-vector-543180.jpg';
    let img = rowData.logo ? rowData.logo.url : defaultImg;
    console.log(img);
    return (
      <View style={styles.row}>
        <Image
          style={styles.rowLogo}
          source={{uri: img}}
        />
        <View style={styles.rowDetails}>
          <Text>
            {
              rowData.name.text.length > 30 ?
              rowData.name.text.substring(0,30) + '...':
              rowData.name.text
            }
          </Text>
          <Text>More Details</Text>
        </View>
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
          enableEmptySections={true}
          style={styles.list}
          />
      </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  title: {
    flex:1,
    marginTop: 40,
    textAlign: 'center',
    color: 'red'
  },
  list: {
    flex:8
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 5
  },
  rowDetails: {
    flex:5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowLogo: {
    flex: 1,
    height: 50,
    width: 50,
    borderColor: '#000',
    borderWidth: 1
  }
})
