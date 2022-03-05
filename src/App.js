import React, { useState, useEffect } from "react";
import axios from "axios";

//
//
import Header from "./components/Header";
import PunkList from "./components/PunkList";
// import CollectionCard from "./components/CollectionCard";

import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  //

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
        <Main />
        <PunkList punkListData={punkListData} />
      </div>
    </div>
  );
}

export default App;
