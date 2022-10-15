import React, { useState } from "react";
import "./App.css";

function Car() {
  // useState hook
  // example 1, to update car details
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({
    brand: "BMW",
    year: "1990",
    color: "red",
  });

  const updateCarDetails = () => {
    setCar({
      brand: "Ford",
      year: "2020",
      color: "black",
    });
  };
  const resetCarDetails = () => {
    setCar({
      brand: "BMW",
      year: "1990",
      color: "red",
    });
  };
  const updateCarColor = () => {
    setCar((prevCarDetails) => {
      return {
        ...prevCarDetails,
        color: "blue",
      };
    });
  };



  return (
    <div style={{ height: "30rem" }}>
      <p>Example one</p>
      <h2>Details of my car</h2>
      <p>
        My <b>{car.brand}</b> is a model from <b>{car.year}</b> and it's{" "}
        <b>{car.color}</b> in color
      </p>
      <button
        type="button"
        onClick={updateCarDetails}
        style={{ backgroundColor: "blue", color: "#fff" }}
      >
        Update Details
      </button>
      <button
        type="button"
        onClick={resetCarDetails}
        style={{ backgroundColor: "red", color: "#fff" }}
      >
        Reset Details
      </button>
      <button
        type="button"
        onClick={updateCarColor}
        style={{ backgroundColor: "green", color: "#fff" }}
      >
        Update Car Color
      </button>
    </div>
  );
}

export default Car;
