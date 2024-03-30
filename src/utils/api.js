import { BASEURL, USERNAME, PASSWORD } from "./constants";

const checkServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};
// get today's 100 patterns
const getPatterns = async () => {
  const res = await fetch(`${BASEURL}/patterns/search.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
    },
  });
  return checkServerResponse(res);
};

// get today's 100 patterns in crochet
const getCrochetPatterns = async () => {
  const res = await fetch(`${BASEURL}/patterns/search.json?craft=crochet`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
    },
  });
  return checkServerResponse(res);
};

// get today's 100 patterns in knitting
const getKnittingPatterns = async () => {
  const res = await fetch(`${BASEURL}/patterns/search.json?craft=knitting`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: "Basic " + btoa(`${USERNAME}:${PASSWORD}`),
    },
  });
  return checkServerResponse(res);
};

export { getPatterns, getCrochetPatterns, getKnittingPatterns };
