import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  textField: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: "20px",
  },
}));

const ClubForm = ({ width }) => {
  const [clubName, setClubName] = useState();
  const [minAge, setMinAge] = useState();
  const [maxAge, setMaxAge] = useState();
  const [advisorEmail, setAdvisorEmail] = useState();
  const [schoolAddress, setSchoolAddress] = useState();
  const classes = useStyles();

  const isDesktop = isWidthUp("md", width);

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-full-width"
        label="Club Name"
        margin="normal"
        value={clubName}
        onChange={(e) => setClubName(e.target.value)}
        variant="outlined"
        helperText="The Name of the club"
        style={{
          width: `${isDesktop ? "500px" : "100%"}`,
        }}
      />
      <div className="">
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
      </div>
      <TextField
        id="advisor-email"
        label="Advisor's Email"
        margin="normal"
        value={advisorEmail}
        onChange={(e) => setAdvisorEmail(e.target.value)}
        variant="outlined"
        helperText="Email of the advisor you wish us to email directly"
        style={{
          width: `${isDesktop ? "500px" : "100%"}`,
        }}
      />
      <TextField
        id="school-address"
        label="School Address"
        margin="normal"
        value={schoolAddress}
        onChange={(e) => setSchoolAddress(e.target.value)}
        variant="outlined"
        helperText="Address of school associated with club (multiline)"
        multiline
        style={{
          width: `${isDesktop ? "500px" : "100%"}`,
        }}
      />
    </form>
  );
};

export default withWidth()(ClubForm);
