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
} from "./pages"
import Container from "react-bootstrap/Container"
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <Router>
      <Container
        fluid
        className="text-white p-0 d-flex flex-column justify-content-between vh-100"
      >
        <Container fluid className="p-0 mb-4">
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />

              {/* log in */}
              <Route path="/login" element={<Login />} />
              {/* sign up */}
              <Route path="/signup" element={<Signup />} />
              {/* reset password */}
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* User dashboard */}
              <Route path="/dashboard" element={<UserDash />} />
              {/* public profile of each user */}
              <Route path="/user/:username" element={<UserProfile />} />

              {/* each photo page when any photo is clicked or the route is matched*/}
              <Route path="/photo/:id" element={<Photo />} />
              {/* photo uploading page */}
              <Route path="/upload" element={<PhotoUploadPage />} />
            </Routes>
          </Container>
        </Container>
        <Footer />
      </Container>
    </Router>
  )
}

export default App
