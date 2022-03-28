import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

import { Images } from "../../Constants";
import styles from './styles';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View>
      <ImageBackground source={Images.welcome} style={styles.background} >
        <View style={styles.container}>
          <Text style={styles.title}>Welcome</Text>
          <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => navigation.navigate("Game")}>
          <Ionicons name={"game-controller"} size={30} style={styles.buttonText} />
          <Text style={styles.buttonText}>Play Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
};

export default WelcomeScreen;
