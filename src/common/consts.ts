export const itemSchema = {
  type: "object",
  required: ["id", "type", "color", "x", "y", "width", "height", "rotation"],
  properties: {
    id: {
      type: "string",
    },
    type: {
      type: "string",
    },
    color: {
      type: "string",
    },
    x: {
      type: "number",
    },
    y: {
      type: "number",
    },
    width: {
      type: "number",
      minimum: 1,
    },
    height: {
      type: "number",
      minimum: 1,
    },
    rotation: {
      type: "number",
      minimum: 0,
      maximum: 360,
    },
  },
};

export const projectSchema = {
  type: "object",
  required: ["id", "name", "width", "height"],
  properties: {
    id: {
      type: "string",
    },
    name: {
      type: "string",
    },
    width: {
      type: "number",
    },
    height: {
      type: "number",
    },
  },
};

export const apiURL = "https://recruitment01.vercel.app/api";
