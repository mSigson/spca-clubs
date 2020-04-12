import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { countWords } from "utils/countWords";
import IPetition from "interfaces/projects/IPetition";
import ProjectForm from "components/forms/Project";

const PetitionForm = ({ club, createNewProject }) => {
  const [petitionTitle, setPetitionTitle] = useState(undefined as string);
  const [numOfSignatures, setNumOfSignatures] = useState(undefined as number);
  const [petitionDescription, setPetitionDescription] = useState(
    undefined as string
  );

  const petitionData: Partial<IPetition> = {
    petition_title: petitionTitle,
    num_of_signatures: numOfSignatures,
    description: petitionDescription,
  };

  return (
    <ProjectForm
      createNewProject={createNewProject}
      club={club}
      projectType="petition"
      formData={petitionData}
    >
      <TextField
        id="petition-title-input"
        label="Petition Title"
        margin="normal"
        value={petitionTitle}
        onChange={(e) => setPetitionTitle(e.target.value)}
        variant="outlined"
        style={{
          width: "45%",
        }}
      />
      <TextField
        id="num-of-signatures-input"
        label="Number of Signatures Required"
        margin="normal"
        value={numOfSignatures}
        onChange={(e) => setNumOfSignatures(parseInt(e.target.value))}
        variant="outlined"
        style={{
          width: "45%",
        }}
      />
      <TextField
        id="explanation-input"
        label="Petition Explanation"
        margin="normal"
        error={countWords(petitionDescription) > 500}
        value={petitionDescription}
        onChange={(e) => setPetitionDescription(e.target.value)}
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

export default PetitionForm;
