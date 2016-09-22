import apiKey from './secrets/secret';

import * as firebase from 'firebase';

const config = {
    apiKey: apiKey,
    authDomain: "react-native-topicwhiz.firebaseapp.com",
    databaseURL: "https://react-native-topicwhiz.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "1032265988190"
  };


  // module.exports = firebase.initializeApp(config);

  export const firebaseApp = firebase.initializeApp(config);
