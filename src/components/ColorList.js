import React from "react";
import "./ColorList.css"; // Import CSS file for color classes

function ColorList() {
  // List of top 5 CSS colors with their names
  const colors = [
    { name: "Firebrick", code: "#B22222" },
    { name: "Rebecca Purple", code: "#663399" },
    { name: "Salmon", code: "#FA8072" },
    { name: "Dark Slate Gray", code: "#2F4F4F" },
    { name: "Hot Pink", code: "#FF69B4" }
  ];

  // Create list items for each color using the map function
  const colorElements = colors.map(({ name, code }) => (
    <li key={code} className={`color-item color-${name.toLowerCase().replace(/\s/g, "-")}`}>
      <span className="color-box" style={{ backgroundColor: code }}></span>
      <span className="color-name">{name}</span>
    </li>
  ));

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol className="color-list">
        {/* Render the list items */}
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;

