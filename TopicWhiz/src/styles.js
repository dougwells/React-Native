import {StyleSheet} from 'react-native';

const blue = '#90caf9';
const navy = '#1a237e';
const white = '#fff';
const black = '#000';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: blue,
  },
  input: {
    backgroundColor: white,
    height: 50,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    padding: 5
  },
  buttonContainer: {
    backgroundColor: white,
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: black,
    marginTop: 5

  },
  button: {
    textAlign: 'center'
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  link: {
    color: navy,
  },
  feedback: {
    color: '#ff0000',
    textAlign: 'center'
  },

  //topics
  topics: {
    flex:1,
    backgroundColor: blue,
  },
  header: {
    flex:1,
    flexDirection: 'row',
    marginTop:20,
    padding: 10,
    justifyContent: 'space-between'
  },
  body: {
    flex: 24
  }
});
