import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({ sushis, sushiIndex, addMoreSushi, eatSushi }) {

  const sushiData = sushis.slice(sushiIndex, sushiIndex + 4)
  .map((sushi) => {
    return <Sushi 
              key={sushi.id} 
              sushi={sushi}
              eatSushi={eatSushi}
            />
    })

  return (
    <div className="belt">
      {sushiData}
      <MoreButton addMoreSushi={addMoreSushi} />
    </div>
  );
}

export default SushiContainer;
