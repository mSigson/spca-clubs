import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IVideo from "interfaces/projects/IVideo";
import ProjectForm from "components/forms/Project";
import { VIDEO } from "appConstants";

const PetitionForm = ({ club, createNewProject }) => {
  const [audience, setAudience] = useState(undefined as string);
  const [videoLink, setVideoLink] = useState(undefined as string);

  const videoData: Partial<IVideo> = {
    audience,
    video_link: videoLink,
  };

  return (
    <ProjectForm
      createNewProject={createNewProject}
      club={club}
      projectType={VIDEO}
      formData={videoData}
    >
      <TextField
        id="audience-input"
        label="Who will be watching this?"
        margin="normal"
        value={audience}
        onChange={(e) => setAudience(e.target.value)}
        variant="outlined"
        style={{
          width: "45%",
        }}
      />
      <TextField
        id="video-link-input"
        label="Link to video / skip"
        margin="normal"
        value={videoLink}
        onChange={(e) => setVideoLink(e.target.value)}
        variant="outlined"
        style={{
          width: "45%",
        }}
      />
    </ProjectForm>
  );
};

export default PetitionForm;
