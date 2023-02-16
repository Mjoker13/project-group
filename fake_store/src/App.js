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

    console.log(newCart);

    setCartProducts(newCart);
  };

  // create new product
  const handleAddClick = (product) => {
    let newProduct;
    let found = false;
    console.log(cartProducts);
    let newCart = cartProducts.filter((el) => {
      return true;
    });
    console.log(newCart);
    newCart.forEach((el) => {
      if (el.id === product.id) {
        el.quantity++;
        found = true;
      }
    });
    console.log("found", found);

    if (!found) {
      const newProduct = {
        id: product.id,
        title: product.title,
        quantity: 1,
        index: cartProducts.length,
      };
      const newCart2 = [...newCart, newProduct];
      setCartProducts(newCart2);
      console.log("newCart2: ", newCart2);
    } else {
      setCartProducts(newCart);
      console.log("newCart: ", newCart);
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
    <div className="container">
      <Cart
        cart={cartProducts}
        decrementCart={handleDeleteClick}
        incrementCart={handleAddClick}
      />
      <ProductList products={data} incrementCart={handleAddClick} />
    </div>
  );
};

export default App;
