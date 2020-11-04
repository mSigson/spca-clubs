import React from "react";
import Link from "next/link";
import dayjs from "dayjs";
import theme from "styles/theme";
import AnimalAvatars from "./animalIcons/index";

const ClubCard = ({ club }) => {
  const Avatar = AnimalAvatars[club.avatar];
  return (
    <>
      <Link href={`/club/${club._id}`}>
        <div className="card">
          <Avatar height="74px" width="74px" />
          <div className="card-details">
            <div className="card-details-main">
              <p className="card-club-dark">{club.name}</p>
              <p className="card-club-details">
                {club.num_of_members} members • {club.age_range.min} to{" "}
                {club.age_range.max} years old
              </p>
            </div>
            <p className="card-club-dark">
              Founded on {dayjs(club.created_at).format("MMMM DD YYYY")}
            </p>
          </div>
        </div>
      </Link>
      <style>{`
        .card {
          display: flex;
          align-items: center;
          width: 100%;
          max-width: 100%;
          padding:  32px;
          background: #fff;
          border-radius: 6px;
          cursor: pointer;
        }

        .card-details {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 30px;
          height: 100%;
          width: 100%;
        }

        .card svg {
          width: 74px;
          min-width: 74px;
        }

        .card-club-dark {
          font-size: 14px;
          color: ${theme.palette.text.secondary}
        }

        .card-club-details {
          font-size: 12px;
          margin-top: 4px;
        }

        .card-details-main {
          margin-bottom: 18px;
        }

        .card:hover {
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }
      `}</style>
    </>
  );
};

export default ClubCard;
