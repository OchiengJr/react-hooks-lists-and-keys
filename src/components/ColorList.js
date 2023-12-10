import React from "react";

function ColorList() {
  // List of top 5 CSS colors
  const colors = ["firebrick", "rebeccapurple", "salmon", "darkslategray", "hotpink"];

  // Create list items for each color using the map function
  const colorElements = colors.map((color) => (
    <li key={color} style={{ color }}>{color}</li>
  ));

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {/* Render the list items */}
        {colorElements}
      </ol>
    </div>
  );
}

export default ColorList;

