import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  ListView,
  TouchableOpacity
} from 'react-native';

import styles from '../styles';
//import reference to database
import {topicsRef} from './auth/authentication';

const ds = new ListView.DataSource({rowHasChanged: (r1,r2)=>r1 !== r2});

module.exports = React.createClass({
  getInitialState(){
    return {
      comment: "",
      commentsRef: '',
      dataSource: ds.cloneWithRows('')
    }
  },

  componentDidMount(){
    console.log('topicDetail componentDidMount triggered');
    const commentsRef = topicsRef.child(this.props.row_uid).child('comments');
    this.setState({commentsRef: commentsRef})
    this.listenForItems(commentsRef);         //(NOT the comments object nor array)
                                              //Go to listenForItems to get comments array
  },

  listenForItems(ref){
    // this.setState({dataSource: ds.cloneWithRows(ref)})
    ref.on('value', (snap)=> {
      let commentsArr=[];
      snap.forEach((comment)=>{
        commentsArr.push({comment: comment.val().comment, author: comment.val().author});
      })
      console.log("comments array", commentsArr);
      this.setState({dataSource: ds.cloneWithRows(commentsArr)});
    })
  },

  postComment(comment){
    this.state.commentsRef.push({
      comment: this.state.comment,
      author: this.props.displayName
    });
  },

  renderRow(data){
    return(
      <View style={styles.row}>
        <Text style={styles.comment}>{data.comment}</Text>
        <Text>{data.author}</Text>

      </View>
    )

  },

  render(){
    return(
      <View style={styles.flexContainer}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={()=>this.props.navigator.pop()}
          >
            <Text style={styles.link}>Back to all topics</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
            <Text style={styles.detailTitle}>
            {this.props.title}
          </Text>
            <Text style={styles.detailSubtitle}>
            {this.props.author}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Any comment to share?"
            value={this.state.comment}
            onChangeText={(text)=>this.setState({comment: text})}
            onEndEditing={(text)=>{
                this.postComment(text);
                this.setState({comment: ''});
              }
            }
            ></TextInput>
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
