import { NavLink } from "react-router-dom";


export default function NavPanel() {
  return (
    <div>
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
    </div>
  );
}
