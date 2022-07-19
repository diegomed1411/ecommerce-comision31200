import React from "react";
import "./Item.css";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const Item = ({item}) => {
  return (
    <>
      <Card className="itemCard" style={{ width: "15rem" }}>
        <Card.Img variant="top" className="itemPic" src={item.pictureUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text className="cardShortDescription">
            {item.shortDescription}
          </Card.Text>
          <Card.Text className="cardPrice">
            <span>$ </span>{item.price}
          </Card.Text>
          <Card.Text className="cardItemCode">
            <span>cod: </span>{item.id}
          </Card.Text>
          <Link to={`/detalle/${item.id}`}>
          <Button className="btnDetalles" variant="primary">Ver Detalles</Button>
          </Link>

        </Card.Body>
      </Card>


    </>
  );
};

export default Item;
