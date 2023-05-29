import { FC } from "react";

interface ProjectInfoProps {
  id?: string;
  name?: string;
}

export const ProjectInfo: FC<ProjectInfoProps> = ({ id, name }) => {
  if (!id || !name) return null;
  return (
    <div>
      <hr />
      <div>
        <div>
          <span>
            Name: <strong>{name}</strong>
          </span>
        </div>
        <div>
          <span>
            ID: <input readOnly value={id} />
          </span>
        </div>
      </div>
    </div>
  );
};
