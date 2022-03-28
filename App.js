import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { GameEngine } from "react-native-game-engine";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from "./screens/WelcomeSreen/WelcomeSreen";
import GameScreen from "./screens/GameScreen/GameScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen
          name="Welcome"
          component={ WelcomeScreen }
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game"
          component={ GameScreen }
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto" hidden={true} />
    </NavigationContainer>
  );
}
