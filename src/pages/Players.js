import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SelectedPlayerList from "../components/SelectedPlayerList";
import PlayerForm from "../components/PlayerForm";

const Players = () => {
  return (
    <div className="bg">
      <Container className="pt-5">
        <Row>
          <Col md={6}>
            <PlayerForm />
          </Col>
          <Col className="card" md={{ span: 6 }}>
            <SelectedPlayerList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Players;
