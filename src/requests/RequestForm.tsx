import { Link, NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { userAPI } from "../users/UserAPI";
import { User } from "../users/User";
import { Request } from "./Request";
import { requestAPI } from "./RequestAPI";


function RequestForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const requestId = Number(id);
  const [users, setUser] = useState<User[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Request>({
    defaultValues: async () => {
      let userList = await userAPI.list();
      setUser(userList);

      if (!requestId) {
        return Promise.resolve(new Request());
      } else {
        return await requestAPI.find(requestId);
      }
    },
  });

  const save: SubmitHandler<Request> = async (request) => {
    try {
      return (
        <>
          {busy && (
            <section className=" d-flex justify-content-center align-items-center align-content-center vh-100">
              <div className=" spinner-border text-primary">
                <span className="visually-hidden">Loading...</span>
              </div>
            </section>
          )}
          <header className=" mt-3 ms-4 d-flex justify-content-between">
            <h3 >Requests</h3>
            <Link to={"/requests/create"} className="btn btn-outline-secondary">
              + Add Request
            </Link>
          </header>
          <hr />
          <section className="p-5">
            <section className="border border-1 p-3 bg-body-secondary rounded d-flex flex-wrap">
              <section className="d-flex flex-wrap gap-5 list">
              <div className=" p-1 rounded-3 bg-body-secondary ">
            <div className="p-0 m-2">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Status</th>
                    <th>Total</th>
                    <th>Requested By</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                {requests.map((request) => (
                  <RequestCard key={request.id} request={request} onRemove={remove} />
                ))}
                  </tbody>
              </table>
            </div>
          </div>
              </section>
            </section>
          </section>
    
        </>
      );
    }
    
    export default RequestList;
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
    <div className="container-fluid">
      <div>
        <form className="row g-md-4 needs-validation is-invalid" onSubmit={handleSubmit(save)} noValidate>
          <div className="col-md-5">
            <label htmlFor="vc" className="form-label">
              Request Name
            </label>
            <input
              type="text"
              id="vc"
              {...register("name", {
                required: "Requestname is Required",
              })}
              className={`form-control ${errors.name && "is-invalid"} `}
              placeholder="Enter Request Name"
            />
            <div className="invalid-feedback ">{errors?.name?.message}</div>
          </div>
          <div className="col-md-6">
            <label htmlFor="partNbr" className="form-label">
              Part Number
            </label>
            <input
              type="text"
              id="partNbr"
              {...register("partNbr", { required: "Part Number is required" })}
              placeholder="Enter Part Number"
              className={`form-control ${errors.partNbr && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.partNbr?.message}</div>
          </div>
          <div className="col-9">
            <label htmlFor="inputAddress" className="form-label">
              Price
            </label>
            <input
              type="text"
              id="inputAddress"
              {...register("price", {
                required: "Price is required",
              })}
              placeholder="Enter Price"
              className={`form-control ${errors.price && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.price?.message}</div>
          </div>
          <div className="col-5">
            <label htmlFor="unit" className="form-label">
              Unit
            </label>
            <input
              type="text"
              id="unit"
              {...register("unit", { required: "Unit is required" })}
              placeholder="Enter Unit"
              className={`form-control ${errors.unit && "is-invalid"}`}
            />
            <div className="invalid-feedback">{errors?.unit?.message}</div>
          </div>
          <div className="col-md-4">
            <label htmlFor="user" className="form-label">
              User
            </label>
            <select
              id="user"
              {...register("userId", { required: "User is Required" })}
              className={`form-select ${errors.userId && "is-invalid"}`}
            >
              <option value="">Select...</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
            <div className="invalid-feedback">{errors?.userId?.message}</div>
          </div>

          <div className=" offset-7">
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
      </div>
    </div>
  );
}

export default RequestForm;
