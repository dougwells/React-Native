import React from 'react';
import {
  Navigator
} from 'react-native';

import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import Topics from './components/topics';
import TopicDetail from './components/topicDetail'
import ChooseName from './components/auth/chooseName';

  const routes = {
    signIn: SignIn,
    signUp: SignUp,
    topics: Topics,
    topicDetail: TopicDetail,
    chooseName: ChooseName
  };

module.exports = React.createClass({

  render(){
    return(
      <Navigator
        initialRoute = {{name: 'signIn'}}
        renderScene = {this.renderScene}
      />
    )
  },

  renderScene(route,navigator){
    let Component = routes[route.name];
    let {displayName, title, author, row_uid} = route   //pass in as props for topic details
    return(
      <Component
        navigator={navigator}
        displayName={displayName}
        title={title}
        author={author}
        row_uid = {row_uid}
        />
    );
  }
});
