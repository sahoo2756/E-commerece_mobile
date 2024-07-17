import { BASE_URL, API_KEY } from "../Utility/Constant.utility.js"
import axios from "axios"


async function dispatchOtpThroughEmail(email) {
    try {
        let res = await axios.post(`${BASE_URL}/api/auth/generateOTP`, { API_KEY, email })
        if (res.data.isSuccess) {
            return { OK: true, msg: "OTP Sent Successfully" }
        } else {
            throw new Error("");
        }
    } catch (error) {
        console.log(error.response);
        return { OK: false, msg: "An unexpected error occurred. Please try again later" }
    }
}


export { dispatchOtpThroughEmail }