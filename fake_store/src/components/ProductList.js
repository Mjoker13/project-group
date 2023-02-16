import Product from "./Product";

const ProductList = ({ products, incrementCart, newProd }) => {
  //console.log(products, incrementCart);
  const content = products.map((el) => {
    return (
      <div key={el.id} className="col-12 col-sm-6 col-lg-4">
        <Product product={el} incrementCart={incrementCart} newProd={newProd} />
      </div>
    );
  });

  return <div className="row gy-3">{content}</div>;
};

export default ProductList;
