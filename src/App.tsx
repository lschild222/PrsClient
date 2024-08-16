import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import VendorCreatePage from "./vendors/VendorCreatePage";
import VendorEditPage from "./vendors/VendorEditPage";
import VendorsPage from "./vendors/VendorsPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <header className="container-fluid bg-body-secondary py-4 px-5 d-flex justify-content-between border-bottom border-1 border-success border-success-subtle">
          <div>
            <svg id="logo-35" width={50} height={39} viewBox="0 0 50 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1" fill="#007AFF" />
              <path
                d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                className="ccustom"
                fill="#312ECB"
              />
            </svg>
            <span>Purchase Request System</span>
          </div>
          <Link className="btn btn-primary" to="/signin">
            <svg className="bi" width={32} height={32} fill="currentColor">
              <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#person" />
            </svg>
            Sign In
          </Link>
        </header>

        <main className="d-flex p-0">
          <nav className="bg-body-secondary vh-100 px-1 py-3 border-end border-2">
            {/* <div className="btn-group dropend">
              <button
                type="button"
                className="btn text-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                + Create New
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item">Create Request</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item">Create Vendor</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item">Create Product</NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item">Create User</NavLink>
                </li>
              </ul>
            </div> */}
            <ul className="nav nav-pills flex-column ps-4">
              <li className="mb-2 text-secondary">Purchases</li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/requests">
                  <svg className="bi me-2" width={16} height={16} fill="currentColor">
                    <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#cart" />
                  </svg>
                  Requests
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/vendors">
                  <svg className="bi me-2" width={16} height={16} fill="currentColor">
                    <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#building" />
                  </svg>
                  Vendors
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/products">
                  <svg className="bi me-2" width={16} height={16} fill="currentColor">
                    <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#grid" />
                  </svg>
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/users">
                  <svg className="bi me-2" width={16} height={16} fill="currentColor">
                    <use xlinkHref="./node_modules/bootstrap-icons/bootstrap-icons.svg#people" />
                  </svg>
                  Users
                </NavLink>
              </li>
            </ul>
          </nav>

          <section className="container-fluid p-5">
            <Routes>
              <Route path="/" />
              <Route path="vendors" element={<VendorsPage />} />
              <Route path="vendors/create" element={<VendorCreatePage />} />
              <Route path="vendors/edit/:id" element={<VendorEditPage />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;

//Main layout for UI

{
  /* <div className="d-flex justify-content-between">
              <h3>Vendors</h3>
              <NavLink to="create-vendor.html" className="btn btn-primary">
                + Create New Vendor
              </NavLink>
            </div>
            <hr /> */
}
{
  /* <section className=" bg-body-secondary rounded d-flex flex-wrap  ">
              <div className="card m-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Vendor</h5>
                  <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                  <p className="card-text p-0 m-0">Address</p>
                  <p className="card-text p-0 m-0">Phone Number</p>
                  <p className="card-text p-0 m-0">Email</p>
                </div>
              </div>
            </section> */
}
