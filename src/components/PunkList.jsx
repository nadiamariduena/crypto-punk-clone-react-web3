import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  //
  //
  return (
    <div className="punkaLista">
      {punkListData.map((punk) => (
        <div onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            key={punk.token_id}
            id={punk.token_id}
            name={punk.name}
            traits={punk.token_id}
            image={punk.image_url}
          />
        </div>
      ))}
    </div>
  );
};

export default PunkList;
