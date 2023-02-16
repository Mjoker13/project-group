import { useState, useEffect } from "react";
import { getData } from "./api";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {
  const [data, setData] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const handleProductClick = (product) => {
    const newCart = [...cartProducts, product];
    setCartProducts(newCart);
  };

  const handleDeleteClick = (product) => {
    // creare un nuovo array con tutti i produttoi del carrelllo
    const newCart = cartProducts.filter((el) => {
      return el.id !== product.id;
    });
    setCartProducts(newCart);
  };

  // create new product
  const newProd = (product) => {
    let newProduct;
    let found = false;
    console.log(cartProducts);
    let newCart = cartProducts.filter((el) => {
      return true;
    });
    console.log(newCart);
    newCart.forEach((el) => {
      if (el.id == product.id) {
        el.quantity++;
        found = true;
      }
    });
    console.log("sono il new cart", newCart);
    if (!found) {
      newProduct = {
        id: product.id,
        title: product.title,
        quantity: 1,
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
    <div className="container">
      <Cart cart={cartProducts} decrementCart={handleDeleteClick} />
      <ProductList
        products={data}
        incrementCart={handleProductClick}
        newProd={newProd}
      />
    </div>
  );
};

export default App;
