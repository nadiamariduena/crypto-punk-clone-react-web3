import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [punkaListData, setPunkaListData] = useState([]);
  //
  //
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        `https://testnets-api.opensea.io/assets?asset_contract_address=0x20978D62136a8855E29e1Cc6b841f7dacaF578A2&order_direction=asc`
      );
      //
      console.log(openseaData.data.assets);
    };
    return getMyNfts();
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
