//import { useState } from "react";
import { BsFillCartFill, BsCart2 } from "react-icons/bs";
import "./product.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Cart = ({ cart, decrementCart, incrementCart }) => {
  const [showList, setShowList] = useState(false);
  const [show, setShow] = useState(false);

  const toggleShowList = () => {
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

  const Example=()=> {
    

    

    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>{content}</Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  return (
    <div className="alert alert-info">
      <button className="btn cart mb-3" onClick={toggleShowList}>
        <BsFillCartFill />

        <span className="badge bg-secondary">{cart.length}</span>
      </button>
      <>
        <Example />
      </>
      {content}
      <div className="text-end">
        Total <BsCart2 />: {calculateTotal()} &euro;
        <hr />
      </div>
    </div>
  );
};

export default Cart;
