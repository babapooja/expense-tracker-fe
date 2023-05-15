const BASE_URL = "http://localhost:8080/api";

const headers = {
  mode: "cors",
  cache: "no-cache",
  credentials: "same-origin",
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow",
  referrerPolicy: "no-referrer",
};

const httpGet = async (endpoint) => {
  const url = BASE_URL + endpoint;
  const response = await fetch(url, { ...headers, method: "GET" });
  return response.json();
};

const httpPost = async (endpoint, body) => {
  const url = BASE_URL + endpoint;
  const response = await fetch(url, { ...headers, method: "POST", body: body });
  return response.json();
};

export { httpGet, httpPost };
