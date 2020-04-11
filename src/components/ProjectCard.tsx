import React from "react";
import Link from "next/link";
import theme from "styles/theme";

const ProjectCard = ({ project }) => {
  return (
    <>
      <Link href={`/club/${project.club}/project/${project._id}`}>
        <div className="card">
          <h4>{project.name}</h4>
          <div className="img-container">
            <img src={`/assets/badges/${project.type}.png`} />
          </div>
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
          cursor: pointer;
        }

        .card .img-container {
          align-self: flex-end;
          width: 40px;
          height: 40px;
        }

        img {
          width: 100%;
          height: 100%;
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

export default ProjectCard;
