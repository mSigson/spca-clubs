import React from "react";
import ProjectForm from "components/forms/Project";

const DisplayForm = ({ club, createNewProject }) => (
  <ProjectForm
    createNewProject={createNewProject}
    club={club}
    projectType="display"
  />
);

export default DisplayForm;
