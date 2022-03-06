import React from "react";
import { motion } from "framer-motion";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  //
  //

  //
  //
  return (
    <motion.div className="carousel">
      <motion.div drag="x" className="inner-carousel-punkList">
        {punkListData.map((punk) => (
          <motion.div key={punk.token_id}>
            <div onClick={() => setSelectedPunk(punk.token_id)}>
              <CollectionCard
                id={punk.token_id}
                name={punk.name}
                traits={punk.traits}
                image={punk.image_preview_url}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PunkList;
