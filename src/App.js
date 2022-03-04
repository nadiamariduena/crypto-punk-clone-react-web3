import React, { useState, useEffect } from "react";
import axios from "axios";

//
//
import Header from "./components/Header";
import CollectionCard from "./components/CollectionCard";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
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
      // assign the state to the data
      setPunkaListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="page">
      <div className="app">
        <Header />
        <Main />
        <PunkList punkaListData={punkaListData} />
      </div>
    </div>
  );
}

export default App;
