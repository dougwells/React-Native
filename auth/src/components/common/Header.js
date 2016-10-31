//Import libraries
import React from 'react';
import {
  Text,
  View
} from 'react-native';


// Build component
const Header = (props)=>{
  return(
    <View style={style.viewStyle}>
      <Text style={style.textStyle}>{props.headerText}!</Text>
    </View>
  );
};

const style = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20
  }
};


// Make component available to other parts of app
export {Header};
