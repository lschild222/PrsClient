import RequestLineForm from "./RequestLineForm";

function RequestLineCreatePage() {
  return (
    <>
      <nav className="d-flex justify-content-between">
        <h4>New Requestline</h4>
      </nav>
      <hr />
      <RequestLineForm />
    </>
  );
}

export default RequestLineCreatePage;
