import { StyleSheet } from 'react-native';
import { Colors } from '../../Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 60,
    fontFamily: 'notoserif',
    fontWeight: 'bold',
    color: Colors.main,
    marginTop: '15%',
    textShadowColor: Colors.light,
    textShadowOffset: {width: 5, height: 5},
    textShadowRadius: 10,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: Colors.main,
  },
  buttonText: {
    color: Colors.light,
  }
});

export default styles;
