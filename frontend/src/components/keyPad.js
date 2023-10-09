import React from "react";

function Keypad({ selectedDigits, setSelectedDigits }) {
  const toggleDigit = (digit) => {
    if (selectedDigits.includes(digit)) {
      setSelectedDigits(selectedDigits.filter((d) => d !== digit));
    } else {
      setSelectedDigits([...selectedDigits, digit]);
    }
  };

  const digitStyle = (digit) => {
    return {
      color: selectedDigits.includes(digit) ? "black" : "black",
      backgroundColor: selectedDigits.includes(digit) ? "#21C5FF" : "white",
      width: "50px",
      height: "50px",
      margin: "10px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    };
  };

  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {digits.map((digit) => (
        <button
          key={digit}
          style={digitStyle(digit)}
          onClick={() => toggleDigit(digit)}
        >
          {digit}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
