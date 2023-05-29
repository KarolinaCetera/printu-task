import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  getErrorSelector,
  getPendingSelector,
  getProjectSelector,
} from "./store";
import { ProjectInfo, ProjectSearch, ProjectContainer } from "./components";
import { getErrorMessage, isResponseValid } from "./common";
import "./App.css";

function App() {
  const pending = useSelector(getPendingSelector);
  const projectData = useSelector(getProjectSelector);
  const error = useSelector(getErrorSelector);

  const invalidData = useMemo(
    () => projectData && isResponseValid(projectData?.project),
    [projectData]
  );

  const existValidData = useMemo(
    () => !pending && !invalidData,
    [invalidData, pending]
  );

  return (
    <div className="App">
      <main>
        <ProjectSearch />
        <div>
          {error && <span>{getErrorMessage(error.status)}</span>}
          {invalidData && <span>{invalidData}</span>}
          {existValidData && (
            <ProjectInfo
              id={projectData?.project.id}
              name={projectData?.project.name}
            />
          )}
        </div>
        <div className="project">
          {pending && <span>Loading...</span>}
          {!pending && (!projectData || (projectData && invalidData)) && (
            <span>Empty</span>
          )}
          {existValidData && (
            <ProjectContainer project={projectData?.project} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
