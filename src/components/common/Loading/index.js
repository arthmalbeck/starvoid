import React from "react";
import ReactLoading from "react-loading";
import "./styles.css";

const Loading = () => {
  return (
    <div className="loading">
        <ReactLoading type="spin" color="#FFD700" height={100} width={50}/>
    </div>
  );
};

export default Loading;