import React, { useState } from 'react'
import MakeInputField from "../../Page_utils/MakeInputField.jsx";
import { EnterOtpPage } from '../../Page_utils/EnterOtpPage.jsx';

function ForgotPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showEnterOtpPage, setShowEnterOtpPage] = useState(false)

  function handleSubmit(e) { e.preventDefault() }

  if (showEnterOtpPage ) {
    return <EnterOtpPage prop={{handleSubmit}}  />
  }


  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      setShowEnterOtpPage(prev => !prev)
    }}   className='formLoginPageCustomCss bg-white text-black w-[30%] gap-5 mt-10 p-10 rounded-lg'>

      <MakeInputField
        inputType="text"
        id={"emailFeild"}
        requiredOP={true}
        placeholder="Email"
        stateVariable={email}
        stateVariableFunction={setEmail}
        labelText="Email"
      />

      <MakeInputField
        inputType="password"
        id={"newPassword-field"}
        requiredOP={true}
        placeholder="Enter New Password"
        stateVariable={newPassword}
        stateVariableFunction={setNewPassword}
        labelText="New Password"
      />



      <button type="submit"    className='LoginPageLoginBtnCustomCss py-2 text-white mt-3'>
        Change Password
      </button>
    </form>
  )
}

export default ForgotPassword






// EnterOtpPage UI
// OtpValidation js code