import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchProject, fetchProjectFailure } from "../store";
import { validateInput } from "../common";

export const ProjectSearch = () => {
  const dispatch = useDispatch();
  const searchRef = useRef<HTMLInputElement | null>(null);

  const onSearchProject = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const enteredPhrase = searchRef.current?.value;
    const isValid = validateInput(enteredPhrase as string);
    if (isValid) dispatch(fetchProject(enteredPhrase as string));
    else
      dispatch(
        fetchProjectFailure({
          error: {
            message: "Invalid ID",
            status: 0,
          },
        })
      );
  };

  return (
    <form onSubmit={onSearchProject}>
      <label htmlFor="project">Project ID: </label>
      <input
        type="text"
        id="project"
        name="project"
        placeholder="For random leave empty"
        ref={searchRef}
      />
      <button type="submit">Fetch</button>
    </form>
  );
};
