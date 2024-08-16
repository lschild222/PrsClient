import VendorForm from "./VendorForm";
export default function VendorCreatePage() {
  return (
    <>
      <nav className="d-flex justify-content-between pb-4 mb-4 border-bottom border-2">
        <h2>Add New Vendor</h2>
      </nav>

      <section className="d-flex bg-light gap-5 p-4 rounded-4 flex-wrap">
        <VendorForm />
      </section>
    </>
  );
}