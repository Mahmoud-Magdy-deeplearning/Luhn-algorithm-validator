import React, { useState } from "react";
import Keypad from "./components/keyPad";
import "./App.css";
import { generateTokenService } from "./services/generateTokenService";
import { validateTokenService } from "./services/validateTokenService";

function App() {
  const [selectedDigits, setSelectedDigits] = useState([]);
  const [token, setToken] = useState("");
  const [validationResult, setValidationResult] = useState("");

  const generateToken = async () => {
    try {
      const generatedToken = await generateTokenService(selectedDigits);
      setToken(generatedToken);
    } catch (error) {
      console.error(error);
    }
  };

  const validateToken = async () => {
    try {
      const validationResponse = await validateTokenService(token);
      setValidationResult(validationResponse ? "Valid" : "Invalid");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Token Generator</h1>
      <div className="input-container">
        <label htmlFor="digits" className="label">
          Select digits:
        </label>
        <Keypad
          selectedDigits={selectedDigits}
          setSelectedDigits={setSelectedDigits}
        />
      </div>
      <button onClick={generateToken} className="button">
        Generate Token
      </button>
      <div className="input-container">
        <label className="label">Token: </label>
        <p className="token">{token}</p>
      </div>
      <button onClick={validateToken} className="button">
        Validate
      </button>
      <div className="input-container">
        <label className="label">Validation Result:</label>
        <p
          className={
            validationResult === "Valid"
              ? "validation valid"
              : "validation invalid"
              
          }
        >
          {validationResult}
        </p>{" "}
      </div>
    </div>
  );
}

export default App;
