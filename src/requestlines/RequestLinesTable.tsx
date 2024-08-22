import { Link } from "react-router-dom";
import { Request } from "../requests/Request";
import { RequestLine } from "./RequestLine";

interface RequestLinesTableProps {
  request: Request;
  onRemove: (requestline: RequestLine) => void;
}

function RequestLinesTable({ request, onRemove }: RequestLinesTableProps) {
  return (
    <table className="table table-hover table-light w-50">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {request.requestLines?.map((requestline) => (
          <tr key={requestline.id}>
            <td>{requestline.product?.name}</td>
            <td>{requestline.product?.price}</td>
            <td>{requestline.quantity}</td>

            <td>${(requestline.product?.price ?? 0) * (requestline.quantity ?? 0)} </td>
            <td className="d-flex gap-2">
              <Link to={`/requests/detail/${request.id}/requestline/edit/${requestline.id}`}>edit</Link>
              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  onRemove(requestline);
                }}
              >
                delete
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RequestLinesTable;
