import Product from "./Product";

const ProductList = ({ products, incrementCart }) => {
  //console.log(products, incrementCart);
  const content = products.map((el) => {
    return (
      <div key={el.id} className="col-12 col-sm-6 col-lg-4">
        <Product product={el} incrementCart={incrementCart}  />
      </div>
    );
  });

  return <div className="row gy-3 justify-content-center">{content}</div>;
};

export default ProductList;
