import "./product.css";

const Product = ({ product, incrementCart, newProd }) => {
  // const handleClick = () => {
  //   incrementCart(product);
  // };

  return (
    <div className="card h-100">
      <div className="card-header text-center" style={{ height: "200px" }}>
        <img src={product.image} alt="product" style={{ height: "100%" }} />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h4>{product.title}</h4>
        <div>{product.price} &euro;</div>
        <div>{product.quantity}</div>
      </div>
      <div className="card-footer text-center">
        <button
          className="btn btn-info"
          onClick={() => {
            newProd(product);
            incrementCart(product);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
