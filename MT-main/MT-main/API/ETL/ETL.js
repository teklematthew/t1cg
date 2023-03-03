import fetch from "node-fetch";
import { transform } from "./transform.js";
import { load } from "./load.js";

export const extract = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const headerDate =
      res.headers && res.headers.get("date")
        ? res.headers.get("date")
        : "no response date";
    console.log("Status Code:", res.status);
    console.log("Date in Response header:", headerDate);
    const users = await res.json();
    let transformedAPI = users.map((user) => transform(user));

    load(transformedAPI);
  } catch (err) {
    console.log(err.message);
  }
};
extract();
