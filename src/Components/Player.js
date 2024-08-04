import React from "react";
import { Card } from "react-bootstrap";

const Player = ({ name, team, nationality, player_number, age, Img_URL }) => {
  return (
    <div>
      <Card
        style={{
          width: "20rem",
          height: "100%",
          margin: "10px",
          objectFit: "cover",
          border: "2px solid #F0F8FF",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Img
          style={{
            height: "350px",
            width: "100%",
          }}
          variant="top"
          src={Img_URL}
        />
        <Card.Body style={{ marginTop: "100px", backgroundColor: "#F0F8FF" }}>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {" "}
            Team: {team}
            <br />
            Nationality: {nationality}
            <br />
            Jersey Number: {player_number}
            <br />
            Age: {age}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
