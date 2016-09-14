import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

module.exports = React.createClass({
  getInitialState (){
    return ({
      tasks: ['Take out trash', 'Grocery shop', 'Exercise'],
      completedTasks: [],
    });
  },

  renderList (tasks){
    return tasks.map((task, index)=>{
      return (
        <View key={index} style={styles.task}>
          <Text>{task}</Text>
          <TouchableOpacity
            onPress={()=>{this.completeTask(task, index)}}
          >
            <Text>
              &#10003;
            </Text>
          </TouchableOpacity>
        </View>
        );
    });
  },

  renderCompleted(completedTasks){
    return completedTasks.map((task, index)=>{
      return (
        <View key={index} style={styles.task}>
          <Text style={styles.completed}>{task} - completed</Text>
            <TouchableOpacity
              onPress={()=>{this.removeTask(task, index)}}
            >
              <Text>
                &#10005;
              </Text>
            </TouchableOpacity>
        </View>
        );
    });
  },

  completeTask(task, index){
    let newTasks = this.state.tasks;
    let completedTask = newTasks.splice(index,1);
    completedTasks = this.state.completedTasks.concat(completedTask);
    this.setState({tasks: newTasks, completedTasks})
    console.log('completed:', this.state.completedTasks)
  },
  removeTask(task, index){
    let completedArr = this.state.completedTasks;
    completedArr.splice(index,1);
    this.setState({completedTasks: completedArr})
    console.log('completed & saved:', this.state.completedTasks)
  },

  render(){
    return(
        <View style={styles.container}>
          <Text style={styles.header}>Todo Master</Text>
          <TextInput
            style={styles.input}
            placeholder="Add a task ..."
            value = {this.state.task}
            onChangeText = {(text)=>{
              this.setState({task: text})
            }}
            onEndEditing={()=>{
              this.setState({
                tasks: this.state.tasks.concat([this.state.task]),
                task: ''
              })
            }}
            >
          </TextInput>
          <ScrollView>
            {this.renderList(this.state.tasks)}
            {this.renderCompleted(this.state.completedTasks)}
          </ScrollView>
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
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'blue',
    padding: 20,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#555',
  },
  input: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
    height: 60,
    textAlign: 'center'
  },

});
