import React from "react";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkaListData, setSelectedPunka }) => {
  return (
    <div className="punkaLista">
      {punkaListData.map((punk) => (
        <div onClick={() => setSelectedPunka(punk.token_id)}>
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
