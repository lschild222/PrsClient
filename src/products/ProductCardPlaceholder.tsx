import bootstrapIcons from "../assets/bootstrap-icons.svg";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Dropdown from "react-bootstrap/Dropdown";

function ProductCardPlaceholder() {
  return (
    <Card className="" style={{ width: "23rem" }}>
      <ProgressBar now={30} variant="primary-subtle" />
      <address className="py-4 px-4">
        <div className="d-flex justify-content-between1 align-items-center1 justify-content-end">
          {" "}
          <Dropdown className="d-inline">
            <Dropdown.Toggle
              className="btn btn-light"
              style={{ background: "none" }}
            >
              <svg
                className="bi pe-none me-2"
                width={20}
                height={20}
                fill="#007AFF"
              >
                <use xlinkHref={`${bootstrapIcons}#three-dots-vertical`} />
              </svg>
            </Dropdown.Toggle>
          </Dropdown>
        </div>
        <br />
        <span className="fs-4 lh-l fw-medium skeleton skeleton-text"></span>
        <span className="fs-5 fw-light skeleton skeleton-text"></span>{" "}
        {/* <span className="text-lowercase fw-light text-secondary fs-6 skeleton skeleton-text"></span> */}
        <div className="fw-lighter text-secondary  fs-6 mt-5 skeleton skeleton-text"></div>
        <div className="badge text-secondary bg-primary-subtle skeleton skeleton-text">
          {" "}
        </div>
      </address>
    </Card>
  );
}

export default ProductCardPlaceholder