import React from "react";
import PropTypes from "prop-types";
import "../style/dice.css";

function Dice(props) {
  const { roll } = props;
  return (
    <div className="dice">
      <span className={`dot dot-${roll}`}></span>
    </div>
  );
}

Dice.propTypes = {
  roll: PropTypes.number.isRequired,
};

export default Dice;
