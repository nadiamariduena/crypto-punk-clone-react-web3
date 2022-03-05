import React, { useState, useEffect } from "react";
// import ethIcon from "../assets/icons-eth/eth.png";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";

const Main = ({ selectedPunk, punkListData }) => {
  //
  //
  const [activePunk, setActivePunk] = useState(punkListData[0]);
  //
  //
  //
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  //
  //
  //
  return (
    <div className="main">
      <div className="mainContent">
        {/* -- */}
        <div className="punkaHighLight">
          <div className="punkaContainer">
            <a
              style={{ color: "#029ad6", fontWeight: "600" }}
              href={activePunk.permalink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="selectedPunk"
                src={activePunk.image_preview_url}
                alt=""
              />
            </a>
          </div>
        </div>
        {/* --- */}
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name}</div>
          <span className="itemNumber">.#{activePunk.token_id}</span>
        </div>
        {/* --------- */}
        <div className="owner">
          {/* <div className="ownerImageContainer">img</div> */}
          {/*  */}
          <div className="ownerImageContainer">
            <img src={activePunk.owner.profile_img_url} alt={activePunk.name} />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <h6>{activePunk.owner.address}</h6>

              <div className="ownerHandle">
                <a
                  style={{ color: "#029ad6", fontWeight: "600" }}
                  href={activePunk.permalink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @{activePunk.owner.user.username}
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
