import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import PetitionForm from "components/forms/Petition";
import LetterForm from "components/forms/Letter";

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
}
const categories: Category[] = [
  { key: "petition", title: "Petition" },
  { key: "video", title: "Video/Skit" },
  { key: "poster", title: "Poster" },
  { key: "letter", title: "Letter Writing" },
  { key: "fundraising", title: "Fundraising" },
  { key: "display", title: "Display" },
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
            {projectCategory?.key === "petition" && (
              <PetitionForm club={club} createNewProject={createNewProject} />
            )}
            {projectCategory?.key === "letter" && (
              <LetterForm club={club} createNewProject={createNewProject} />
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
    </>
  );
};

export default CreateProject;
