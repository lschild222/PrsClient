import { BASE_URL, checkStatus, delay, parseJSON } from "../utility/fetchUtilities";
import { RequestLine } from "./RequestLine";

let url = `${BASE_URL}/requestlines`;

function replacer(key: string, value: any) {
  if (key === "product") return undefined;
  return value;
}

export const requestlineAPI = {
  list(): Promise<RequestLine[]> {
    return fetch(url).then(delay(400)).then(checkStatus).then(parseJSON);
  },

  listByRequest(requestId: number): Promise<RequestLine[]> {
    let currentUrl = `${BASE_URL}/requests/${requestId}/requestlines?_expand=product`;
    return fetch(currentUrl).then(checkStatus).then(parseJSON);
  },

  find(id: number): Promise<RequestLine> {
    return fetch(`${url}/${id}`).then(checkStatus).then(parseJSON);
  },

  post(requestline: RequestLine) {
    return fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(requestline, replacer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(checkStatus)
      .then(parseJSON);
  },

  put(requestline: RequestLine) {
    return fetch(`${url}/${requestline.id}`, {
      method: "PUT",
      body: JSON.stringify(requestline, replacer),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(checkStatus);
    // .then(parseJSON);
  },

  delete(id: number) {
    return fetch(`${url}/${id}`, { method: "DELETE" }).then(checkStatus);
  },
};