import React from "react";

const ItemDetail = (item) => {
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

              <div className="col-md-7">
                <div className="product-title">{item.title}</div>
                <div className="product-desc">{item.description}</div>
                <hr />
                <div className="product-price">{item.price}</div>
                <div className="product-stock">{item.id}</div>
                <hr />
                <div className="btn-group cart">
                  <button type="button" className="btn btn-success">
                    Add to cart
                  </button>
                </div>
                <div className="btn-group wishlist">
                  <button type="button" className="btn btn-danger">
                    Add to wishlist
                  </button>
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
