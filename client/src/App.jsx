import React from "react"
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useNavigate,
  redirect,
  Navigate,
} from "react-router-dom"
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
  AdminPanel,
} from "./pages"
// import AOS from "aos"
// import "aos/dist/aos.css"
import Layout from "./pages/Utilities/Layout"
import Protected from "./pages/Utilities/Protected"
import { useDispatch } from "react-redux"
import { setCredentials } from "./features/auth/userAuthSlice"
import AdminLoginPage from "./pages/Admin/AdminLoginPage"
import AdminRegistration from "./pages/Admin/AdminRegistration"

function App() {
  const dispatch = useDispatch()
  // useEffect(() => {
  dispatch(setCredentials())
  // }, [window.location.pathname])

  // useEffect(() => {
  // AOS.init({
  //   easing: "ease-in-out",
  // })
  // }, [])

  // const navigate = useNavigate()

  if (window.location.pathname.endsWith("/admin")) {
    // navigate("/admin-login")
    redirect("/admin-login")
  }

  return (
    <Router>
      {/* <div className=" container flex flex-col justify-between p-0 h-screen"> */}
      <div>
        <Toaster
          toastOptions={{
            style: {
              borderRadius: "10px",
              // background: "#333",
              // color: "#fff",
            },
            duration: 4000,
          }}
        />
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

        {/* reset password */}
        <Route path="reset-password" element={<ResetPassword />} />

        {/* change password */}
        <Route
          // path={"change/some-unique-random-link"}
          path={"change-password/:token"}
          element={<ChangePassword />}
        />

        {/* ADMIN SIDE */}
        <Route path="/admin" element={<Navigate to={"/admin-login"} />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/admin-signup" element={<AdminRegistration />} />
        <Route path="*" element={<Navigate to={"/"} />} />
      </Routes>
    </Router>
  )
}

export default App
