import React from 'react';
import {View, Text} from 'react-native';

var Task2 = React.createClass({



  render: function(){
    return (
      <View>
      {this.displayTasks()}
      </View>
    );
  },
  displayTasks: function(){
      return this.props.todos.map(function(task){
          if(!task.completed){return <Text>{task.task}</Text>}
      })
  }
});

module.exports = Task2;
