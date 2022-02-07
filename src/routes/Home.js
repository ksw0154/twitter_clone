import React, { useEffect, useState } from "react";
import Tweet from "../components/Tweet";
import { dbService } from "../fbase";

const Home = ({ userObj }) => {
  const [tweet, setTweet] = useState("");
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    dbService.collection("tweets").onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArray);
    });
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("tweets").add({
      text: tweet,
      createAt: Date.now(),
      creatorId: userObj.uid,
    });
    setTweet("");
  };

  const onChange = (event) => {
    setTweet(event.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={tweet} type="text" onChange={onChange} placeholder="What's on your mind" maxLength={120} />
        <input type="submit" value="Tweet" />
      </form>
      <div>
        {tweets.map((tweet) => (
          <Tweet key={tweet.id} tweetObj={tweet} isOwner={tweet.creatorId === userObj.uid} />
        ))}
      </div>
    </div>
  );
};

export default Home;
