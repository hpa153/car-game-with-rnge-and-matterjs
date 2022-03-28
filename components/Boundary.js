import React from "react";
import Matter from "matter-js";
import { View, Image } from "react-native";

const Boundary = (props) => {
  const width = props.body.bounds.max.x - props.body.bounds.min.x;
  const height = props.body.bounds.max.y - props.body.bounds.min.y;

  const xPos = props.body.position.x - width / 2;
  const yPos = props.body.position.y - height / 2;

  const verticalImageIterations = Math.ceil(height / width);

  return (
    <View
      style={{
        position: "absolute",
        left: xPos,
        top: yPos,
        width: width,
        height: height,
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      {Array.apply(
        null,
        Array(
          verticalImageIterations
        )
      ).map((el, idx) => {
        return (
          <Image
            style={{
              width: width,
              height: width,
            }}
            key={idx}
            resizeMode="stretch"
            source={props.extraOptions.image}
          />
        );
      })}
    </View>
  );
};

export default (world, pos, size, extraOptions) => {
  const boundary = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: extraOptions.label,
      isStatic: true,
    }
  );
  Matter.World.add(world, boundary);
  return { body: boundary, pos, size, extraOptions, renderer: <Boundary /> };
};
