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
        className="p-0 d-flex flex-column justify-content-between vh-100"
      >
        <Container fluid className="p-0 mb-4">
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/dashboard" element={<UserDash />} />
              <Route path="/user/:username" element={<UserProfile />} />
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
