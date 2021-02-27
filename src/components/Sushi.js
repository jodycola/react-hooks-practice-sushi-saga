import React from "react";

function Sushi({ sushi, eatSushi }) {

  function handleClick() {
    if (!sushi.eaten) {
      eatSushi(sushi)
    } else {
      return
    }
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {sushi.eaten ? <strong>Chill bruh</strong> : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
