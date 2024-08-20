import { Link } from "react-router-dom";
import ProductList from "./ProductList";

function ProductsPage() {
  return (
    <>
      <header className="d-flex justify-content-between mb-0 ">
        <h2>Products</h2>
        <Link to="/vendors/create" role="button" className="btn btn-outline-primary">
          + Add Vendor
        </Link>
      </header>

      <hr />
      <ProductList />
    </>
  );
}

export default ProductsPage;
