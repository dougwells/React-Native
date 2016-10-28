// Import Library to create a Component
import React from 'react';
import {
  View,
  AppRegistry
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a Component
const App = () => {
  return(
    <View style={{flex:1}}>
      <Header headerText={"Albums!"}/>
      <AlbumList/>
    </View>
  );
};

// Render it to iOS Device
AppRegistry.registerComponent('albums', () => App);
