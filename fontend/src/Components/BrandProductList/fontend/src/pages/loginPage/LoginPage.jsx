import {Routes , Route} from "react-router-dom"
import LoginForm from "./LoginForm";
import ForgotPassword from "./ForgotPassword";
import PageNotFound from "../../Page_utils/PageNotFound"

function LoginPage() {
  return(
    <Routes>
      <Route path="/" element={<LoginForm />}></Route>
      <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  )
}

export default LoginPage;
