import { FC, useEffect, useRef, useState } from "react";
import { Shape } from "./Shape";
import { Item } from "../typings";

interface ElementProps {
  item: Item;
}

export const Element: FC<ElementProps> = ({ item }) => {
  const { rotation } = item;
  const gRef = useRef<SVGGElement | null>(null);
  const [rect, setRect] = useState({
    width: 0,
    height: 0,
    transform: "",
  });

  useEffect(() => {
    const gBBox = gRef.current?.getBBox();
    if (gBBox)
      setRect({
        width: gBBox.width,
        height: gBBox.height,
        transform: `translate(${gBBox?.x}, ${gBBox?.y})`,
      });
  }, []);

  return (
    <g ref={gRef}>
      <Shape item={item} />
      <circle fill="#fff" cx={`${item.x}`} cy={`${item.y}`} r="4" />
      <text x={`${item.x + 5}`} y={`${item.y - 5}`} fill="#fff">
        {rotation}°
      </text>
      <rect
        fill="none"
        strokeWidth="2"
        strokeOpacity="0.4"
        stroke="#ff0000"
        width={rect.width}
        height={rect.height}
        transform={rect.transform}
      />
    </g>
  );
};

// do autora api - rozne key
