import React from "react";

const UserAvatar = ({ user }) => {
  return (
    <div className="user-avatar-container">
      <img src={user.picture} alt={`An image of ${user.name}`} />
      <style>{`
        .user-avatar-container {
          width: 32px;
          height: 32px;
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

export default UserAvatar;
