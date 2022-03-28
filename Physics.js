import Matter, { Sleeping } from "matter-js";
import { Constants, Images, randomNumber } from "./Constants";

// Get Player cars in the game
let curCars = []

const getNextCar = () => {
  let nextCar;

  if (curCars.length <= 3) {
    let getCar = () => {
      nextCar = randomNumber(1, 4);

      if (curCars.includes(nextCar)) {
        getCar();
      }
    }

    getCar();
  } else {
    if (!curCars.includes(1)) {
      nextCar = 1;
    } else if (!curCars.includes(2)) {
      nextCar = 2;
    } else if (!curCars.includes(3)) {
      nextCar = 3;
    } else {
      nextCar = 4;
    }
  }

  if (curCars.length <= 3) {
    curCars.push(nextCar);
  } else {
    return;
  }
}

getNextCar();

const Physics = (entities, { touches, dispatch, events, time }) => {
  let engine = entities.physics.engine;
  let world = engine.world;

  let x = entities.Player.body.position.x;
  let y = entities.Player.body.position.y;

  // Control player moves
  if (events.length) {
    Sleeping.set(entities.Player.body, false);

    for (let i = 0; i < events.length; i++) {
      if (events[i].type === "move-left") {
        Sleeping.set(entities.Player.body, false);
        Matter.Body.setVelocity(entities.Player.body, {
          x: -2,
          y: 0,
        });
      } else if (events[i].type === "move-right") {
        Sleeping.set(entities.Player.body, false);
        Matter.Body.setVelocity(entities.Player.body, {
          x: 2,
          y: 0,
        });
      }
    }
  }

  // Run cars
  for (let i = 0; i < curCars.length; i++) {
    Matter.Body.setVelocity(entities[`Car${curCars[i]}`].body, { x: 0, y: 3 });

    // Get new car to screen
    if (entities[`Car${curCars[i]}`].body.bounds.max.y >= Constants.WINDOW_HEIGHT / 3
      && entities[`Car${curCars[i]}`].body.bounds.max.y <= Constants.WINDOW_HEIGHT / 2
      && !entities[`Car${curCars[i]}`].count) {
      entities[`Car${curCars[i]}`].count = true;
      getNextCar();
    }

    if (entities[`Car${curCars[i]}`].body.bounds.max.y > Constants.WINDOW_HEIGHT / 2) {
      entities[`Car${curCars[i]}`].count = false;
    }

    // Reset car
    if (entities[`Car${curCars[i]}`].body.bounds.max.y >= Constants.WINDOW_HEIGHT) {
      switch (curCars[i]) {
        case 1: {
          Matter.Body.setPosition(entities[`Car${curCars[i]}`].body,
            { x: Constants.WINDOW_WIDTH / 5, y: -Constants.BOUNDARY }
          );
          break;
        }
        case 2: {
          Matter.Body.setPosition(entities[`Car${curCars[i]}`].body,
            { x: Constants.WINDOW_WIDTH / 5 * 2, y: -Constants.BOUNDARY }
          );
          break;
        }
        case 3: {
          Matter.Body.setPosition(entities[`Car${curCars[i]}`].body,
            { x: Constants.WINDOW_WIDTH / 5 * 3, y: -Constants.BOUNDARY }
          );
          break;
        }
        case 4: {
          Matter.Body.setPosition(entities[`Car${curCars[i]}`].body,
            { x: Constants.WINDOW_WIDTH / 5 * 4, y: -Constants.BOUNDARY }
          );
          break;
        }
      }

      curCars.shift();
    }
  }

  // Run coins
  Matter.Body.setVelocity(entities.Coin.body, { x: 0, y: 3 });
  entities.Coin.earnedPoint = false;

  if (entities.Coin.body.bounds.max.y >= Constants.WINDOW_HEIGHT) {
    Matter.Body.setPosition(entities.Coin.body, {
      x: randomNumber(Constants.BOUNDARY, Constants.WINDOW_WIDTH - Constants.BOUNDARY),
      y: -3 * Constants.BOUNDARY
    });
  }

  // Detect collisions
  Matter.Events.on(engine, "collisionStart", (event) => {
    var pairs = event.pairs;

    var objALabel = pairs[0].bodyA.label;
    var objBLabel = pairs[0].bodyB.label;

    // Game over
    if (objALabel === "Player") {
      switch (objBLabel) {
        case "Car1":
        case "Car2":
        case "Car3":
        case "Car4":
        case "RightBoundary":
        case "LeftBoundary": {
          Sleeping.set(entities.Player.body, true);
          entities.Player.extraOptions.image = Images.gameover;
          curCars = [];
          getNextCar();
          dispatch({ type: 'game_over' });
        }
      }
    }

    // Earn points
    if (objBLabel === "Coin" && objALabel === "Player") {
      if (!entities.Coin.earnedPoint) {
        dispatch({ type: 'new_point' });
      }

      entities.Coin.earnedPoint = true;
      Matter.Body.setPosition(entities.Coin.body, {
        x: randomNumber(Constants.BOUNDARY, Constants.WINDOW_WIDTH - Constants.BOUNDARY),
        y: -3 * Constants.BOUNDARY
      });
      Sleeping.set(entities.Player.body, true);
    }
  });

  Matter.Engine.update(engine, time.delta);

  return entities;
};

export default Physics;
