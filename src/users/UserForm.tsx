import bootstrapIcons from "bootstrap-icons/bootstrap-icons.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { User } from "./User";

import { userAPI } from "./UserAPI";
import toast from "react-hot-toast";

export default function UserForm() {
  const navigate = useNavigate();

  const { id } = useParams<{ id: string }>();
  const userId = Number(id);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: async () => {
      if (!userId) {
        return Promise.resolve(new User());
      } else {
        return await userAPI.find(userId);
      }
    },
  });

  const save: SubmitHandler<User> = async (user) => {
    try {
      if (user.isNew) {
        await userAPI.post(user);
      } else {
        await userAPI.put(user);
      }

      toast.success("Successfully Saved!");

      navigate("/users");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <form className="d-flex flex-wrap w-75 gap-2" onSubmit={handleSubmit(save)} noValidate>
        <div className="row-1 d-flex flex-row w-100 gap-4">
          <div className="mb-3 w-50">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              id="username"
              type="text"
              className={`form-control ${errors.username && "is-invalid"}`}
              placeholder="Enter user name"
              {...register("username", { required: "Username is required" })}
            />
            <div className="invalid-feedback">{errors?.username?.message}</div>
          </div>

          <div className="mb-3 w-50">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="form-control"
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />
            <div className="invalid-feedback">{errors?.password?.message}</div>
          </div>
        </div>

        <div className="row-2 d-flex flex-row w-100 gap-4">
          <div className="mb-3 w-50">
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
            <input
              id="firstname"
              type="text"
              className="form-control"
              placeholder="Enter first name"
              {...register("firstname", { required: "First name is required" })}
            />
            <div className="invalid-feedback">{errors?.firstname?.message}</div>
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
            <input
              id="lastname"
              type="text"
              className="form-control"
              placeholder="Enter last name"
              {...register("lastname", { required: "Last name is required" })}
            />
            <div className="invalid-feedback">{errors?.lastname?.message}</div>
          </div>
        </div>

        <div className="row-3 d-flex flex-row w-100 gap-4">
          <div className="mb-3 w-50">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              id="phone"
              type="text"
              className="form-control"
              {...register("phone")}
              placeholder="Enter phone number"
            />
          </div>
          <div className="mb-3 w-50">
            <label htmlFor="phone" className="form-label">
              Email
            </label>
            <input
              id="phone"
              type="text"
              className="form-control"
              {...register("email")}
              placeholder="Enter email address"
            />
          </div>

          <div className="row-4 d-flex flex-row w-100 gap-4">
            <div className="mb-3 w-25">
              <label className="form-label">Role</label>
              <br />
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" {...register("isReviewer")} />
                <label className="form-check-label">Reviewer</label>
              </div>
              <div className="form-check form-check-inline">
                <input type="checkbox" className="form-check-input" {...register("isAdmin")} />
                <label className="form-check-label">Admin</label>
              </div>
            </div>

            <div className="row-5 d-flex flex-row justify-content-end w-100 gap-4">
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Link className="btn btn-outline-secondary mt-4 mb-2" to={"/users"}>
                  Cancel
                </Link>
                <button className="btn btn-primary mt-4">Save user</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
