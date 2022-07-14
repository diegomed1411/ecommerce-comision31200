import { useContext, useState } from "react";
import { CartContext } from "../../context/cartContext";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";


function ItemDetail({ item }) {
  const { cartList, addToCart } = useContext(CartContext);
  const onAdd = (cantidad) => {
    addToCart({ ...item, quantity: cantidad });
  };

 const [actualQty, setActualQty] = useState(0)
useEffect(() => {
  cartList.map((product)=>{product.item.id === item.id? setActualQty(product.item.quantity): setActualQty(0)})
}, [cartList])


  return (
    <>
      <div className="container">
        <Row>
          <Col xs={12} md={6}>
            <div className="product-image-container">
              <center>
                <img id="item-display" src={item.pictureUrl} alt=""></img>
              </center>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="product-description-container">
              <div className="product-title">
                <h3>{item.title}</h3>
              </div>
              <div className="product-desc">{item.description}</div>
              <hr />
              <div className="product-price">
                <span>Precio </span>
                {item.price}
              </div>
              <div className="product-stock">
                <span>Stock </span>
                {item.stock}
              </div>
              <hr />
              <div className="btn-group cart">
                <ItemCount
                  price={item.price}
                  stock={item.stock}
                  initial= {actualQty}
                  onAdd={onAdd}
                />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ItemDetail;
