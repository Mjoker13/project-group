import { useState } from "react";
import { BsFillCartFill, BsFillTrashFill } from "react-icons/bs";

const Cart = ({ cart, decrementCart, incrementCart }) => {
  const [showList, setShowList] = useState(false);

  const toggleShowList = () => {
    setShowList( !showList);
  };
 
  let content = <></>;
  if (showList) {
    content = (
      <div>
        <ul>
          {cart.map((el) => {
            return (
              <li key={el.id}>
                {el.title} {el.price}
                <button onClick={() => decrementCart(el)}>-</button>(
                {el.quantity})
                <button onClick={() => incrementCart(el)}>+</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="alert alert-info">
      <button className="btn btn-info btn-lg" onClick={toggleShowList}>
        <BsFillCartFill />
        <span className="badge bg-secondary">{cart.length}</span>
      </button>
      {content}
    </div>
  );
};

export default Cart;
