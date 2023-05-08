import React from "react";

const Cell = ({ number, player }) => {
  // Define styles for the cell based on its position
  const styles = {
    backgroundColor: number % 2 === 0 ? "#E8E8E8" : "#FFFFFF",
    width: "50px",
    height: "50px",
    display: "inline-block",
    border: "1px solid black",
    position: "relative",
  };

  // Define styles for the player icon
  const playerStyles = {
    width: "30px",
    height: "30px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div style={styles}>
      <span>{number}</span>
      {/* {player && (
        <img
          style={playerStyles}
          src={"../assets/red.png "}
          alt={`Player ${player}`}
        />
      )} */}
    </div>
  );
};
export default Cell;
