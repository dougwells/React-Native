// //only use code below if created app w/ $ react-native init appName --version 0.24.0
// var React = require('react-native');
// var {Text, View, AppRegistry} = React;

//Import Required Code
var formatTime = require('minutes-seconds-milliseconds');
var React = require('react');
var {Text, View, TouchableHighlight, AppRegistry, StyleSheet} = require('react-native')


var StopWatch = React.createClass({

  getInitialState: function(){
    return {
      timeElapsed: null,
      running: false,
      startStopLabel: 'Start'
    }
  },

  render: function(){
    return <View style={styles.container}>{/* Parent View */}
      <View style={[styles.header]}>
        <View style={[styles.timerWrapper]}>
          <Text style={[styles.timer]}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={[styles.buttonWrapper]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>
      <View style = {[styles.footer]}>
        <Text>I am a view of laps ... </Text>
      </View>
    </View>
  },

  startStopButton: function(){
    var style = this.state.running ? styles.stopButton : styles.startButton;

    return <TouchableHighlight
      underlayColor='gray'
      onPress={()=>{this.handleStartPressed()}}
      style = {[styles.button, style]}
      >
      <Text>
        {this.state.running ? 'Stop' : 'Start'}
      </Text>
    </TouchableHighlight>
  },
  lapButton: function(){
    return <TouchableHighlight style={styles.button}>
      <Text>
        Lap
      </Text>
    </TouchableHighlight>
  },

  handleStartPressed: function(){
    if(this.state.running){
      clearInterval(this.interval);
      this.setState({running: false, startStopLabel: 'Start'})
      return
    }
    var startTime = new Date();
    this.interval = setInterval(()=>{
    this.setState({
      timeElapsed: new Date() - startTime,
      running: true,
      startStopLabel: 'Stop'
    })}, 30);
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
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00cc00'
  },
  stopButton: {
    borderColor: '#cc0000'
  }

});

AppRegistry.registerComponent('stopwatch', ()=>StopWatch);
