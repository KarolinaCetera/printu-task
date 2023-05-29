export type Item = {
  id: string;
  type: "rectangle" | "ellipse";
  color: string;
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  points: number[];
};

export type Project = {
  id: string;
  name: string;
  width: number;
  height: number;
  items: Item[];
};

export type ProjectResponse = {
  id: string;
  project: Project;
};

export type ResponseError = {
  message: string;
  status: number;
};

export type ProjectState = {
  pending: boolean;
  projectData: ProjectResponse | null;
  error: ResponseError | null;
};
