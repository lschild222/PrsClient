import Header from "./Header";
import { Toaster } from "react-hot-toast";
import NavPanel from "./NavPanel";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header />
      <main className="d-flex">
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
        <NavPanel />
        <section className="content container-fluid mx-5 my-2 py-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
