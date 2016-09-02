// //only use code below if created app w/ $ react-native init appName --version 0.24.0
// var React = require('react-native');
// var {Text, View, AppRegistry} = React;

//Import Required Code
var React = require('react');
var {Text, View, TouchableHighlight, AppRegistry, StyleSheet} = require('react-native')


var StopWatch = React.createClass({
  render: function(){
    return <View style={styles.container}>{/* Parent View */}
      <View style={[styles.header, this.border('yellow')]}>
        <View style={[styles.timerWrapper, this.border("red")]}>
          <Text>
            00:00.00
          </Text>
        </View>
        <View style={[styles.buttonWrapper, this.border('green')]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>
      <View style = {[styles.footer, this.border('blue')]}>
        <Text>I am a view of laps ... </Text>
      </View>
    </View>
  },

  startStopButton: function(){
    return <TouchableHighlight
      underlayColor='gray'
      onPress={()=>{this.handleStartPressed()}}
      >
      <Text>
        Start
      </Text>
    </TouchableHighlight>
  },
  lapButton: function(){
    return <TouchableHighlight>
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
  },

  border: function(color){
    return{
      borderColor: color,
      borderWidth: 4
    }
  },

  handleStartPressed: function(){
    console.log("You pressed the Start button")
  }
});

var styles = StyleSheet.create({

  container: {
    flex: 1,  //Fill entire screen
    alignItems: 'stretch' // stretch horiz (by default)
  },

  header: {   //yellow
    flex: 1
  },

  footer: {   //blue
    flex: 1
  },

  timerWrapper:{  //red
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {  //green
    flex: 3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: 'center'
  }

});

AppRegistry.registerComponent('stopwatch', ()=>StopWatch);
