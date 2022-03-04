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
        `https://testnets-api.opensea.io/assets?asset_contract_address=0x20978D62136a8855E29e1Cc6b841f7dacaF578A2&order_direction=asc`
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
