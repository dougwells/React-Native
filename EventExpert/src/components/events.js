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

import API_KEY from '../../secrets/api'
const ROOT_URL = 'https://www.eventbriteapi.com/v3/events/search/';
const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});

module.exports = React.createClass({
  getInitialState(){
    return{
      eventType: 'hackathon',
      city: 'San Francisco',
      dataSource: ds.cloneWithRows([])
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

  detail(rowData){
    this.props.navigator.push({
      name: 'eventDetail',
      title: rowData.name.text,
      description: rowData.description.text,
      url: rowData.url,
      img: rowData.logo.url
    })
  },

  renderRow(rowData) {
    const defaultImg = 'https://t1.ftcdn.net/jpg/00/36/94/26/500_F_36942622_9SUXpSuE5JlfxLFKB1jHu5Z07eVIWQ2W.jpg';
    // const defaultImg = 'https://cdn.vectorstock.com/i/composite/31,80/question-mark-vector-543180.jpg';
    let img = rowData.logo ? rowData.logo.url : defaultImg;
    return (
      <View style={styles.row}>
        <TouchableOpacity
          onPress={()=>this.detail(rowData)}
        >
          <Image
            style={styles.rowLogo}
            source={{uri: img}}
          />
        </TouchableOpacity>
        <View style={styles.rowDetails}>
          <Text>
            {
              rowData.name.text.length > 30 ?
              rowData.name.text.substring(0,30) + '...':
              rowData.name.text
            }
          </Text>
          <TouchableOpacity>
            <Text
              style={styles.link}
              onPress={()=>this.detail(rowData)}
            >
              More Details</Text>
          </TouchableOpacity>
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
    padding: 5,
    textAlign: 'left'
  },
  buttonContainer: {
    flex: 1,
    margin: 5
  },
  button: {
    flex: 1,
    borderColor: '#0000FF',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    padding: 5,
    color: '#0000FF',
    width: 100
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
  },
  link: {
    color: 'blue'
  }


})
