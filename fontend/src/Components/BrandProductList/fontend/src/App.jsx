import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./Page_utils/PageNotFound.jsx";
import HomePage from "./pages/homePage/HomePage.jsx";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import SignupPage from "./pages/signupPage/SignupPageWrapper.jsx";
import ErrorPage from "./Page_utils/ErrorPage.jsx";

import UploadProjectWrapper from "./components/uploadProject/UpoloadProjectWrapper.jsx";
import { currentUserDetailsContext } from "./context/currentUserDetails.context.js";
import { cookiesInfoContext } from "./context/cookiesInfo.context.js";
import { withCookieValidation } from "./withCookieValidation.js";
import NavbarWrapper from "./components/navbar/NavbarWrapper.jsx";

const App = () => {
  const [browserCookies, setBrowseerCookies] = useState(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [profileImageURL, setProfileImageURL] = useState("");

  useEffect(() => {
    console.log("user new Data : ")
    console.log({email , password , userName , isUserLoggedIn})
  }, [isUserLoggedIn])


  

  useEffect(() => {
    (async () => {
      let res = await withCookieValidation()
      if(Boolean(res) === true) {
        console.log(res)
        if(res.email && res.username) {
          setEmail(res.email)
          setUserName(res.username)
          setIsUserLoggedIn(prev => !prev);
        }
      }
    })()
  }, []);

  const states = {
    email,
    password,
    userName,
    profileImageURL,
    isUserLoggedIn,
    setEmail,
    setPassword,
    setUserName,
    setProfileImageURL,
    setIsUserLoggedIn,
  };

  return (
    <currentUserDetailsContext.Provider value={states}>
      <cookiesInfoContext.Provider
        value={{ browserCookies, setBrowseerCookies }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<NavbarWrapper />}>
              <Route path="/" element={<HomePage />} />
              <Route path="login/*" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="uploadProject" element={<UploadProjectWrapper />} />
              <Route path="*" element={<PageNotFound />}></Route>
            </Route>
            <Route path="/errorpage" element={<ErrorPage />} />
          </Routes>
        </Router>
      </cookiesInfoContext.Provider>
    </currentUserDetailsContext.Provider>
  );
};

export default App;
