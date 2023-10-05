import React, { useState } from "react";

function App() {
  const [headingTxt, setHeadingTxt] = useState("Hello");
  const [bgColor, setBgColor] = useState(false);

  function handleClick() {
    setHeadingTxt("Submitted");
  }
  function colored() {
    setBgColor(true);
  }
  function uncolored() {
    setBgColor(false);
  }

  return (
    <div className="container">
      <h1>{headingTxt}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: bgColor ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={colored}
        onMouseOut={uncolored}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
