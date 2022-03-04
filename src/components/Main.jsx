import React, { useState } from "react";
import ethIcon from "../assets/icons-eth/eth.png";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";

const Main = ({ selectedPunka, punkaListData }) => {
  const [activePunka, setActivePunka] = useState(punkaListData[0]);

  //
  //
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkaHighLight">
          <div className="punkaContainer">
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
            <img src={ethIcon} alt={ethIcon} />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0x313 long code wallet address</div>
              <div className="ownerHandle">@punkatesto</div>
            </div>
            {/* instagram */}
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
