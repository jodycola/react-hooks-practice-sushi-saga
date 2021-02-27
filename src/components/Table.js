import React, { useState } from "react";

function Table({ budget, addMoneyToBudget, plates = [] }) {
  const [value, setValue] = useState(0)

  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div className="empty-plate" style={{ top: -7 * index }} />
  ));
   
  function handleChange(event){
    const value = event.target.value
    setValue(value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    setValue(value)
    addMoneyToBudget(value)
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${budget} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
        <form onSubmit={handleSubmit}>
          <input type="number" value={value} onChange={handleChange}/>
          <button type="submit">Add $$$</button>
        </form>
      </div>
    </>
  );
}

export default Table;
