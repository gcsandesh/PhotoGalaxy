import React, { useEffect } from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import { Footer } from "./components/"
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

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Router>
      {/* <div className=" container flex flex-col justify-between p-0 h-screen"> */}
      <div className="mt-16 sm:mt-20">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            {/* User dashboard */}
            <Route path="dashboard" element={<UserDash />} />

            {/* public profile of each user */}
            <Route path="profile/:username" element={<UserProfile />} />

            {/* each photo page when any photo is clicked or the route is matched*/}
            <Route path="photo/:id" element={<Photo />} />

            {/* photo uploading page */}
            <Route path="upload" element={<PhotoUploadPage />} />
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
      </div>
    </Router>
  )
}

export default App
