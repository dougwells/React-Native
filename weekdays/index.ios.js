//Import Required Code
var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');

var DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// Create a React Component
var Weekdays = React.createClass({

  render: function(){
    return <View style = {styles.container}>
      <Text>
        Days of the week:
      </Text>
      {this.days()}
    </View>
  },

  days: function(){
    return DAYS.map(function(day){
      return <DayItem day = {day} />
    });
  }
});


// Style componenet

styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',     // controls horizontal placement
    justifyContent: 'center'  //controls vertical placement
  }
})

// Show the React Component
AppRegistry.registerComponent('weekdays', function(){
  return Weekdays;
});
