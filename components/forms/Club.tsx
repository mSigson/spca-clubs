import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import Button from "@material-ui/core/Button";
import { useUser } from "../../utils/user";

import IClub from "../../interfaces/IClub";
import IUser from "../../interfaces/IUser";

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

const ClubForm = ({ width, onSubmit }) => {
  const { user } = useUser();

  const [name, setClubName] = useState(undefined as string);
  const [num_of_members, setNumOfMembers] = useState(undefined as number);
  const [minAge, setMinAge] = useState(undefined as number);
  const [maxAge, setMaxAge] = useState(undefined as number);
  const [advisors] = useState([user] as IUser[]);

  const classes = useStyles();
  const isDesktop = isWidthUp("md", width);

  const newClub: IClub = {
    name: name,
    age_range: {
      min: minAge,
      max: maxAge,
    },
    num_of_members,
    advisors,
    school: "greatest school ever",
  };

  return (
    <form
      className={classes.root}
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(newClub);
      }}
    >
      <TextField
        id="club-name-input"
        label="Club Name"
        margin="normal"
        value={name}
        required={true}
        onChange={(e) => setClubName(e.target.value)}
        variant="outlined"
        helperText="The Name of the club"
        style={{
          width: `${isDesktop ? "500px" : "100%"}`,
        }}
      />
      <TextField
        id="min-age"
        label="Num of Members"
        variant="outlined"
        value={num_of_members}
        type="number"
        error={num_of_members < 1}
        required={true}
        onChange={(e) => setNumOfMembers(parseInt(e.target.value))}
        style={{ marginRight: "12px", width: "25ch" }}
        helperText="Number of members in this club"
      />
      <div>
        <TextField
          id="min-age"
          label="Min Age"
          variant="outlined"
          value={minAge}
          type="number"
          error={minAge > maxAge}
          required={true}
          onChange={(e) => setMinAge(parseInt(e.target.value))}
          style={{ marginRight: "12px", width: "25ch" }}
          helperText="Age of the youngest member"
        />
        <TextField
          id="max-age"
          label="Max Age"
          variant="outlined"
          value={maxAge}
          error={minAge > maxAge}
          type="number"
          required={true}
          style={{ marginRight: "12px", width: "25ch" }}
          onChange={(e) => setMaxAge(parseInt(e.target.value))}
          helperText="Age of the oldest member"
        />
      </div>
      <TextField
        id="advisor-email"
        label="Advisor's Email"
        margin="normal"
        type="email"
        value={user.email}
        required={true}
        variant="outlined"
        helperText="Email of the advisor you wish us to email directly"
        style={{
          width: `${isDesktop ? "500px" : "100%"}`,
        }}
      />
      {/* <TextField
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
      /> */}
      <Button type="submit" variant="contained" color="primary">
        Create
      </Button>
    </form>
  );
};

export default withWidth()(ClubForm);
