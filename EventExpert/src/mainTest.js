import React, { Component } from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  ListView,
  Image,
  TouchableOpacity
} from 'react-native';


import API_KEY from '../secrets/api'
const ROOT_URL = 'https://www.eventbriteapi.com/v3/events/search/';
const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});

module.exports = React.createClass({
  getInitialState() {
    return ({
      dataSource: ds.cloneWithRows([]),
      eventType: '',
      city: ''
    })
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
    const defaultImg = 'https://pixabay.com/static/uploads/photo/2014/08/21/19/43/question-423604__180.png';
    let img = rowData.logo != null ? rowData.logo.url : defaultImg;

    return (
      <View style={styles.row}>
        <Image
          style={styles.rowLogo}
          source={{uri: img}}
        />
        <View style={styles.rowDetails}>
          <Text>
            {rowData.name.text.length > 30 ?
              `${rowData.name.text.substring(0, 30)}...` :
              rowData.name.text
            }
          </Text>
            <Text style={styles.link}>
              more details
            </Text>
        </View>
      </View>
    )
  },

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Event Expert
        </Text>
        <ListView
          style={styles.list}
          dataSource={this.state.dataSource}
          enableEmptySections={true}
          renderRow={(rowData) => this.renderRow(rowData)}
        />
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 1,
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20
  },
  form: {
    flex: 4,
  },
  list: {
    flex: 10
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    padding: 5
  },
  rowDetails: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rowLogo: {
    flex: 1,
    width: 50,
    height: 50,
    borderColor: '#000',
    borderWidth: 1
  },
  input: {
    flex: 1,
    borderColor: '#000',
    borderRadius: 5,
    borderWidth: 1,
    margin: 5,
    textAlign: 'center'
  },
  buttonContainer: {
    flex: 1,
    padding: 5
  },
  button: {
    flex: 1,
    borderColor: '#0000FF',
    borderRadius: 5,
    borderWidth: 1,
    textAlign: 'center',
    padding: 10,
    color: '#0000FF'
  },
  link: {
    color: '#0000FF'
  }
})
