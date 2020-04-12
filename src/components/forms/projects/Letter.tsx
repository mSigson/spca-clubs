import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import ILetter from "interfaces/projects/ILetter";
import ProjectForm from "components/forms/Project";

const PetitionForm = ({ club, createNewProject }) => {
  const [letterRecipient, setLetterRecipient] = useState("Mr Dope" as string);
  const [description, setDescription] = useState(
    "letter asking for 1 million dollars" as string
  );

  const LetterData: Partial<ILetter> = {
    letter_recipient: letterRecipient,
    description,
  };

  return (
    <ProjectForm
      createNewProject={createNewProject}
      club={club}
      projectType="letter"
      formData={LetterData}
    >
      <TextField
        id="letter-recipient-input"
        label="Letter Recipient"
        margin="normal"
        value={letterRecipient}
        onChange={(e) => setLetterRecipient(e.target.value)}
        variant="outlined"
        style={{
          width: "45%",
        }}
      />
      <TextField
        id="letter-description-input"
        label="Letter Description"
        margin="normal"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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
