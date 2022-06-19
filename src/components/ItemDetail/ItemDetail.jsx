import React, {useState} from "react";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {
  const onAdd= (cantidad)=>{
    console.log(cantidad)
  } 
  return (
    <>
      <div className="container-fluid">
        <div className="content-wrapper">
          <div className="item-container">
            <div className="container">
              <div className="col-md-12">
                <div className="product col-md-3 service-image-left">
                  <center>
                    <img id="item-display" src={item.pictureUrl} alt=""></img>
                  </center>
                </div>
              </div>

              <div className="col-md-6">
                <div className="product-title">{item.title}</div>
                <div className="product-desc">{item.description}</div>
                <hr />
                <div className="product-price"><span>Precio </span>{item.price}</div>
                <div className="product-stock"><span>Stock </span>{item.stock}</div>
                <hr />
                <div className="btn-group cart">
                <ItemCount price= {item.price} stock={item.stock} initial = "0" onAdd={onAdd}/>
                </div>
                
              </div>

              

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
