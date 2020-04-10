import React, { useState } from "react";
import theme from "styles/theme";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useUser } from "utils/user";
import AnimalAvatars from "components/animalIcons/index";

import IClub from "interfaces/IClub";
import IUser from "interfaces/IUser";

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

const ClubForm = ({ onSubmit }) => {
  const { user } = useUser();

  const [name, setClubName] = useState(undefined as string);
  const [num_of_members, setNumOfMembers] = useState(undefined as number);
  const [minAge, setMinAge] = useState(undefined as number);
  const [maxAge, setMaxAge] = useState(undefined as number);
  const [classAvatar, setClassAvatar] = useState("cat" as string);
  const [advisors] = useState([user] as IUser[]);

  const classes = useStyles();
  const SelectedAvatar = AnimalAvatars[classAvatar];

  const newClub: Partial<IClub> = {
    name: name,
    age_range: {
      min: minAge,
      max: maxAge,
    },
    num_of_members,
    advisors,
    avatar: classAvatar,
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
      <div className="form-input-container">
        <section className="form-section inputs">
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
              width: "100%",
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
              width: "100%",
            }}
          />
        </section>
        <section className="form-section">
          <div className="icon-selector">
            <div className="selected-avatar">
              <SelectedAvatar height="120px" width="120px" />
            </div>
            <ul className="avatar-options">
              {Object.keys(AnimalAvatars).map((key) => {
                const Avatar = AnimalAvatars[key];
                return (
                  <li key={`${key}-icon`}>
                    <Button onClick={() => setClassAvatar(key)}>
                      <Avatar height="60px" width="60px" />
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="create-button"
        size="large"
      >
        Create
      </Button>
      <div className="avatar-credit">
        Icons made by{" "}
        <a
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
          rel="noopener"
          target="_blank"
        >
          Freepik
        </a>{" "}
        from{" "}
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          rel="noopener"
          target="_blank"
        >
          www.flaticon.com
        </a>
      </div>
      <style>{`
        .form-input-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        .form-section {
          width: calc(50% - 32px);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .icon-selector {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .inputs {
          margin-bottom: 20px;
        }

        .avatar-options {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
        }

        .create-button {
          display: flex;
          flex: 1;
          width: 200px;
          margin: 20px auto 0;
        }

        .avatar-credit {
          margin-top: 24px;
          text-align: center;
        }

        .avatar-credit a {
          text-decoration: none;
          color: ${theme.palette.primary.main};
        }

        .avatar-credit a:hover {
          text-decoration: underline;
        }

        @media (max-width: 960px) {
          .form-section {
            width: 100%;
          }
        }
      `}</style>
    </form>
  );
};

export default ClubForm;
