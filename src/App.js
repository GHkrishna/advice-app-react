import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState("");

  function getData(){
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const adviceText = response.data.slip.advice;
        setAdvice(adviceText);
      })
      .catch((error) => {
        console.error("Error fetching advice:", error);
      });
    }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
    <div className="card">
      <h1>{advice}</h1>
      <button className="button" onClick={getData}>Get Advice</button>
    </div>
    </div>
  );
}

export default App;