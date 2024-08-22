import RequestForm from "./RequestForm";
export default function RequestCreatePage() {
  return (
    <>
      <nav className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2">
        <h2>Add New Request</h2>
      </nav>

      <section className="bg-body-secondary gap-5 p-4 rounded-4">
      {/* <section className="d-flex bg-light gap-5 p-4 rounded-4 flex-wrap"> */}

        <RequestForm />
      </section>
    </>
  );
}