import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IPoster from "interfaces/projects/IPoster";
import ProjectForm from "components/forms/Project";

const PosterForm = ({ club, createNewProject }) => {
  const [postLocation, setPostLocation] = useState(undefined as string);
  const [goal, setGoal] = useState(undefined as string);

  const posterData: Partial<IPoster> = {
    post_location: postLocation,
    goal,
  };

  return (
    <ProjectForm
      createNewProject={createNewProject}
      club={club}
      projectType="poster"
      formData={posterData}
    >
      <TextField
        id="post-location-input"
        label="Where will these poster be located?"
        margin="normal"
        value={postLocation}
        onChange={(e) => setPostLocation(e.target.value)}
        variant="outlined"
        style={{
          width: "45%",
        }}
      />
      <TextField
        id="poster-goal-input"
        label="What change are you hoping will come of your posters?"
        margin="normal"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        variant="outlined"
        multiline
        helperText="Max length 500 words"
        style={{
          width: "100%",
        }}
      />
    </ProjectForm>
  );
};

export default PosterForm;
