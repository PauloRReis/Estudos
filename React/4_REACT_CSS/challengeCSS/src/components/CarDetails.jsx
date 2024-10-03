import React from "react";
import styles from "./CarDetails.module.css";

const CarDetails = ({ cars }) => {
  return (
    <div>
      <ul>
        {cars.map((car, index) => (
          <li
            key={index}
            className={
              car.cor === "Vermelho" ? styles.redColor : styles.otherColor
            }
          >
            {car.marca}, {car.cor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarDetails;
