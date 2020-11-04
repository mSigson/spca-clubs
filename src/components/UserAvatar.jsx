import React from "react";
import theme from "styles/theme";

const UserAvatar = ({ user, height, width }) => {
  return (
    <div className="user-avatar-container">
      <img src={user.picture} alt={`An image of ${user.name}`} />
      <style>{`
        .user-avatar-container {
          width: ${width};
          height: ${height};
          border-radius: 50%;
          padding: 2px;
          border: 1.5px solid #DFE0EB;
        }

        .user-avatar-container img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

UserAvatar.defaultProps = {
  height: "44px",
  width: "44px",
};

export default UserAvatar;
