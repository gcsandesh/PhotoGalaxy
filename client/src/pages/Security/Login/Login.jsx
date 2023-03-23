import React from "react"
import { Link, Navigate } from "react-router-dom"
import { SiteLogo } from "../../../components/common"
import gradientBg from "../../../assets/gradient-bg.svg"
import LoginForm from "./LoginForm"
import { useSelector } from "react-redux"
import { toast } from "react-hot-toast"

export default function Login() {
  const {
    user: { isLoggedIn },
  } = useSelector((store) => store.auth)

  console.log(isLoggedIn)
  if (isLoggedIn) {
    setTimeout(() => {
      toast.error("Already Logged In!")
    }, 1000)
    return <Navigate to={"/"} />
  }
  return (
    <main
      style={{
        backgroundImage: `url(${gradientBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-screen flex justify-center items-center text-gray-100"
    >
      <div className="max-w-md mx-auto">
        {/*  SITE LOGO  */}

        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
          <SiteLogo logoColor={"light"} />
        </h2>

        {/* <h2 className="text-3xl font-bold mb-6 uppercase tracking-wider underline underline-offset-4 text-center">
          Log In
        </h2> */}

        {/*  FORM  */}

        <LoginForm />

        {/*  BELOW FORM  */}
        <div className="mt-4">
          Don't have an account?
          <Link
            to={"/signup"}
            className="font-semibold ml-2 text-blue-500 hover:text-blue-800"
          >
            Sign up
          </Link>
        </div>
      </div>
    </main>
  )
}
