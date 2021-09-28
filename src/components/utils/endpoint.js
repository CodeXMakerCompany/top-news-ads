import axios from "axios";
import { api } from "../config/api.config";

const CodexmakerApi = async (method, path, body = null, options = null) => {
  switch (method) {
    case "POST":
      const postData = await axios
        .post(`${api.backendDevelopmentUri}${path}`, body)
        .then(async (r) => {
          return r?.data;
        })
        .catch(async (e) => {
          return e?.response?.data;
        });
      return postData;
    case "GET":
      const getData = await axios
        .get(`${api.backendDevelopmentUri}${path}`)
        .then(async (r) => {
          return r?.data;
        })
        .catch(async (e) => {
          return e?.response?.data;
        });
      return getData;
    default:
      break;
  }
};

export default CodexmakerApi;
