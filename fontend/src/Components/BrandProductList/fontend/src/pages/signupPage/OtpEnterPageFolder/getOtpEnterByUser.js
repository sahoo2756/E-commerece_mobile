function getOtpEnterByUser(otpRef) {
    try {
        let otp = "";

        // Loop through each input field in otpRef.current
        for (let i = 0; i < otpRef.current.length; i++) {
            let inputValue = otpRef.current[i].value;

            // Check if input value is empty
            if (!inputValue) {
                throw new Error("Empty input found");
            }

            // Concatenate input value to otp
            otp += inputValue;
        }

        // Return success status and concatenated OTP entered by user
        return { OK: true, otp };

    } catch (error) {
        return { OK: false, msg: "Unexpected error Occured! Plese try Again Later" }
    }
}

export { getOtpEnterByUser }