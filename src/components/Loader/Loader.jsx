import React from "react";
import LoderImg from "../../images/loader.svg";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader flex flex-c">
      <img src={LoderImg} alt="loader" />
    </div>
  );
};

export default Loader;
