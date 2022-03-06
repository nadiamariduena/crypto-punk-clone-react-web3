import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import CollectionCard from "./CollectionCard";

const PunkList = ({ punkListData, setSelectedPunk }) => {
  //
  //
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  //
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  //
  return (
    <motion.div ref={carousel} className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="inner-carousel-punkList"
      >
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
