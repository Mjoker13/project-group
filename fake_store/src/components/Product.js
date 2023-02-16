import "./product.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Product = ({ product, incrementCart }) => {
  return (
    <div className="card h-100  shadow-lg  col-sm-8">
      <div
        className="card-header text-center "
        style={{ height: "150px" }}
      >
        <img src={product.image} alt="product" style={{ height: "100%" }} />
      </div>
      <div className="card-body d-flex flex-column justify-content-between">
        <h4>{product.title}</h4>
        <div className="row  d-flex">
          <div className=" col-6"> {product.price} &euro;</div>
          <div className=" col-6 text-end">
            {["bottom"].map((placement) => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                    <strong>{product.description}</strong>.
                  </Tooltip>
                }
              >
                <Button variant="secondary"> info</Button>
              </OverlayTrigger>
            ))}
          </div>
        </div>
      </div>
      <div className="card-footer text-center">
        <button
          className="btn btn-info shadow-lg"
          onClick={() => {
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
