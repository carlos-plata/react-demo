import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
  return (
    <div>
      <h1>Charlie Silver</h1>
      <p>Somethin about me...</p>
      <ol>
        <li>Cuernavaca</li>
        <li>Costa Rica</li>
        <li>Greece</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<MyInfo />, document.getElementById("root"));
