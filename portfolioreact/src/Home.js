import React from "react";
import backgroundImage from "./bg.png";

const Home = () => {
  return (
    <>
      <div className="header-text"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}>
        <p>Software Engineering</p>
        <h1>
          Hi, I'm <span>Asmae</span> <br />
          Mouradi
          <br />
          from Morocco
        </h1>
      </div>
    </>
  );
};
export default Home;
