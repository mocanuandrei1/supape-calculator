import React, { useState } from "react";
import styles from "../Assets/Styles/Calculator.module.css";

const Calculator = () => {
  const [pressure, setPressure] = useState("");
  const [deviation, setDeviation] = useState("");
  const [increase, setIncrease] = useState("");
  const [decreaseLiquid, setDecreaseLiquid] = useState("");
  const [decreaseGas, setDecreaseGas] = useState("");

  const calculateResults = () => {
    const parsedPressure = parseFloat(pressure);

    if (isNaN(parsedPressure)) {
      setDeviation("Introdu un numar valid.");
      setIncrease("Introdu un numar valid.");
      setDecreaseLiquid("Introdu un numar valid.");
      setDecreaseGas("Introdu un numar valid.");
    } else {
      // Calculate Deviation
      if (parsedPressure <= 5) {
        setDeviation(`+-0.15`);
      } else {
        const percentageDeviation = parsedPressure * 0.03;
        setDeviation(`+-${percentageDeviation.toFixed(3)}`);
      }

      // Calculate Increase
      if (parsedPressure <= 3) {
        setIncrease(`+-0.5`);
      } else {
        const percentageIncrease = parsedPressure * 0.1;
        setIncrease(`+-${percentageIncrease.toFixed(3)}`);
      }

      // Calculate Decrease for Liquid
      if (parsedPressure <= 3) {
        setDecreaseLiquid(`+-0.6`);
      } else {
        const percentageDecreaseLiquid = parsedPressure * 0.2;
        setDecreaseLiquid(`+-${percentageDecreaseLiquid.toFixed(3)}`);
      }

      // Calculate Decrease for Gas
      if (parsedPressure <= 3) {
        setDecreaseGas(`+-0.5`);
      } else {
        const percentageDecreaseGas = parsedPressure * 0.15;
        setDecreaseGas(`+${percentageDecreaseGas.toFixed(3)}`);
      }
    }
  };

  return (
    <div className={styles.calculator}>
      <div>
        <label>
          <h2 className={styles.presiuneText}>Presiunea de reglare:</h2>
          <input
            type="text"
            value={pressure}
            onChange={(e) => setPressure(e.target.value)}
            placeholder="Introdu presiunea"
          />
        </label>
        <button onClick={calculateResults}>Calculeaza</button>
      </div>
      <div className={styles.result}>
        <h2>Abaterea presiunii de reglare ("a"):</h2>
        <p>{deviation}</p>
      </div>
      <div className={styles.result}>
        <h2>Cresterea presiunii la descridere ("b1"):</h2>
        <p>{increase}</p>
      </div>
      <div className={styles.result}>
        <h2>Scaderea presiunii la inchidere pentru lichide ("b2"):</h2>
        <p>{decreaseLiquid}</p>
      </div>
      <div className={styles.result}>
        <h2>Scaderea presiunii la inchidere pentru gaze si vapori ("b2"):</h2>
        <p>{decreaseGas}</p>
      </div>
    </div>
  );
};

export default Calculator;
