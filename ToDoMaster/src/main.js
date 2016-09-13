import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
  getInitialState (){
    return ({
      tasks: ['Take out trash', 'Grocery shop', 'Exercise']
    });
  },

  renderList (tasks){
    return tasks.map((task)=>{
      return (
        <View key={task} style={styles.task}>
          <Text>{task}</Text>
        </View>
        );
    });
  },

  render(){
    return(
        <View style={styles.container}>
          <Text style={styles.header}>Todo Master</Text>
          {this.renderList(this.state.tasks)}
      </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  header: {
    margin: 30,
    marginTop: 40,
    textAlign: 'center',
    fontSize: 18
  },
  task: {
    borderWidth: 1,
    borderColor: 'blue',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center'
  }

});
