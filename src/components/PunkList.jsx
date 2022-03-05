import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData }) => {
  return (
    <div className="punkaLista">
      {punkListData.map((punk) => (
        <div key={punk.token_id}>
          <div>
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
