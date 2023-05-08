import React from "react";
import PropTypes from "prop-types";
import "../style/player.css";

function Player(props) {
  const { name, position } = props;
  return (
    <div className="player">
      <div className="player-name">{name}</div>
      <div className="player-position">Position: {position}</div>
    </div>
  );
}

Player.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.number.isRequired,
};

export default Player;  