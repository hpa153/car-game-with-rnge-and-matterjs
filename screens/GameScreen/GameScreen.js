import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { GameEngine } from "react-native-game-engine";
import { Entypo } from "react-native-vector-icons";

import { Images } from "../../Constants";
import Physics from "../../Physics";
import entities from "../../entities";
import styles from "./styles";

const GameScreen = ({ navigation }) => {
  const [gameEngine, setGameEngine] = useState(null);
  const [running, setRunning] = useState(false);
  const [points, setPoints] = useState(0);

  return (
    <View style={styles.container}>
      <Image
        source={Images.street}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />

      {
        !running &&
        <TouchableOpacity style={styles.exitButton} activeOpacity={0.8} onPress={() => {
          navigation.navigate("Welcome")
        }}>
          <Entypo name={"cross"} size={25} style={styles.exitText} />
        </TouchableOpacity>
      }
      <Text style={styles.points}>{points}</Text>

      <GameEngine
        ref={(ref) => {
          setGameEngine(ref);
        }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e) => {
          if (e.type === "game_over") {
            setRunning(false);
            gameEngine.stop();
          }
          if (e.type === "new_point") {
            setPoints(points + 1);
          }
        }}
        style={styles.gameContainer}
      >
      </GameEngine>

      <View style={styles.controlPanel}>
        <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={() => gameEngine.dispatch({ type: "move-left" })}>
          <Text><Entypo name={"arrow-bold-left"} size={50} style={styles.buttonText} /></Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} activeOpacity={.7} onPress={() => gameEngine.dispatch({ type: "move-right" })}>
          <Text><Entypo name={"arrow-bold-right"} size={50} style={styles.buttonText} /></Text>
        </TouchableOpacity>
      </View>

      {
        !running &&
        <View style={styles.home}>
          <TouchableOpacity style={styles.menuButton} activeOpacity={0.8} onPress={() => {
            setPoints(0);
            setRunning(true);
            gameEngine.swap(entities());
          }}>
            <Text style={styles.menuButtonText}>START GAME</Text>
          </TouchableOpacity>
        </View>
      }

    </View>
  )
};

export default GameScreen;
