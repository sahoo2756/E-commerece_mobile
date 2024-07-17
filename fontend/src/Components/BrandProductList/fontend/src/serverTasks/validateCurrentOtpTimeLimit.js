import axios from "axios"
import { BASE_URL, API_KEY } from "../Utility/Constant.utility.js"


async function validateCurrentOtpTimeLimit(email) {
    try {
        let res = await axios.get(`${BASE_URL}/api/auth/OtpTimeLimit?email=${email}&API_KEY=${API_KEY}`)
        if (res.data.isSuccess) {
            return { OK: true, msg: "Time is Available for Submiision of Otp" }
        } else {
            throw new Error("");
        }
    } catch (error) {
        console.log(error.response);
        return { OK: false, msg: "An unexpected error occurred. Please try again later" }
    }
}

export { validateCurrentOtpTimeLimit }