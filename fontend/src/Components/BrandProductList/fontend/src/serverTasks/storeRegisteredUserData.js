import axios from "axios";
import { BASE_URL, API_KEY } from "../Utility/Constant.utility.js";

async function storeRegisteredUserData(formData) {
    try {
        const res = await axios.post(`${BASE_URL}/api/user/register`, {
            API_KEY,
            email: formData.email || "",
            password: formData.password || "",
            username: formData.username || ""
        }, { withCredentials: true });

        if(res.data.isSuccess === true) {
            return { OK: true, msg : "User Data Stored Successfully" ,  data: res.data };
        } else {
            throw new Error("")
        }
    } catch (error) {
        console.error("Error in storeRegisteredUserData:", error);
        return { OK: false, msg: "UnExpected Error Occured ! Please try Again Later" };
    }
}

export { storeRegisteredUserData };
