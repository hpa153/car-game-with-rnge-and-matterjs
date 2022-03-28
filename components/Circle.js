import Matter from "matter-js";
import { Image } from "react-native";

import { Images } from "../Constants";

const Circle = (props) => {
  const width = props.radius * 2;

  const x = props.body.position.x - width / 2;
  const y = props.body.position.y - width / 2;

  return (
    <Image
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: width,
        height: width,
        borderRadius: props.radius,
      }}
      resizeMode="stretch"
      source={ Images.coin}
    />
  );
};

export default (world, pos, radius) => {
  const theCircle = Matter.Bodies.circle(pos.x, pos.y, radius, {
    label: "Coin",
  });
  Matter.World.add(world, theCircle);
  return { body: theCircle, radius, renderer: <Circle /> };
};
1;
