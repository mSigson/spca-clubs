import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import IFundraising from "interfaces/projects/IFundraising";
import ProjectForm from "components/forms/Project";
import InputAdornment from "@material-ui/core/InputAdornment";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

const FundraisingForm = ({ club, createNewProject }) => {
  const [raised, setRaised] = useState(undefined as number);
  const [method, setMethod] = useState(undefined as string);

  const fundraisingData: Partial<IFundraising> = {
    raised,
    method,
  };

  return (
    <ProjectForm
      createNewProject={createNewProject}
      club={club}
      projectType="fundraising"
      formData={fundraisingData}
    >
      <TextField
        id="amount-raised-input"
        label="Amount Raised"
        margin="normal"
        type="number"
        value={raised}
        onChange={(e) => setRaised(parseInt(e.target.value))}
        variant="outlined"
        style={{
          width: "45%",
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        id="method-input"
        label="How did you achieve this?"
        margin="normal"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
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

export default FundraisingForm;
