import axios from "axios"
import { BASE_URL, API_KEY } from "../Utility/Constant.utility.js"


async function isEmailExitInDB(email) {
    try {
        let res = await axios.get(`${BASE_URL}/api/auth/isEmailExit?email=${email}&API_KEY=${API_KEY}`)
        if (res.data.isSuccess) {
            return { OK: true, msg: "Email Allready Exit" }
        } else {
            throw new Error("");
        }
    } catch (error) {
        console.log(error.response);
        return { OK: false, msg: "An unexpected error occurred. Please try again later" }
    }
}

export { isEmailExitInDB }