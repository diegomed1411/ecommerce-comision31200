import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import './ItemDetail.css'
import ItemCount from "../ItemCount/ItemCount";
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

function ItemDetail({ item }) {
  const { cartList, addToCart } = useContext(CartContext);
  const onAdd = (cantidad) => {
    addToCart({ ...item, quantity: cantidad });
  };

  const [actualQty, setActualQty] = useState(0);
  useEffect(() => {
      console.log("el id recibido en itemDetail es ", item.id)
      console.log("el carrito esta de esta forma ", cartList)
      let actualCartItem = cartList.filter((i) => i.item.id === item.id);
      setActualQty((actualCartItem[0].item.quantity) ? 0 : actualCartItem);
      console.log("item de carrito en cuestion", actualCartItem[0].item.quantity)
  }, []);  

  return (
    <>
    <div className="container">

    
  <Row>
    <Col xs={12} md={6}>                
    <div className="product-image-container">
                  <center>
                    <img id="item-display" src={item.pictureUrl} alt=""></img>
                  </center>
                </div></Col>
    <Col xs={12} md={6}>
    <div className="product-description-container">
    <div className="product-title"><h3>{item.title}</h3></div>
                <div className="product-desc">{item.description}</div>
                <hr />
                <div className="product-price"><span>Precio </span>{item.price}</div>
                <div className="product-stock"><span>Stock </span>{item.stock}</div>
                <hr />
                <div className="btn-group cart">
                <ItemCount price= {item.price} stock={item.stock} initial= {actualQty} onAdd={onAdd}/>
                </div>
                </div>
    </Col>
  </Row>
  </div>
    </>
  );
};

export default ItemDetail;
