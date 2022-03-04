import React from "react";
import ethIcon from "../assets/icons-eth/eth.png";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";

const Main = ({ activePunk }) => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkaHighLight">
          <div className="punkaContainer">
            hello img
            <img className="selectedPunk" src={ethIcon} alt="" />
            {/* <img className="selectedPunk" src={activePunk.image_url} alt="" />  */}
          </div>
        </div>
        {/* --- */}
        <div className="punkDetails" style={{ color: "#fff" }}>
          {/* <div className="title">{activePunk.name}</div> */}
          <div className="title">hello</div>
          <span className="itemNumber">.#3</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            {/* <img src={} alt={} /> */}
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0x313 long code wallet address</div>
              <div className="ownerHandle">@punkatesto</div>
            </div>
            {/* instagram */}
            <div className="ownerLink">
              <h3>
                <TiSocialInstagramCircular />
              </h3>
            </div>
            <div className="ownerLink">
              <h3>
                <TiSocialFacebookCircular />
              </h3>
            </div>
            <div className="ownerLink">
              <h3>
                <TiSocialGithubCircular />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
