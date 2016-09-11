
var React = require('react');
var {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} = require('react-native');

import TaskList from './src/components/Tasklist';
import Task2 from './src/components/Task2'

var ToDo = React.createClass({
  getInitialState: function(){
    return {
    todos: [
      {task: 'Learn React Native', completed: false},
      {task: 'My second todo', completed: false}
    ]
  }
  },
  render: function(){
    return(
      <View style={styles.container}>
        <TaskList />
        <Task2 todos={this.state.todos}/>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('expressJS', () => ToDo);
