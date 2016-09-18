import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ListView,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import API_KEY from '../secrets/api'
const ROOT_URL = 'https://www.eventbriteapi.com/v3/events/search/';
const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});

module.exports = React.createClass({
  getInitialState(){
    return{
      eventType: 'hackathon',
      city: 'San Francisco',
      dataSource: ds.cloneWithRows([
        {
          name: {text: 'Event 1'},
          url: 'www.google.com'
        }
      ])
    }
  },

  componentDidMount(){
    this.searchEvents(this.state.eventType, this.state.city);
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

  renderDefaultSubTitle(){
    // if(this.state.eventType === 'hackathon' && this.state.city === 'San Francisco'){
      return (
        <Text style={styles.subTitle}>
          (Results for "{this.state.eventType}" in {this.state.city})
        </Text>
      )
    // }
  },

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>
            Welcome to Event Expert
          </Text>
        </View>
        <View style={styles.form}>
          <TextInput
                style={styles.input}
                placeholder="What type of event ...?"
                onChangeText={(text)=>this.setState({eventType: text})}
          />
          <TextInput
                style={styles.input}
                placeholder="In what city?"
                onChangeText={(text)=>this.setState({city: text})}
          />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={()=>{this.searchEvents(this.state.eventType, this.state.city)}}
          >
          <Text style={styles.button}>Search</Text>
        </TouchableOpacity>
        </View>
        {this.renderDefaultSubTitle()}
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
    flex:1
  },
  heading: {
    flex: 1,
    marginTop: 40
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'red'
  },

  form: {
    flex: 3
  },
  input: {
    flex: 1,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
    textAlign: 'center'
  },
  buttonContainer: {
    flex: 1
  },
  button: {
    flex: 1,
    borderColor: '#0000FF',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    color: '#0000FF',
    margin: 5,
    padding: 5
  },
  subTitle: {
    marginTop: 10,
    textAlign: 'center',
    color: "green"
  },

  list: {
    flex:10
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
