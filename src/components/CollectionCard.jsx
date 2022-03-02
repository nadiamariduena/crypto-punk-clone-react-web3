import React, { useState, useEffect } from "react";
import axios from "axios";

import wethIcon from "../assets/icons-eth/weth.png";
// import ethIcon from "../assets/icons-eth/eth.png";
//
//
const { REACT_API_OPENSEA } = process.env;

//
//
//
const CollectionCard = ({ id, name, traits, image }) => {
  //
  //
  const [punkaListData, setPunkaListData] = useState([]);
  //
  //
  useEffect(() => {
    const getMyNfts = async () => {
      //
      const openseaData = await axios.get(
        "https://testnets.opensea.io/api/v1/assets"
      );

      //
    };
  }, []);

  //
  //
  return (
    <div className="collectionCard">
      <img src={image} alt={name} />
      <div className="details">
        <div className="name">
          {name} <div className="id">.#{id}</div>
        </div>
        {/* ------ */}
        <div className="priceContainer">
          <img src={wethIcon} alt={wethIcon} className="wethImg" />
          {/* the traits is data coming from opensea, with the
        traits we will have access to all the traits or 
        properties from the "the minted art 
        we did in the beginning" */}
          <div className="price">{traits[0]?.value}</div>
        </div>{" "}
      </div>
    </div>
  );
};

export default CollectionCard;
