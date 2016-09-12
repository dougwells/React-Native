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
            <View style={styles.item}>
              <Text>Item 3a</Text>
            </View>
            <View style={styles.item}>
              <Text>Item 3a</Text>
            </View>
          </View>
        </View>
    )
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: 'green'
  },
  item: {
    flex: 1,
    borderWidth: 3,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  largeItem: {
    flex: 2,
    borderWidth: 3,
    borderColor: 'blue'
  }

});
