import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Link, NavLink, Route, Routes } from "react-router-dom";
import VendorCreatePage from "./vendors/VendorCreatePage";
import VendorEditPage from "./vendors/VendorEditPage";
import VendorsPage from "./vendors/VendorsPage";
import { Toaster } from "react-hot-toast";
import UserEditPage from "./users/UserEditPage";
import UserCreatePage from "./users/UserCreatePage";
import UsersPage from "./users/UsersPage";
import ProductEditPage from "./products/ProductEditPage";
import ProductCreatePage from "./products/ProductCreatePage";
import ProductsPage from "./products/ProductsPage";
import RequestCreatePage from "./requests/RequestCreatePage";
import RequestEditPage from "./requests/RequestEditPage";
import RequestsPage from "./requests/RequestsPage";
import RequestDetailPage from "./requests/RequestDetail";
import RequestLineCreatePage from "./requestlines/RequestLineCreatePage";
import RequestLineEditPage from "./requestlines/RequestLineEditPage";
import { useState } from "react";
import { User } from "./users/User";
import { UserContext } from "./users/UserContext";
import SignInPage from "./account/SignInPage";
import Layout from "./Layout";
import IndexPage from "./IndexPage";

function getPersistedUser() {
  const userAsJSON = localStorage.getItem("user");
  if (!userAsJSON) return undefined;
  const user = JSON.parse(userAsJSON);
  return user;
}

function App() {
  const [user, setUser] = useState<User | undefined>(getPersistedUser());

  return (
    <>
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
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
        <section className="container-fluid ">
    
          <Routes>
            <Route path="/signin" element={<SignInPage />} />
            <Route element={<Layout />} >
            <Route path="/" element={<IndexPage />} />
            <Route path="vendors" element={<VendorsPage />} />
            <Route path="vendors/create" element={<VendorCreatePage />} />
            <Route path="vendor/edit/:id" element={<VendorEditPage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="users/create" element={<UserCreatePage />} />
            <Route path="users/edit/:id" element={<UserEditPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/create" element={<ProductCreatePage />} />
            <Route path="products/edit/:id" element={<ProductEditPage />} />
            <Route path="requests" element={<RequestsPage />} />
            <Route path="requests/create" element={<RequestCreatePage />} />
            <Route path="requests/edit/:id" element={<RequestEditPage />} />
            <Route path="requests/detail/:requestId" element={<RequestDetailPage />} />
            <Route path="/requests/detail/:requestId/requestline/create" element={<RequestLineCreatePage />} />
            <Route
              path="/requests/detail/:requestId/requestline/edit/:requestLineId"
              element={<RequestLineEditPage />}
            />
            </Route>
          </Routes>
        </section>
      </UserContext.Provider>
    </Router>
</>

  );
}

export default App;
