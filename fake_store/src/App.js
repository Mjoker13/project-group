import { useState, useEffect } from "react";
import { getData } from "./api";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const handleDeleteClick = (product) => {
    console.log(cartProducts);
    const newCart = cartProducts.filter((el) => {
      if (el.id === product.id) {
        el.quantity--;
        if (el.quantity === 0) {
          return false;
        }
      }
      return true;
    });
    setCartProducts(newCart);
  };

  // create new product
  const handleAddClick = (product) => {
    let found = false;
    let newCart = cartProducts.filter((el) => {
      return true;
    });
    newCart.forEach((el) => {
      if (el.id === product.id) {
        el.quantity++;
        found = true;
      }
    });

    if (!found) {
      const newProduct = {
        id: product.id,
        title: product.title,
        quantity: 1,
        price: product.price,
        index: cartProducts.length,
      };
      const newCart2 = [...newCart, newProduct];
      setCartProducts(newCart2);
    } else {
      setCartProducts(newCart);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      const result = await getData();
      setData(result);
    };
    loadData();
  }, []);

  return (
    <div className="container ">
      <Cart
        cart={cartProducts}
        decrementCart={handleDeleteClick}
        incrementCart={handleAddClick}
      />
      <div className="row justify-content-center">
        <ProductList products={data} incrementCart={handleAddClick} />
      </div>
    </div>
  );
};

export default App;
