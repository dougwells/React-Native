import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ListView,
  TouchableOpacity,
} from 'react-native';

import {firebaseApp, topicsRef} from './auth/authentication';
import styles from '../styles';

const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});


module.exports = React.createClass({
  getInitialState(){
    return({
      name: "Doug",
      title: "",
      dataSource: ds.cloneWithRows([
        {title:'Why is the sky blue?', author: 'Ted'}
      ]),

    });
  },

  componentDidMount(){
    let user = firebaseApp.auth().currentUser;
    if(!user.displayName){
      this.chooseName();
    } else{
      this.setState({name: user.displayName});
      this.listenForItems(topicsRef);
    }
  },

  listenForItems(ref){
    ref.on('value', (snap)=> {
      let topics=[];
      snap.forEach((topic)=>{
        topics.push({
          title: topic.val().title,
          author: topic.val().author,
          key: topic.key
        })
      })
      console.log("topics array", topics);
      this.setState({dataSource: ds.cloneWithRows(topics)});
    })
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

  details(data){
    this.props.navigator.push({
      name: 'topicDetail',
      displayName: this.state.name,
      title: data.title,
      author: data.author,
      row_uid: data.key,
    })
  },

  renderRow (rowData){
    return(
      <TouchableOpacity
        onPress={()=>{this.details(rowData)}}
        style={styles.row}>
        <Text style={styles.rowTitle}>{rowData.title}</Text>
        <Text style={styles.author}>{rowData.author}</Text>
      </TouchableOpacity>
    )
  },

  addTopic(){
    topicsRef.push({title: this.state.title, author: this.state.name})
  },

  render(){
    return (
      <View style={styles.flexContainer}>

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
          <TextInput
            style={styles.input}
            placeholder="Something on your mind?"
            onChangeText={(text)=>this.setState({title: text})}
            onEndEditing={()=>this.addTopic()}
          >
          </TextInput>
          <ListView
            style={styles.list}
            enableEmptySections={true}
            dataSource={this.state.dataSource}
            renderRow={(rowData)=>this.renderRow(rowData)}
          >

          </ListView>
        </View>

      </View>
    )

  }
})
