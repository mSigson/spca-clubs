import React from "react";

const UserAvatar = ({ user, height, width }) => {
  return (
    <div className="user-avatar-container">
      <img src={user.picture} alt={`An image of ${user.name}`} />
      <style>{`
        .user-avatar-container {
          width: ${width};
          height: ${height};
          border-radius: 50%;
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

UserAvatar.defaultProps = {
  height: "32px",
  width: "32px",
};

export default UserAvatar;
