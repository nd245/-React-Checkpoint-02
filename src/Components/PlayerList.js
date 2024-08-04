import React from "react";
import Player from "./Player";
import players from "./players";

const PlayerList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {players.map((player, index) => (
        <Player style={{ border: "10px" }} key={index} {...player} />
      ))}
    </div>
  );
};

export default PlayerList;
