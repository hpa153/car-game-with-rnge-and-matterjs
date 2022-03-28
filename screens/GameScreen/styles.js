import { StyleSheet } from 'react-native';
import { Constants, Colors } from '../../Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameContainer: {
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: Constants.BOUNDARY / 2,
    right: Constants.BOUNDARY / 2,
    width: Constants.SCREEN_WIDTH - Constants.BOUNDARY,
    height: Constants.SCREEN_HEIGHT,
  },
  controlPanel: {
    position: 'absolute',
    width: '100%',
    justifyContent: 'space-between',
    bottom: 0,
    padding: 30,
    flexDirection: 'row',
    zIndex: 50,
  },
  button: {
    backgroundColor: Colors.light,
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.main,
  },
  points: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    margin: 20,
    zIndex: 100,
    color: Colors.main,
    position: 'absolute',
    top: 10,
  },
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Colors.red,
    borderWidth: 2,
    borderColor: Colors.redLight,
    borderStyle: 'solid',
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitText: {
    color: Colors.redLight,
  },
  menuButton: {
    backgroundColor: Colors.main,
    borderWidth: 3,
    borderColor: Colors.light,
    borderStyle: 'solid',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  menuButtonText: {
    color: Colors.light,
    fontSize: 30,
    fontWeight: 'bold',
  }
});

export default styles;
