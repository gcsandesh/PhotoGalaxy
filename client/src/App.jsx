import React, { useEffect } from "react"
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import { Header } from "./components"
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

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Router>
      <div className="text-white p-0 flex flex-column justify-between h-100">
        <div className="p-0 mb-4">
          <Header />
          <div>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* log in */}
              <Route path="/login" element={<Login />} />

              {/* sign up */}
              <Route path="/signup" element={<Signup />} />

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

              {/* User dashboard */}
              <Route path="/dashboard" element={<UserDash />} />

              {/* public profile of each user */}
              <Route path="/profile/:username" element={<UserProfile />} />

              {/* each photo page when any photo is clicked or the route is matched*/}
              <Route path="/photo/:id" element={<Photo />} />

              {/* photo uploading page */}
              <Route path="/upload" element={<PhotoUploadPage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
