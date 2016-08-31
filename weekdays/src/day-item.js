//Import Code
var React = require('react-native');
var Text = React.Text;

//Create Component

var DayItem = React.createClass({
  render: function(){
    return <Text style = {this.style()}>
    {this.props.day}
      </Text>
  },

  style: function(){
    return {
      color: this.color(),
      fontWeight: this.fontWeight(),
      fontSize: this.fontSize(),
      lineHeight: this.lineHeight()
    }
  },

  color: function(){
    var opacity = 1/this.props.daysUntil
    return 'rgba(0,0,0,'+opacity+')';
  },

  fontWeight: function(){
    var weight = (8 - this.props.daysUntil)*100;
    return weight.toString();
  },

  fontSize: function(){
    return 60 - 6*this.props.daysUntil;

  },

  lineHeight: function(){
    return 70 - 4*this.props.daysUntil;
  }

})


//Export Component
module.exports = DayItem;
