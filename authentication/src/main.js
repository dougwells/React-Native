var React = require('react');
var {
  StyleSheet,
  Navigator
} = require('react-native');

var Signin = require('./components/signin');
var Signup = require('./components/signup');

var ROUTES = {
  signin: Signin,
  signup: Signup
}

module.exports = React.createClass({
  renderScene: function(route, navigator){
    var Component = ROUTES[route.name];  //Routes['signin'] --> Signin component
    return <Component route={route} navigator={navigator}/>;  //pass route & navigator to rendered Component
  },

  render: function(){
    return(
      <Navigator
      style={styles.container}
      initialRoute={{name: 'signin'}}
      renderScene={this.renderScene}
      configureScene={()=>{return Navigator.SceneConfigs.FloatFromRight;}}
      >

      </Navigator>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
