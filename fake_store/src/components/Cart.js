import { useState } from "react";
import { BsFillCartFill, BsFillTrashFill } from "react-icons/bs";

const Cart = ({ cart, decrementCart, incrementCart }) => {
  const [showList, setShowList] = useState(false);

  const toggleShowList = () => {
    setShowList(!showList);
  };
  ////////////////////////////////////////////
  const [items, setItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const addToCart = (item) => {
    const newItems = [...items];
    const existingItemIndex = newItems.findIndex((i) => i.id === item.id);
    if (existingItemIndex !== -1) {
      newItems[existingItemIndex].quantity += item.quantity;
    } else {
      newItems.push(item);
    }
    setItems(newItems);
    setTotalQuantity(totalQuantity + item.quantity);
  };

  const removeFromCart = (item) => {
    const newItems = items.filter((i) => i.id !== item.id);
    setItems(newItems);
    setTotalQuantity(totalQuantity - item.quantity);
  };

  ////////////////////////////////////////////
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
