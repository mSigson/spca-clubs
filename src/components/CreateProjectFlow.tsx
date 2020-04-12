import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import PetitionForm from "components/forms/projects/Petition";
import LetterForm from "components/forms/projects/Letter";
import VideoForm from "components/forms/projects/Video";
import DisplayForm from "components/forms/projects/Display";
import FundraisingForm from "components/forms/projects/Fundraising";
import PosterForm from "components/forms/projects/Poster";

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
  { type: "petition", title: "Petition" },
  { type: "video", title: "Video/Skit" },
  { type: "poster", title: "Poster" },
  { type: "letter", title: "Letter Writing" },
  { type: "fundraising", title: "Fundraising" },
  { type: "display", title: "Display" },
];

const CreateProject = ({ createNewProject, club }) => {
  const [step, setStep] = useState(1 as number);
  const [projectCategory, setProjectCategory] = useState(
    categories[0] as Category
  );

  console.log(step);

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
            <h3>{projectCategory?.title}</h3>
            {projectCategory?.type === "petition" && (
              <PetitionForm club={club} createNewProject={createNewProject} />
            )}
            {projectCategory?.type === "letter" && (
              <LetterForm club={club} createNewProject={createNewProject} />
            )}
            {projectCategory?.type === "video" && (
              <VideoForm club={club} createNewProject={createNewProject} />
            )}
            {projectCategory?.type === "display" && (
              <DisplayForm club={club} createNewProject={createNewProject} />
            )}
            {projectCategory?.type === "fundraising" && (
              <FundraisingForm
                club={club}
                createNewProject={createNewProject}
              />
            )}
            {projectCategory?.type === "poster" && (
              <PosterForm club={club} createNewProject={createNewProject} />
            )}
            <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() => setStep(1)}
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
