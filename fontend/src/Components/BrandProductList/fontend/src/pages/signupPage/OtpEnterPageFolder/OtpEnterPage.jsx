import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useCurrentUserDetails } from "../../../context/currentUserDetails.context";



function OtpEnterPage({ prop }) {

    const { formData } = prop;
    const currentUserobj = useCurrentUserDetails();
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()


    const otpRef = useRef([]);


    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">

            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleOtpSubmission({ otpRef, formData, currentUserobj , navigate})
                    // setIsLoading((prev) => !prev);
                    // handleSubmit({ navigate, otpRef, email, password, fullname, setEmail, setPassword, setUserName, setIsUserLoggedIn });
                }}
                className="bg-white p-8 rounded shadow-md text-center">
                <h2 className="mb-6 text-2xl font-semibold">Enter OTP</h2>
                <MakeOtpEnteredBox otpRef={otpRef} />
                <button
                    type="submit"
                    className={`bg-blue-500 ${isLoading ? "opacity-[0.5] cursor-not-allowed" : "hover:bg-blue-700"} text-white px-4 py-2 rounded`}
                // disabled={isLoading}
                >
                    {/* {isLoading ? "Verifying..." : "Verify OTP"} */}
                    Verify Otp
                </button>
            </form>

            <ToastContainer />
        </div>
    );
}
export { OtpEnterPage }



function MakeOtpEnteredBox({ otpRef }) {

    const handleChange = (e, index) => {
        if (e.target.value.length === 1 && index < otpRef.current.length - 1) {
            otpRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && index > 0 && !otpRef.current[index].value) {
            otpRef.current[index - 1].focus();
        }
    };

    return (
        <div className="flex space-x-2 mb-6">
            {Array(4)
                .fill(0)
                .map((_, index) => (
                    <input
                        key={index}
                        type="number"
                        maxLength={1}
                        required={true}
                        className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ref={(e) => (otpRef.current[index] = e)}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                    />
                ))}
        </div>
    )
}






import { toastError, toastSuccess } from "../../../Page_utils/ToastPopUp";
import { getOtpEnterByUser } from "./getOtpEnterByUser";
import { validateCurrentOtpTimeLimit } from "../../../serverTasks/validateCurrentOtpTimeLimit";
import { verifyOtpMatch } from "../../../serverTasks/verifyOtpMatch";
import { storeRegisteredUserData } from "../../../serverTasks/storeRegisteredUserData.js";

async function handleOtpSubmission({ otpRef, formData, currentUserobj , navigate}) {

    let otpEnterByUser = ""

    // get otp enter by user 
    let res = getOtpEnterByUser(otpRef)
    if (res.OK) {
        otpEnterByUser = res.otp
    } else {
        toastError({ message: "Unexpected error Occured! Plese try Again Later" })
    }

    // check otp time limit in DB
    res = await validateCurrentOtpTimeLimit(formData.email || "")
    if (res.OK === false) {
        toastError("Otp Is Expire ! Please Click on [resend otp ] btn");
    }

    // verify otp
    res = await verifyOtpMatch(formData.email, otpEnterByUser)
    if (res.OK === false) {
        toastError("Invalid OTP")
    }

    // store new account info in DB
    res = await storeRegisteredUserData(formData);

    if (res.OK === false) {
        toastError("Unexpected Error Occured ! Please Try Again Later")
    }

    toastSuccess("Congratulation.... Account Created Successfully");
    const {setEmail , setUserName , setIsUserLoggedIn,} = currentUserobj
    setTimeout(() => {
        setEmail(formData.email);
        setUserName(formData.username);
        setIsUserLoggedIn(true);
        navigate('/')
    }, 2500);

}