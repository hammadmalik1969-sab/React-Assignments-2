import React, { useState } from "react";
import MenuItem from "./menuitem";
import "./index.css";

function App() {
  const menu = [
    { id: 1, name: "Chicken Biryani", price: 500, isSpicy: true },
    { id: 2, name: "Beef Biryani", price: 600, isSpicy: false },
    { id: 3, name: "Zinger Burger", price: 400, isSpicy: true },
    { id: 4, name: "Fries", price: 200, isSpicy: false },
  ];

  const [showNonSpicy, setShowNonSpicy] = useState(false);

  const filteredMenu = showNonSpicy
    ? menu.filter((item) => item.isSpicy === false)
    : menu;

  return (
    <div className="container">
      <h1>Biryani Menu</h1>

      <button
        className="btn"
        onClick={() => setShowNonSpicy(!showNonSpicy)}
      >
        Show Non-Spicy Only
      </button>

      <div className="menu-list">
        {filteredMenu.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            isSpicy={item.isSpicy}
          />
        ))}
      </div>
    </div>
  );
}

export default App;