import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { SyntheticEvent } from "react";
import { Request } from "./Request";

interface RequestCardProps {
  request: Request;
  onRemove: (request: Request) => void;
}
function RequestCard({ request, onRemove }: RequestCardProps) {
  return (
    <div className="card mt-" style={{ width: "18rem" }}>
      <div className="progress">
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: "60%" }}
          aria-valuenow={60}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <div className="card-body">
        <div className=" d-flex justify-content-between  ">
          <div className="mb-4">
            <h5 className="card-title">{request.name}</h5>
            <span className="">${request.price} /each</span>
          </div>

          <Dropdown aria-expanded="false">
            <Dropdown.Toggle variant="" className="no-caret">
              <svg className=" m-2 text-primary" width={30} height={20} fill="currentColor">
                <use xlinkHref="../node_modules/bootstrap-icons/bootstrap-icons.svg#three-dots-vertical" />
              </svg>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <li>
                <NavLink to={`/requests/edit/${request.id}`} className="dropdown-item">
                  Edit
                </NavLink>
              </li>
              <li>
                <a
                  className="small dropdown-item"
                  onClick={(event: SyntheticEvent) => {
                    event.preventDefault();
                    onRemove(request);
                  }}
                >
                  Delete
                </a>
              </li>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <section>
          <p className="text-secondary m-0 p-0">{request.vendor?.name}</p>
          <mark className=" rounded card-text bg-primary-subtle text-secondary ">{request.partNbr}</mark>
        </section>
      </div>
    </div>
  );
}
export default RequestCard;
