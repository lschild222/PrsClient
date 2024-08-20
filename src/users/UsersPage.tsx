import { Link } from "react-router-dom";
import UserList from "./UserList";

function UsersPage() {
  return (
    <>
      <header className="d-flex justify-content-between mb-0 ">
        <h2>Users</h2>
        <Link to="/users/create" role="button" className="btn btn-outline-primary">
          + Add User
        </Link>
      </header>

      <hr />
      <UserList />
    </>
  );
}

export default UsersPage;
