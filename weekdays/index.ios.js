//Import Required Code
var React = require('react-native');
var Moment = require('moment');
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
      {this.days()}
    </View>
  },

  days: function(){
    var dayItems = [];
    for(var i=1; i<=7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      dayItems.push(<DayItem day={day} daysUntil={i}/>);
    }
    return dayItems;
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
