import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
  render(){
    return(
        <View style={styles.container}>
          <View style={styles.item}>
            <Text>Item 1</Text>
          </View>
          <View style={styles.item}>
            <Text>Item 2</Text>
          </View>
          <View style={styles.largeItem}>
            <Text>Item 3</Text>
          </View>
        </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'green'
  },
  item: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'red'
  },
  largeItem: {
    flex: 2,
    borderWidth: 3,
    borderColor: 'blue'
  }

});
