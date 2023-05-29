import axios from "axios";
import Ajv from "ajv";
import { apiURL, itemSchema, projectSchema } from "./consts";
import { Project, ProjectResponse } from "../typings";

export const validateInput = (input: string) => {
  if (input.length === 0) return true;
  const regex =
    /[A-Za-z]+([+-]?(?=\.\d|\d)(?:\d+)?(?:\.?\d*))(?:[Ee]([+-]?\d+))?/i;
  return regex.test(input);
};

export const getErrorMessage = (errorStatus: number) => {
  switch (errorStatus) {
    case 500:
      return "Coś poszło nie tak - skontaktuj się z administratorem!";
    case 404:
      return "Nie znaleziono projektu!";
    case 0:
      return "Niepoprawne ID";
  }
};

export const isResponseValid = (response: Project): string | null => {
  const ajv = new Ajv();
  const validateProject = ajv.compile(projectSchema);
  const validateItems = ajv.compile(itemSchema);
  const { items, ...project } = response;

  const isProjectAllValid = validateProject(project);
  const isItemsAllValid = items.every((item) => validateItems(item));

  if (!isItemsAllValid || !isProjectAllValid)
    return "Coś poszło nie tak - Otrzymano nieprawidłowe dane";
  return null;
};

export const fetchProjectById = (id: string) =>
  axios.get<ProjectResponse>(`${apiURL}/project/${id}`);

export const getProject = async (id: string) => {
  let randomId;

  if (id.length === 0) {
    const {
      data: { id: randomProjectId },
    } = await axios.get(`${apiURL}/init`);

    randomId = randomProjectId;
  }

  return fetchProjectById(randomId || id);
};
