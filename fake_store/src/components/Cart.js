import { BsFillCartFill, BsCart2 } from "react-icons/bs";
import "./product.css";
import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const Cart = ({ cart, decrementCart, incrementCart }) => {
  const [showList, setShowList] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setShowList(!showList);
  };
  const handleShow = () => {
    setShow(true);
    setShowList(!showList);
  };

  function calculateTotal() {
    let total = 0;
    for (let item of cart) {
      total += item.price * item.quantity;
    }
    return total.toFixed(2);
  }

  let content = <></>;
  if (showList) {
    content = (
      <ul>
        {cart.map((el) => {
          return (
            <li key={el.id}>
              <div className="row ">
                <div className="col-6 ">
                  {el.title} {el.price} &euro;
                </div>
                <div className="col-6 text-end  ">
                  <button
                    className="btnCart "
                    onClick={() => decrementCart(el)}
                  >
                    -
                  </button>
                  {el.quantity}
                  <button className="btnCart" onClick={() => incrementCart(el)}>
                    +
                  </button>
                </div>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="alert alert-info">
      <button className="btn cart mb-3" onClick={handleShow}>
        <BsFillCartFill />

        <span className="badge bg-secondary">{cart.length}</span>
      </button>
      <Offcanvas className="alert" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{content}</Offcanvas.Body>
        <div className="text-end">
          Total <BsCart2 />: {calculateTotal()} &euro;
          <hr />
        </div>
      </Offcanvas>
    </div>
  );
};

export default Cart;
