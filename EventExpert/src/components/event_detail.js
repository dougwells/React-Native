import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
  render(){
    return(
      <View style={styles.container}>
        <Text>Event Details</Text>
        <Text>{this.props.title}</Text>
        <Text>{this.props.description}</Text>
        <Text>{this.props.url}</Text>
        <Text>{this.props.img}</Text>
        <TouchableOpacity>
          <Text
            style={styles.link}
            onPress={()=>this.props.navigator.popToTop(0)}
          >
            Home
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  link: {
    color: 'blue',
    fontSize: 12
  }
});
