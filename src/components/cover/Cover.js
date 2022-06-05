import React from "react";
import "./Cover.css";
import coverVideo from "../../media/tumarca.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Name of your brand</h1>
      <p>Your brand slogan </p>
    </div>
  );
};

export default Cover;
