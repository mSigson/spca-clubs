import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: "20px",
    width: "10ch",
  },
}));

const ClubForm = () => {
  const [clubName, setClubName] = useState();
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  const [advisorEmail, setAdvisorEmail] = useState();
  const [schoolAddress, setSchoolAddress] = useState();
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-full-width"
        label="Club Name"
        margin="normal"
        fullWidth
        value={clubName}
        onChange={(e) => setClubName(e.target.value)}
        variant="outlined"
        helperText="The Name of the club"
      />
      <TextField
        id="min-age"
        label="Min Age"
        variant="outlined"
        value={minAge}
        onChange={(e) => setMinAge(e.target.value)}
        style={{ marginRight: "12px" }}
        helperText="Age of the youngest member"
      />
      <TextField
        id="max-age"
        label="Max Age"
        variant="outlined"
        value={maxAge}
        onChange={(e) => setMaxAge(e.target.value)}
        helperText="Age of the oldest member"
      />
      <TextField
        id="advisor-email"
        label="Advisor's Email"
        margin="normal"
        fullWidth
        value={advisorEmail}
        onChange={(e) => setAdvisorEmail(e.target.value)}
        variant="outlined"
        helperText="Email of the advisor you wish us to email directly"
      />
      <TextField
        id="school-address"
        label="School Address"
        margin="normal"
        fullWidth
        value={schoolAddress}
        onChange={(e) => setSchoolAddress(e.target.value)}
        variant="outlined"
        helperText="Address of school associated with club"
      />
      <style jsx>{`
        form {
          background: white;
          padding: 24px;
          border-radius: 8px;
        }
      `}</style>
    </form>
  );
};

export default ClubForm;
