import Cookies from "js-cookie";
import axios from "axios";
import { API_KEY , BASE_URL } from "./Utility/Constant.utility";

async function withCookieValidation() {
  try {
    const token = Cookies.get("authToken");

    if (!token) {
      return null;
    }

    const res = await axios.get(`${BASE_URL}/api/auth?apiKey=${API_KEY}`, { withCredentials: true });
    
    if (!res) {
      return null;
    }

    if (!res.data) return null;

    if (!res.data.data) return null

    return res.data.data

  } catch (error) {
    console.log('error,responee', error.response)
    console.log('error.message', error.message)
    return null
  }
}


export { withCookieValidation }