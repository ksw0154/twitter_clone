import React, { useState } from "react";
import { dbService } from "../fbase";

const Home = () => {
  const [tweet, setTweet] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("tweets").add({
      tweet: tweet,
      createAt: Date.now(),
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
    </div>
  );
};

export default Home;
