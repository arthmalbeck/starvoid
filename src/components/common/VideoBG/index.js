import React from "react";
import "./styles.css";

const VideoBG = ({ source }) => {
  return (
    <video autoPlay loop muted className="video-bg">
        <source src={source} type="video/mp4"/>
    </video>
  );
};

export default VideoBG;