//Import Code
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

//Create Component

var DayItem = React.createClass({
  render: function(){
    return <Text style = {styles.day}>
      {this.props.day}
      </Text>
  }
})

//Style Component
var styles = StyleSheet.create({
  day: {
    fontSize: 18,
    color: '#0000ff',
  }
})

//Export Component
module.exports = DayItem;
