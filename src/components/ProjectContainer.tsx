import { FC } from "react";
import { Element } from "./Element";
import { Project } from "../typings";

interface ProjectContainerProps {
  project?: Project;
}

export const ProjectContainer: FC<ProjectContainerProps> = ({ project }) => {
  if (!project) return null;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="projectContainer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        className="project"
        viewBox={`0 0 ${project.width} ${project.height}`}
        width="100%"
        height="100%"
      >
        <rect fill="#efefef" width="100%" height="100%" />
        {project.items.map((item) => (
          <Element key={`${item.id}-${item.x}-${item.y}`} item={item} />
        ))}
      </svg>
    </svg>
  );
};
