import React from "react";
import ethIcon from "../assets/icons-eth/eth.png";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkaHighLight">
          <div className="punkaContainer">
            <a
              style={{ color: "#029ad6", fontWeight: "600" }}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="selectedPunk" src={ethIcon} alt="" />
            </a>
          </div>
        </div>
        {/* --- */}
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">title</div>
          <span className="itemNumber">.#3</span>
        </div>
        {/* --------- */}
        <div className="owner">
          <div className="ownerImageContainer">avatar circle</div>
          {/*  */}
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <h6>address 0x525</h6>{" "}
              <div className="ownerHandle">
                <a
                  style={{ color: "#029ad6", fontWeight: "600" }}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @ userpunka
                </a>
              </div>
            </div>

            {/* ICONS*/}
            <div className="ownerLink">
              <h3>
                <TiSocialInstagramCircular className="socialIcons" />
              </h3>
            </div>
            <div className="ownerLink">
              <h3>
                <TiSocialFacebookCircular className="socialIcons" />
              </h3>
            </div>
            <div className="ownerLink">
              <h3>
                <TiSocialGithubCircular className="socialIcons" />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
