//Import libraries
import React from 'react';
import {
  Text,
  View
} from 'react-native';


// Build component
const Header = ()=>{
  const {viewStyle} = style;
  return(
    <View style={viewStyle}>
      <Text style={style.textStyle}>Albums!</Text>
    </View>
  );
};

const style = {
  viewStyle: {
    backgroundColor: '#f8f8f8'
  },
  textStyle: {
    fontSize: 20
  }
};


// Make component available to other parts of app
export default Header;
