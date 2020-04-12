import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ImageInput from "components/ImageInput";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { countWords } from "utils/countWords";

import IClub from "interfaces/IClub";
import IProject from "interfaces/projects/IProject";
import IPetition from "interfaces/projects/IPetition";
import ILetter from "interfaces/projects/ILetter";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: "20ch",
  },
}));

interface ProjectFormProps {
  club: IClub;
  createNewProject: any;
  projectType:
    | "petition"
    | "letter"
    | "video"
    | "poster"
    | "fundraising"
    | "display";
  formData?: Partial<IPetition> | Partial<ILetter>;
  children?: any;
}

const ProjectForm = ({
  club,
  createNewProject,
  projectType,
  formData,
  children,
}: ProjectFormProps) => {
  const [projectName, setProjectName] = useState(projectType as string);
  const [animalGroup, setAnimalGroup] = useState("wildlife" as string);
  const [animalIssue, setAnimalIssue] = useState("deforestation" as string);
  const [learningOutcome, setLearningOutcome] = useState(
    "a dope petition" as string
  );
  const [attachedImages, setAttachedImages] = useState([] as string[]);

  const newProject: Partial<IProject> = {
    name: projectName,
    animal_group: animalGroup,
    animal_issue: animalIssue,
    type: projectType,
    learning_outcome: learningOutcome,
    club,
  };

  const classes = useStyles();

  return (
    <form
      autoComplete="off"
      className={classes.root}
      onSubmit={(e) => {
        e.preventDefault();
        createNewProject({ ...newProject, ...formData });
      }}
    >
      <TextField
        id="project-name-input"
        label="Project Name"
        margin="normal"
        value={projectName}
        required={true}
        onChange={(e) => setProjectName(e.target.value)}
        variant="outlined"
        style={{
          width: "50%",
        }}
      />
      <div className="input-container">
        <FormControl
          variant="outlined"
          style={{
            width: "40%",
            marginRight: "12px",
          }}
        >
          <InputLabel id="demo-simple-select-outlined-label">
            Animal Group
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={animalGroup}
            onChange={(e) => setAnimalGroup(e.target.value.toString())}
            label="Animal Group"
          >
            <MenuItem value="pets">Pets</MenuItem>
            <MenuItem value="farm">Farm</MenuItem>
            <MenuItem value="wildlife">Wildlife</MenuItem>
            <MenuItem value="exotic">Exotic</MenuItem>
            <MenuItem value="environment">Environment</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="animal-issue-input"
          label="Animal Issue"
          margin="normal"
          value={animalIssue}
          required={true}
          onChange={(e) => setAnimalIssue(e.target.value)}
          variant="outlined"
          style={{
            width: "40%",
            margin: 0,
          }}
        />
      </div>
      {children && children}
      <TextField
        id="learning-outcomes-input"
        label="Learning Outcomes"
        margin="normal"
        error={countWords(learningOutcome) > 500}
        value={learningOutcome}
        onChange={(e) => setLearningOutcome(e.target.value)}
        variant="outlined"
        multiline
        helperText="Max length 500 words"
        style={{
          width: "100%",
        }}
      />
      <ImageInput
        addImage={(newImage) =>
          setAttachedImages([...attachedImages, newImage])
        }
      />
      {attachedImages.length > 0 && (
        <ul className="uploaded-images">
          {attachedImages.map((image) => (
            <li key={`image-${image}`} className="uploaded-image-container">
              <img width="100%" src={image} />
            </li>
          ))}
        </ul>
      )}
      <div className="form-action-buttons">
        <Button type="submit" variant="contained" color="primary" size="large">
          Create
        </Button>
      </div>
      <style>{`
        .form-action-buttons {
          display: flex;
          justify-content: flex-end;
        }

        .input-container {
          margin-top: 8px;
        }

        .uploaded-images {
          display: flex;
          flex-wrap: wrap;
          margin-top: 12px;
        }
        .uploaded-image-container {
          margin-right: 24px;
          width: 200px;
          border-radius: 8px;
        }

        .uploaded-image-container img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
        }
      `}</style>
    </form>
  );
};

export default ProjectForm;
