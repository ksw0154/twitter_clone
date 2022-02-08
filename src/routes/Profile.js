import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authService, dbService } from "../fbase";

const Profile = ({ userObj }) => {
  let history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const getMyTweets = async () => {
    const tweets = await dbService.collection("tweets").where("creatorId", "==", userObj.uid).get();
    console.log(tweets.docs.map((doc) => doc.data()));
  };

  useEffect(() => {
    getMyTweets();
  });

  return (
    <>
      <button onClick={onLogOutClick}>Log Out</button>
    </>
  );
};

export default Profile;
