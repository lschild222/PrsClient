import { useEffect, useState } from "react";
import { Request } from "./Request"
import { requestAPI } from "./RequestAPI";
import RequestCard from "./RequestCard";
import toast from "react-hot-toast";

function RequestList() {
  const [requests, setRequests] = useState<Request[]>([]);
  const [busy, setBusy] = useState(false);

  async function loadRequests() {
    try {
      setBusy(true);
      const data = await requestAPI.list();
      setRequests(data);
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setBusy(false);
    }
  }

  useEffect(() => {
    loadRequests();
  }, []);

  async function remove(request: Request) {
    if (confirm("Are you sure you want to delete this Request?")) {
      if (request.id) {
        await requestAPI.delete(request.id);
        let updatedRequests = requests.filter((v) => v.id !== request.id);
        setRequests(updatedRequests);
      }
    }
  }

  return (
    <>
      {busy && (
        <section className=" d-flex justify-content-center align-items-center align-content-center vh-100">
          <div className=" spinner-border text-primary">
            <span className="visually-hidden">Loading...</span>
          </div>
        </section>
      )}
     
      <section className="">
        <section className="border border-1 p-3 bg-body-secondary rounded d-flex flex-wrap">
          <section className="d-flex flex-wrap gap-5 ">
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
