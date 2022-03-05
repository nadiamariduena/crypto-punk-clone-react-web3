import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  //
  //

  //
  //
  return (
    <div className="punkaLista">
      {punkListData.map((punk) => (
        <div key={punk.token_id}>
          <div onClick={() => setSelectedPunk(punk.token_id)}>
            <CollectionCard
              id={punk.token_id}
              name={punk.name}
              traits={punk.traits}
              image={punk.image_preview_url}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PunkList;
