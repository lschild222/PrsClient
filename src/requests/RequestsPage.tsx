import { Link } from "react-router-dom";
import RequestList from "./RequestList";
import "bootstrap/dist/css/bootstrap.min.css";

function RequestsPage() {
  return (
    <>
       <header className="d-flex justify-content-between mb-0 ">
        <h2>Requests</h2>
        <Link to="/requests/create" role="button" className="btn btn-outline-primary">
          + Add New Request
        </Link>
      </header>

      <hr />
      <div className="mt-1">
        <RequestList />
      </div>
    </>
  );
}

export default RequestsPage;