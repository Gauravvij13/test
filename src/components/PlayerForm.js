import React, { useContext } from "react";
import { Col } from "react-bootstrap";
import { PlayerContext } from "../context/PlayerContextProvider";

const PlayerForm = () => {
  const { handleChange, verifyCheck, data } = useContext(PlayerContext);

  return (
    <Col className="card mr-3" md={12}>
      {data.data.country.map((country) => (
        <form key={country.countryId}>
          <h3>{country.name}</h3>
          <ul>
            {country.players.map((player) => {
              return (
                <li key={player.id}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    {...(verifyCheck(player.id, country.countryId)
                      ? { checked: "true" }
                      : {})}
                    onChange={() =>
                      handleChange(country.countryId, country.name, player)
                    }
                  />
                  <span>{player.name}</span>
                </li>
              );
            })}
          </ul>
        </form>
      ))}
    </Col>
  );
};

export default PlayerForm;
