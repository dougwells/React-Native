// Import Library to create a Component
import React from 'react';
import {
  AppRegistry
} from 'react-native';
import Header from './src/components/header';

// Create a Component
const App = () => {
  return(
    <Header headerText={"Albums!"}/>
  );
};

// Render it to iOS Device
AppRegistry.registerComponent('albums', () => App);
