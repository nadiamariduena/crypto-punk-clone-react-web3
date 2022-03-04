import React from "react";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";

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
              <img
                src={TiSocialInstagramCircular}
                alt={TiSocialInstagramCircular}
              />
            </div>
            <div className="ownerLink">
              <img
                src={TiSocialFacebookCircular}
                alt={TiSocialFacebookCircular}
              />
            </div>
            <div className="ownerLink">
              <img src={TiSocialGithubCircular} alt={TiSocialGithubCircular} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
