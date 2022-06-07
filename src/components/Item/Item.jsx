import React from "react";
import "./Item.css";
import { Button, Card } from "react-bootstrap";

const Item = (item) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.description}
          </Card.Text>
          <Card.Text>
            {item.price}
          </Card.Text>
          <Card.Text>
            {item.id}
          </Card.Text>
          <Button variant="primary">Ver Detalles</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
