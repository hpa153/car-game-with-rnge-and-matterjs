import { Dimensions } from "react-native";

export const Constants = {
  SCREEN_WIDTH: Dimensions.get("screen").width,
  SCREEN_HEIGHT: Dimensions.get("screen").height,
  WINDOW_WIDTH: Dimensions.get("window").width,
  WINDOW_HEIGHT: Dimensions.get("window").height,
  BOUNDARY: 50,
};

export const Images = {
  main: require("./assets/images/main.png"),
  black: require("./assets/images/black.png"),
  blue: require("./assets/images/blue.png"),
  coin: require("./assets/images/coin.png"),
  grassLeft: require("./assets/images/grassLeft.png"),
  grassRight: require("./assets/images/grassRight.png"),
  green: require("./assets/images/green.png"),
  red: require("./assets/images/red.png"),
  street: require("./assets/images/street.jpg"),
  welcome: require("./assets/images/welcome.jpg"),
  gameover: require("./assets/images/gameover.png"),
};

export const Colors = {
  main: "#276E44",
  light: "#9EF0BF",
  red: "#731414",
  redLight: "#ff8787",
};

export const randomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

