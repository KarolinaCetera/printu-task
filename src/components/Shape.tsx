import { FC } from "react";
import { Item } from "../typings";

interface ShapeProps {
  item: Item;
}

export const Shape: FC<ShapeProps> = ({ item }) => {
  const transform = `translate(${item.x}, ${item.y}) rotate(${
    item.rotation
  }) translate(${-item.width / 2}, ${-item.height / 2})`;

  const regex = new RegExp("^#?([a-f0-9]{6}|[a-f0-9]{3})$");

  switch (item.type) {
    case "ellipse":
      return (
        <ellipse
          cx={item.width / 2}
          cy={item.height / 2}
          rx={item.width / 2}
          ry={item.height / 2}
          fill={regex.test(item.color) ? item.color : "#000"}
          transform={transform}
        />
      );
    case "rectangle":
      return (
        <rect
          data-x={item.x}
          data-y={item.y}
          width={item.width}
          height={item.height}
          fill={item.color}
          transform={transform}
        />
      );
  }
};
