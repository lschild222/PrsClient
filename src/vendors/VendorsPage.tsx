import { Link } from "react-router-dom";
import VendorList from "./VendorList";

function VendorsPage() {
  return (
    <>
      <header className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2">
        <h2>Vendors</h2>
        <Link to="/vendors/create" role="button" className="btn btn-outline-primary">
          + Add Vendor
        </Link>
      </header>

      <hr />
      <VendorList />
    </>
  );
}

export default VendorsPage;
