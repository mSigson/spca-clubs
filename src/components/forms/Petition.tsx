import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { countWords } from "utils/countWords";
import ImageInput from "components/ImageInput";

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

const PetitionForm = () => {
  const [petitionTitle, setPetitionTitle] = useState(undefined as string);
  const [numOfSignatures, setNumOfSignatures] = useState(0 as number);

  const [petitionExplanation, setPetitionExplanation] = useState(
    undefined as string
  );

  const [attachedImages, setAttachedImages] = useState([] as string[]);

  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
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
          error={countWords(petitionExplanation) > 500}
          value={petitionExplanation}
          onChange={(e) => setPetitionExplanation(e.target.value)}
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
              <div className="uploaded-image-container">
                <img width="100%" src={image} />
              </div>
            ))}
          </ul>
        )}
      </div>
      <style jsx>{`
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

export default PetitionForm;
