var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;


// Create a React Component
var Weekdays = React.createClass({
  render: function(){
    return <View>
      <Text>Days of the week:</Text>
    </View>
  }
});




// Show the React Component
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});
