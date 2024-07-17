const createErrorObject = (msg) => ({ OK: false, msg });


const validateSignup_UserData = (formData) => {
  // get the user formData
  // validate each feild.
  
  const { email, password, username } = formData

  console.log(email , password , username)

  if(!formData) {
    return createErrorObject("An unexpected error occurred. Please try again later")
  }

  // validate username
  if (!username.trim()) {
    return createErrorObject("username Field Is Invalid")
  }

  // validate email
  if (!email.trim()) {
    return createErrorObject("Email Field Is Invalid")
  }
  
  // validate password
  let isPassword_Valid = validatePassword( password );

  if (isPassword_Valid.OK === false) {
    return createErrorObject(isPassword_Valid.msg)
  }

  return {
    OK : true
  }
}



const validatePassword = (password) => {
  // pass length must lies b/w 6 to 8 characters
  // must conatins atleast 1 special char.
  // must contains atleast 3 alphabets
  // must conatins atleast 2 No.


  let errorObj = {
    OK: false,
    msg: ""
  }

  const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;
  const digitPattern = /\d/g;
  const letterPattern = /[a-zA-Z]/g;


  // Check length
  if (password.length < 6 || password.length > 8) {
    return createErrorObject("Password length must be in between 6 and 8 characters.")
  }

  // Check for at least one special character
  if (!specialCharPattern.test(password)) {
    return createErrorObject("Password must contain at least 1 special character.")
  }

  // Check for at least three letters
  const letters = password.match(letterPattern);
  if (!letters || letters.length < 3) {
    return createErrorObject("Password must contain at least 3 Alphabets.")
  }

  // Check for at least two numbers
  const digits = password.match(digitPattern);
  if (!digits || digits.length < 2) {
    return createErrorObject("Password must contain at least 2 numbers.")
  }

  return {
    OK : true
  }
}

export { validateSignup_UserData };
