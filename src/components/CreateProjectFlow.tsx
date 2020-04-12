import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import PetitionForm from "components/forms/projects/Petition";
import LetterForm from "components/forms/projects/Letter";
import VideoForm from "components/forms/projects/Video";
import DisplayForm from "components/forms/projects/Display";
import FundraisingForm from "components/forms/projects/Fundraising";
import PosterForm from "components/forms/projects/Poster";
import {
  LETTER,
  PETITION,
  POSTER,
  DISPLAY,
  FUNDRAISING,
  VIDEO,
  PROJECT_TYPE_TITLES,
} from "appConstants";

const CategorySelector = ({ category, setStep, setProjectCategory }) => (
  <Button
    onClick={() => {
      setStep(2);
      setProjectCategory(category);
    }}
  >
    <div className="category">
      <div className="category-img-container">
        <img src={`/assets/badges/${category.type}.png`} />
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
  type: string;
  title: string;
}
const categories: Category[] = [
  { type: PETITION, title: PROJECT_TYPE_TITLES[PETITION] },
  { type: VIDEO, title: PROJECT_TYPE_TITLES[VIDEO] },
  { type: POSTER, title: PROJECT_TYPE_TITLES[POSTER] },
  { type: LETTER, title: PROJECT_TYPE_TITLES[LETTER] },
  { type: FUNDRAISING, title: PROJECT_TYPE_TITLES[FUNDRAISING] },
  { type: DISPLAY, title: PROJECT_TYPE_TITLES[DISPLAY] },
];

const CreateProject = ({ createNewProject, club }) => {
  const [step, setStep] = useState(1 as number);
  const [projectCategory, setProjectCategory] = useState(
    categories[0] as Category
  );

  return (
    <>
      <div className="create-project-container">
        {step === 1 && (
          <div className="step-container">
            <h3>Pick a Project Category</h3>
            <ul className="category-container">
              {categories.map((category) => (
                <li key={`${category.type}-category`}>
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
            <h3>{projectCategory?.title}</h3>
            {projectCategory?.type === PETITION && (
              <PetitionForm club={club} createNewProject={createNewProject} />
            )}
            {projectCategory?.type === LETTER && (
              <LetterForm club={club} createNewProject={createNewProject} />
            )}
            {projectCategory?.type === VIDEO && (
              <VideoForm club={club} createNewProject={createNewProject} />
            )}
            {projectCategory?.type === DISPLAY && (
              <DisplayForm club={club} createNewProject={createNewProject} />
            )}
            {projectCategory?.type === FUNDRAISING && (
              <FundraisingForm
                club={club}
                createNewProject={createNewProject}
              />
            )}
            {projectCategory?.type === POSTER && (
              <PosterForm club={club} createNewProject={createNewProject} />
            )}
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => setStep(1)}
              className="create-project-flow-back-button"
            >
              Back
            </Button>
          </div>
        )}
      </div>
      <style jsx>{`
        h3 {
          margin-bottom: 12px;
        }
        .create-project-container {
          max-width: 1000px;
          background: white;
          padding: 24px;
          border-radius: 8px;
          margin: 0 auto;
        }

        .category-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          max-width: 900px;
          margin: 24px auto;
        }

        .category-container li {
          margin-bottom: 8px;
          margin-right: 10px;
        }

        .step-container {
          position: relative;
        }

        .create-project-flow-back-button {
          position: absolute;
          bottom: 0;
        }
      `}</style>
    </>
  );
};

export default CreateProject;
