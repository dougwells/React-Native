import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#ffffff'
  },
  input: {
    height: 50,
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 5,
    padding: 5
  },
  buttonContainer: {
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: 5,
    borderColor:'#0000FF',
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
    color: '#0000FF',
  }
});
