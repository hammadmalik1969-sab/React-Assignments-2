import React from "react";

function MenuItem({ name, price, isSpicy }) {
  return (
    <div
      style={{
        backgroundColor: isSpicy ? "#ffcccc" : "#ccffcc",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px",
        width: "250px",
      }}
    >
      <h2>
        {name} {isSpicy ? "🔥" : ""}
      </h2>
      <p>Price: Rs {price}</p>
    </div>
  );
}

export default MenuItem;