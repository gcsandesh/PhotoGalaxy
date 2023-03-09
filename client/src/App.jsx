import React, { useEffect } from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import { Toaster } from "react-hot-toast"
import {
  Home,
  Login,
  PhotoUploadPage,
  Signup,
  UserDash,
  UserProfile,
  ResetPassword,
  Photo,
  ChangePassword,
} from "./pages"
import AOS from "aos"
import "aos/dist/aos.css"
import Layout from "./pages/Utilities/Layout"
import Protected from "./pages/Utilities/Protected"
import { useDispatch } from "react-redux"
import { setCredentials } from "./features/auth/authSlice"

function App() {
  const dispatch = useDispatch()
  // useEffect(() => {
  dispatch(setCredentials())
  // }, [window.location.pathname])

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    })
  }, [])

  return (
    <Router>
      {/* <div className=" container flex flex-col justify-between p-0 h-screen"> */}
      <div>
        <Toaster />
      </div>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* public profile of each user */}
          <Route path="profile/:username" element={<UserProfile />} />

          {/* each photo page when any photo is clicked or the route is matched*/}
          <Route path="photo/:id" element={<Photo />} />

          {/*  PROTECTED ROUTES  */}
          <Route
            path="upload"
            element={
              <Protected>
                <PhotoUploadPage />
              </Protected>
            }
          />

          {/* User dashboard */}
          <Route
            path="dashboard"
            element={
              <Protected>
                <UserDash />
              </Protected>
            }
          />
        </Route>

        {/* log in */}
        <Route path="/login" element={<Login />} />

        {/* sign up */}
        <Route path="/signup" element={<Signup />} />

        {/* PASSWORD, LOGIN AND SIGNUP PAGES ARE DIFFERENT FROM OTHERS */}
        <Route path="/password">
          {/* reset password */}
          <Route path="reset" element={<ResetPassword />} />

          {/* change password */}
          <Route
            // path={"change/some-unique-random-link"}
            path={"change"}
            element={<ChangePassword />}
          />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
