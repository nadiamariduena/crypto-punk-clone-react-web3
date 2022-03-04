import React from "react";

const Main = ({ activePunk }) => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkaHighLight">
          <div className="punkaContainer">
            <img className="selectedPunk" src={activePunk.image_url} alt="" />
          </div>
        </div>
        {/* --- */}
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name}</div>
          <span className="itemNumber">.#3</span>
        </div>
        <div className="owner"></div>
      </div>
    </div>
  );
};

export default Main;
