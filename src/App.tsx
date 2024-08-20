import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import VendorCreatePage from "./vendors/VendorCreatePage";
import VendorEditPage from "./vendors/VendorEditPage";
import VendorsPage from "./vendors/VendorsPage";
import { Toaster } from "react-hot-toast";
import UserEditPage from "./users/UserEditPage";
import UserCreatePage from "./users/UserCreatePage";
import UsersPage from "./users/UsersPage";

function App() {
  return (
    <BrowserRouter>
    
      <div>
        <header className="container-fluid bg-body-secondary py-4 px-5 d-flex justify-content-between border-bottom border-1 border-success border-success-subtle">
          <div>
            <svg
              className="me-2"
              id="logo-35"
              width={50}
              height={39}
              viewBox="0 0 50 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z" className="ccompli1 " fill="#007AFF" />
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

          <nav className="bg-body-secondary vh-100 px-1 py-3 border-end border-2" style={{ width: "18rem" }}>
       
            <ul className="nav nav-pills flex-column ps-4 pe-4">
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
          <Toaster
            toastOptions={{
              success: {
                iconTheme: {
                  primary: "#0d6efd",
                  secondary: "white",
                },
              },
              style: {
                maxWidth: 500,
              },
            }}
          /> 
          <section className="container-fluid p-5">
            <Routes>
              <Route path="/" />
              <Route path="vendors" element={<VendorsPage />} />
              <Route path="vendors/create" element={<VendorCreatePage />} />
              <Route path="vendor/edit/:id" element={<VendorEditPage />} />
              <Route path="/" />
              <Route path="users" element={<UsersPage />} />
              <Route path="users/create" element={<UserCreatePage />} />
              <Route path="users/edit/:id" element={<UserEditPage />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;


