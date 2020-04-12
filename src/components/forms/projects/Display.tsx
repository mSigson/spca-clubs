import React from "react";
import ProjectForm from "components/forms/Project";
import { DISPLAY } from "appConstants";

const DisplayForm = ({ club, createNewProject }) => (
  <ProjectForm
    createNewProject={createNewProject}
    club={club}
    projectType={DISPLAY}
  />
);

export default DisplayForm;
