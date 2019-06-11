import original_axios from "axios";

const axios = original_axios.create({
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  }
});

export default axios;
