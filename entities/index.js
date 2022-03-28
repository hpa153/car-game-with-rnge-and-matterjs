import Matter from "matter-js";

import { Images, Constants, randomNumber } from "../Constants";
import Boundary from "../components/Boundary";
import Box from "../components/Box";
import Circle from "../components/Circle";

export default (gameWorld) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;
  engine.gravity.y = 0.0;

  return {
    physics: { engine, world },
    Player: Box(
      world,
      { x: Constants.WINDOW_WIDTH / 2, y: Constants.WINDOW_HEIGHT / 4 * 3 },
      { width: 45, height: 70 },
      {
        isStatic: false,
        label: "Player",
        image: Images.main,
        restitution: 1,
      }
    ),
    Car1: Box(
      world,
      { x: Constants.WINDOW_WIDTH / 5, y: -Constants.BOUNDARY },
      { width: 45, height: 70 },
      {
        isStatic: false,
        label: "Car1",
        image: Images.black,
        restitution: 1,
      }
    ),
    Car2: Box(
      world,
      { x: Constants.WINDOW_WIDTH / 5 * 2, y: -Constants.BOUNDARY },
      { width: 45, height: 70 },
      {
        isStatic: false,
        label: "Car2",
        image: Images.blue,
        restitution: 1,
      }
    ),
    Car3: Box(
      world,
      { x: Constants.WINDOW_WIDTH / 5 * 3, y: -Constants.BOUNDARY },
      { width: 45, height: 70 },
      {
        isStatic: false,
        label: "Car3",
        image: Images.red,
        restitution: 1,
      }
    ),
    Car4: Box(
      world,
      { x: Constants.WINDOW_WIDTH / 5 * 4, y: -Constants.BOUNDARY },
      { width: 45, height: 70 },
      {
        isStatic: false,
        label: "Car4",
        image: Images.green,
        restitution: 1,
      }
    ),
    Coin: Circle(
      world,
      { x: randomNumber( Constants.BOUNDARY, Constants.WINDOW_WIDTH - Constants.BOUNDARY), 
        y: -4 * Constants.BOUNDARY },
      20,
    ),
    LeftBoundary: Boundary(
      world,
      { x: 0, y: Constants.WINDOW_HEIGHT / 2 },
      { height: Constants.WINDOW_HEIGHT, width: Constants.BOUNDARY },
      { label: "LeftBoundary", image: Images.grassLeft }
    ),
    RightBoundary: Boundary(
      world,
      { x: Constants.WINDOW_WIDTH, y: Constants.WINDOW_HEIGHT / 2 },
      { height: Constants.WINDOW_HEIGHT, width: Constants.BOUNDARY },
      { label: "RightBoundary", image: Images.grassRight }
    ),
  };
};
