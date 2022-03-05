```javascript
import React, { useState, useEffect } from "react";
import axios from "axios";

//
//
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  //
  const [selectedPunk, setSelectedPunk] = useState(0);

  //
  //
  //
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        // permalink
        `https://testnets-api.opensea.io/assets?asset_contract_address=0x8Cbb2AE3eB35fB23f2BE1E388Faf6544a9D9fcC8&order_direction=asc`
      );
      //
      console.log(openseaData.data.assets);
      // assign the state to the data
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="page">
      <div className="app">
        <Header />

        {punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk} />
            <PunkList
              punkListData={punkListData}
              setSelectedPunk={setSelectedPunk}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
/*







*/
import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  //
  //
  return (
    <div className="punkaLista">
      {punkListData.map((punk) => (
        <div key={punk.token_id} onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
/*







*/
import React from "react";

import wethIcon from "../assets/icons-eth/weth.png";
// import ethIcon from "../assets/icons-eth/eth.png";
//
//
// const { REACT_API_OPENSEA_KEY } = process.env;

//
//
//
const CollectionCard = ({ id, name, traits, image }) => {
  //
  //

  //
  //
  return (
    <div className="collectionCard" key={id}>
      <img src={image} alt="" />
      <div className="details">
        <div className="name">
          {name} <div className="id">.#{id}</div>
        </div>
        {/* ------ */}
        <div className="priceContainer">
          <img src={wethIcon} alt={wethIcon} className="wethImg" />

          <div className="price">{traits[0]?.value}</div>
        </div>{" "}
      </div>
    </div>
  );
};

export default CollectionCard;
/*







*/
import React, { useEffect, useState } from "react";
import ethIcon from "../assets/icons-eth/eth.png";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);
  // This means that the page will update, if the punkaListData or selectedPunka changes
  //

  //
  //
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkaHighLight">
          <div className="punkaContainer">
            <a
              style={{ color: "#029ad6", fontWeight: "600" }}
              href={activePunk.permalink}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="selectedPunk" src={activePunk.image_url} alt="" />
            </a>
          </div>
        </div>
        {/* --- */}
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk.name}</div>
          <span className="itemNumber">.#{activePunk.token_id}</span>
        </div>
        <div className="owner">
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

```

##### punklist

```scss
.punkaLista {
  // background-color: pink;
  cursor: pointer;
  display: flex;
  overflow: scroll;
  margin-top: 20px;
  padding-bottom: 20px;
  // border-bottom: 1px solid #fff;
  //
  //
  &::-webkit-scrollbar {
    display: none;
  }
}

/*

main  banner

*/

.main {
  max-height: 50vh;

  .mainContent {
    display: flex;
    padding-bottom: 20px;
    border-bottom: 1px solid #fff;
    //
    //
    .punkaHighLight {
      flex: 0.25;
      display: flex;
      align-items: center;
      justify-content: center;
      color: red;
      .punkaContainer {
        border-radius: 20px;
        overflow: hidden;
        display: flex;
        margin-right: 20px;
        // border: 1px solid #fff;
        //
        .selectedPunk {
          object-fit: contain;
          // max-width: min(30vw, 40vh);
          max-height: 30vh;
        }
      }
    }
    //
    //
    .punkDetails {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 0.75;
      //
      .title {
        text-transform: capitalize;
        font-size: calc(30px + 1vmin);
        font-weight: 800;
      }
      .itemNumber {
        color: #a1a5b0;
        font-size: 72px;
        align-self: start;
      }
    }
    //
    .owner {
      display: flex;
      margin: 10px 0;
      height: 50px;
      .ownerImageContainer {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: contain;
        img {
          height: 100%;
          width: 100%;
        }
      }
      //
      .ownerDetails {
        display: flex;
        align-items: center;
        flex: 1;
        .ownerNameAndHandle {
          flex: 1;
          h6 {
            font-size: calc(7px + 1vmin);
          }
          .ownerHandle {
            color: red;
          }
        }
        //icons
        .ownerLink {
          padding: 12px;
          border-radius: 50px;
          height: 50px;
          width: 50px;
          border: 1px solid #fff;
          margin: 0 0 0 10px;
          text-align: center;

          .socialIcons {
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
}
```
