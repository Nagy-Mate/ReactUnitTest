import { useEffect, useState } from "react";
import type { Pizza } from "../types/Pizza";
import apiClient, { BaseUrl } from "../api/api";

import { Link, useNavigate } from "react-router-dom";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const AllPizza = () => {
  const navigate = useNavigate();
  const [pizzak, setPizzak] = useState<Array<Pizza>>();
  const [kosar, setKosar] = useState<Array<number>>(
    JSON.parse(localStorage.getItem("kosar") ?? "[]"),
  );

  useEffect(() => {
    apiClient
      .get("/pizzak")
      .then((res) => setPizzak(res.data))
      .catch(() => console.log("Hiba"));
  }, []);

  useEffect(() => {
    localStorage.setItem("kosar", JSON.stringify(kosar));
  }, [kosar]);

  const generateCard = (p: Pizza) => {
    return (
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={`${BaseUrl}/kepek/${p.imageUrl}`} />
          <Card.Body>
            <Card.Title>{p.nev}</Card.Title>
            <Card.Text>{p.leiras}</Card.Text>
            <Button
              onClick={() => {
                setKosar([...kosar, Number(p.id)]);
              }}
              variant="success"
            >
              Kosárba
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  };
  return (
    <>
      <Container>
        <Link to="kosar">
          {" "}
          <Button> Korsar</Button>
        </Link>
        <Row xs={"auto"} md={"auto"} className="g-4">
          {pizzak?.map((p) => generateCard(p))}
        </Row>
      </Container>
    </>
  );
};
export default AllPizza;
