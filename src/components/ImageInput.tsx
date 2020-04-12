import React, { useState } from "react";
import Fab from "@material-ui/core/Fab";
import CardContent from "@material-ui/core/CardContent";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { withStyles } from "@material-ui/core/styles";

const ImageUploadCard = ({ classes, addImage }) => {
  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    reader.onloadend = function (e) {
      addImage(reader.result);
    }.bind(this);
  };

  return (
    <CardContent>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleUploadClick}
        style={{ display: "none" }}
      />
      <label htmlFor="contained-button-file">
        <Fab component="span" className={classes.button}>
          <AddPhotoAlternateIcon />
        </Fab>
      </label>
    </CardContent>
  );
};

export default withStyles({}, { withTheme: true })(ImageUploadCard);
