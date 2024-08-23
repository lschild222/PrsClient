import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler} from "react-hook-form";
import { useState } from "react";
import { userAPI } from "../users/UserAPI";
import { User } from "../users/User";
import { Request } from "./Request";
import { requestAPI } from "./RequestAPI";
import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";


function RequestForm() {

const [isDisabled, setIsDisabled] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const requestId = Number(id);
  const [users, setUsers] = useState<User[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Request>({
    defaultValues: async () => {
      let userList = await userAPI.list();
      setUsers(userList);

      if (!requestId) {
        return Promise.resolve(new Request());
      } else {
        setIsDisabled (false);
        return await requestAPI.find(requestId);
      }
    },
  });
  const save: SubmitHandler<Request> = async (request) => {
    try {
      if (request.isNew) {
        await requestAPI.post(request);
      } else {
        await requestAPI.put(request);
      }
      navigate("/requests");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(save)} noValidate>
      <div className="request-header">
        <div className="column1 w-75">
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              id="description"
              className={`form-control ${errors.description && "is-invalid"} `}
              placeholder="Enter Description Here"
              {...register("description", { required: "Description is required" })}
            />
            <div className="invalid-feedback ">{errors?.description?.message}</div>
          </div>

          <div className="mb-3">
            <label htmlFor="justification" className="form-label">
              Justification
            </label>
            <input
              id="justification"
              type="text"
              className={`form-control ${errors.justification && "is-invalid"}`}
              placeholder="Enter Justification for Purchase Here"
              {...register("justification", { required: "Justification is required" })}
            />
            <div className="invalid-feedback">{errors?.justification?.message}</div>
          </div>
        </div>
        <div className="column2 w-50">
          <div className="mb-3">
            <label htmlFor="delivery mode" className="form-label">
              Delivery Mode
            </label>
            <select
              id="delivery mode"
              {...register("deliveryMode", { required: "Delivery mode is required" })}
              className={`form-select ${errors.deliveryMode && "is-invalid"}`}
            >
              <option value="">Select...</option>
              <option value="pickup">Pickup</option>
              <option value="delivery">Delivery</option>
              <option value="signature confirmation">Signature Confirmation</option>
            </select>
            <div className="invalid-feedback">{errors?.deliveryMode?.message}</div>
          </div>
          <div className="mb-3">
            <label htmlFor="status" className="form-label">
              Status
            </label>
            <select
              disabled={isDisabled}
              id="status"
              {...register("status", { required: "Status is required" })}
              className={`form-select ${errors.status && "is-invalid"}`}
            >
              <option value="">Select...</option>
              <option value="NEW">New</option>
              <option value="APPROVED">Approved</option>
              <option value="REJECTED">Rejected</option>
              <option value="REVIEW">Review</option>
            </select>
            <div className="invalid-feedback">{errors?.status?.message}</div>
          </div>

          <div className="mb-3">
            <label htmlFor="delivery mode" className="form-label">
              Requested By
            </label>
            <select id="user" className="form-select" {...register("userId")} disabled>
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.firstname} {u.lastname}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end mt-4">
        <Link className="btn btn-outline-primary me-2" to={"/requests"}>
          Cancel
        </Link>
        <button className="btn btn-primary">
          <svg className="bi pe-none me-2" width={16} height={16} fill="#FFFFFF">
            <use xlinkHref={`${bootstrapIcons}#save`} />
          </svg>
          Save Request
        </button>
      </div>
    </form>
  );
}

export default RequestForm;
