import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ userObj }) => {
  console.log(userObj);
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">{userObj.displayName ? `${userObj.displayName}의 Profile` : "Profile"}</Link>
      </li>
    </ul>
  );
};

export default Navigation;
