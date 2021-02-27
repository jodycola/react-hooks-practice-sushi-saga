import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [sushiIndex, setSushiIndex] = useState(0);
  const [budget, setBudget] = useState(200)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(sushis => {
      const updatedSushis = sushis.map((sushi) => {
        return { 
          ...sushi, eaten: false 
        };
      })
    setSushis(updatedSushis)
    })
  }, [])

  function addMoreSushi(){
    setSushiIndex((sushiIndex) => (sushiIndex + 4))
  }

  function eatSushi(eatenSushi){
    if (budget > eatenSushi.price) {
      setBudget((budget) => budget - eatenSushi.price)
      const updatedSushis = sushis.map((sushi) => {
        if (sushi.id === eatenSushi.id) {
          return { ...sushi, eaten: true }
        } else {
          return sushi
        }
      })
    setSushis(updatedSushis)
    } else {
      alert("You need more money")
    }
  }

  function addMoneyToBudget(value){
    setBudget((budget) => budget + parseInt(value))
  }

  return (
    <div className="app">
      <SushiContainer 
      sushis={sushis} 
      sushiIndex={sushiIndex} 
      addMoreSushi={addMoreSushi} 
      eatSushi={eatSushi} />
      <Table budget={budget} addMoneyToBudget={addMoneyToBudget} />
    </div>
  );
}

export default App;
