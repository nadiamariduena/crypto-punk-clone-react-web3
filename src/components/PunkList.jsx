import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkaListData }) => {
  return (
    <div className="punkaLista">
      {punkaListData.map((punk) => (
        <div>
          <CollectionCard
            key={punk.token_id}
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
