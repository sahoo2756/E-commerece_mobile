import { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';




function SignUp_PopUP() {

    function handleClick(e) {
        e.preventDefault();

        setOtpCorect(prev => !prev)
    }

    const [otpCorrect, setOtpCorect] = useState(false);

    const btnAnimation = `transition-all duration-200 ease-in-out delay-75`

    return (

        <div className="bg-white w-[50%] max-h-[400px] rounded-2xl fixed inset-0 m-auto  lato-regular flex items-center text-black shdow-2xl " style={{ boxShadow: " 0 4px 12px rgba(0, 0, 0, 0.2)" }}>

            <div id="left-Login-manuall" className="relative w-[60%] text-nowrap h-full overflow-auto overscroll-contain">

                <button className={`absolute right-4 top-4 flex items-center px-2 hover:bg-purple-600 hover:text-white hover:border-transparent rounded-sm  border border-purple-500  text-xl font-bold text-red-500 ${btnAnimation}`}>X</button>

                <form onSubmit={handleClick} className=" flex flex-col gap-y-10 p-10 h-fit" >
                    <h1 className="text-lg font-bold m-auto">Register User</h1>




                    {otpCorrect === false && <input className="relative w-full bg-transparent border-2 border-black outline-none rounded-md px-3 py-2 placeholder:text-black/60 font-bold placeholder:font-normal" type="number" placeholder="Enter Your Mobile No" />}

                    {otpCorrect && <input className="relative w-full bg-transparent border-2 border-black outline-none rounded-md px-3 py-2 placeholder:text-black/60 font-bold placeholder:font-normal" type="number" placeholder="OTP" />}


                    <button className={`border-2 border-green-600 px-3 py-2 w-fit m-auto rounded-md hover:bg-green-600 hover:text-white  font-semibold ${btnAnimation} duration-100`} >Generate Otp</button>

                </form>

                <p className="text-md text-center mb-5">Allready have an account <button className="text-green-500 font-semibold"> Login</button></p>

            </div>



            {/* Sign-Up with Google or Github UI */}
            <div id="right-signup-with-google-OR-github" className={`w-[40%] h-full rounded-md text-white  flex flex-col justify-center gap-y-10 items-center `} style={{ background: "linear-gradient( #8628E2, #3D02F1)" }}>

                <div className="flex items-center gap-x-2  border-2 border-white rounded-full px-5 py-2 cursor-pointer">
                    <p className={` w-fit font-semibold ${btnAnimation}`}> Sign Up With Google </p>
                    <GoogleIcon />
                </div>

                <div className="flex items-center gap-x-2 border-2 border-white rounded-full px-5 py-2 cursor-pointer">
                    <p className={`w-fit font-semibold ${btnAnimation}`}> Sign Up With Github </p>
                    <GitHubIcon />
                </div>

            </div>


        </div>
    )
}

export default SignUp_PopUP