import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SiteLogo } from "../../components/common"
import gradientBg from "../../assets/gradient-bg.svg"
import SignUpForm from "../../components/SignUpForm"

export default function Signup() {
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
        <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
          <SiteLogo logoColor={"light"} />
        </h2>
        <h2 className="text-3xl font-bold mb-6 uppercase tracking-wider underline underline-offset-4 text-center">
          Sign Up
        </h2>
        <SignUpForm />

        {/* BELOW FORM */}
        <div className="mt-2 text-sm text-center">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-bold text-blue-500 hover:text-blue-800"
          >
            Log in
          </Link>
        </div>
      </div>
    </main>
  )
}
