// Import Library to create a Component
import React from 'react';
import {
  Text,
  AppRegistry
} from 'react-native';

// Create a Component
const App = () => {
  return(
    <Text>Some Text</Text>
  );
};

// Render it to iOS Device
AppRegistry.registerComponent('albums', () => App);
