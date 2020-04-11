import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import PetitionForm from "components/forms/Petition";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import IPetition from "interfaces/projects/IProject";

const CategorySelector = ({ category, setStep, setProjectCategory }) => (
  <Button
    onClick={() => {
      setStep(2);
      setProjectCategory(category);
    }}
  >
    <div className="category">
      <div className="category-img-container">
        <img src={`/assets/badges/${category.key}.png`} />
      </div>
      <p className="category-title">{category.title}</p>
    </div>
    <style jsx>{`
      .category-img-container {
        width: 200px;
        height: 200px;
        padding: 15px;
        border: 1px solid #000;
        border-radius: 50%;
      }

      img {
        width: 100%;
        height: 100%;
      }

      .category-title {
        margin-top: 4px;
      }
    `}</style>
  </Button>
);

interface Category {
  key: string;
  title: string;
  model: string;
}
const categories: Category[] = [
  { key: "petition", title: "Petition", model: "Petition" },
  { key: "video-skit", title: "Video/Skit", model: "VideoSkit" },
  { key: "poster", title: "Poster", model: "Poster" },
  { key: "letter-writing", title: "Letter Writing", model: "LetterWriting" },
  { key: "fundraising", title: "Fundraising", model: "Fundraising" },
  { key: "display", title: "Display", model: "Display" },
];

const CreateProject = ({ createNewProject, club }) => {
  const [projectData, setProjectData] = useState({} as any);
  const [step, setStep] = useState(2 as number);
  const [projectCategory, setProjectCategory] = useState(
    categories[0] as Category
  );
  const [projectName, setProjectName] = useState("cool project" as string);
  const [animalGroup, setAnimalGroup] = useState("wildlife" as string);
  const [animalIssue, setAnimalIssue] = useState("deforestation" as string);

  const newProject: Partial<IPetition> = {
    name: projectName,
    animal_group: animalGroup,
    animal_issue: animalIssue,
    type: projectCategory?.key,
    club,
  };

  return (
    <>
      <div className="create-project-container">
        {step === 1 && (
          <div className="step-container">
            <h3>Pick a Project Category</h3>
            <ul className="category-container">
              {categories.map((category) => (
                <li key={`${category}`}>
                  <CategorySelector
                    category={category}
                    setStep={setStep}
                    setProjectCategory={setProjectCategory}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        {step === 2 && (
          <div className="step-container">
            <h3>Complete the following form</h3>
            <form
              autoComplete="off"
              onSubmit={(e) => {
                e.preventDefault();
                createNewProject(projectData);
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
              <PetitionForm
                setProjectData={(projectData) =>
                  setProjectData({ ...newProject, ...projectData })
                }
              />
              <div className="form-action-buttons">
                <Button
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={() => setStep(1)}
                >
                  Back
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Create
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
      <style jsx>{`
        .category-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          max-width: 700px;
          margin: 24px auto;
        }

        .category-container li {
          margin-bottom: 8px;
        }

        .input-container {
          display: flex;
          align-items: center;
        }

        .form-action-buttons {
          display: flex;
          margin-top: 24px;
          justify-content: space-between;
        }
      `}</style>
    </>
  );
};

export default CreateProject;
