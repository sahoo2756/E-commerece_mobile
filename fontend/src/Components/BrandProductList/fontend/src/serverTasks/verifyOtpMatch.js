import axios from "axios"
import { BASE_URL, API_KEY } from "../Utility/Constant.utility.js"


async function verifyOtpMatch(email , otp) {
    try {
        let res = await axios.get(`${BASE_URL}/api/auth/validateOTP?email=${email}&API_KEY=${API_KEY}$otp=${otp}`)
        if (res.data.isSuccess) {
            return { OK: true, msg: "OTP is Valid" }
        } else {
            throw new Error("");
        }
    } catch (error) {
        return { OK: false, msg: "Invalid OTP" }
    }
}

export { verifyOtpMatch }