import React from "react";
import Link from "next/link";
import theme from "../src/theme";
import AnimalAvatars from "./animalIcons/index";

const ClubCard = ({ club }) => {
  const Avatar = AnimalAvatars[club.avatar];
  return (
    <>
      <Link href={`/club/${club._id}`}>
        <div className="card">
          <h4>{club.name}</h4>
          <Avatar height="60px" width="60px" />
        </div>
      </Link>
      <style>{`
        .card {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 150px;
          max-height: 150px;
          width: 250px;
          max-width: 250px;
          padding:  24px;
          background: #fff;
          border-radius: 6px;
          transition: box-shadow 0.1s;
          cursor: pointer;
        }

        .card svg {
          align-self: flex-end;
        }

        .card:hover {
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }

        h4 {
          font-size: 21px;
          color: ${theme.palette.primary.main};
        }
      `}</style>
    </>
  );
};

export default ClubCard;
