import React from "react";
import "./Item.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Item = ({item}) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>
            {item.shortDescription}
          </Card.Text>
          <Card.Text>
            {item.price}
          </Card.Text>
          <Card.Text>
            {item.id}
          </Card.Text>
          <Link to={`/detalle/${item.id}`}>
          <Button variant="primary">Ver Detalles</Button>
          </Link>

        </Card.Body>
      </Card>
    </>
  );
};

export default Item;
