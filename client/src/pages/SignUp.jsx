import React, { useState } from "react"
import { Link } from "react-router-dom"

export default function Signup() {
  const emptyForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  }
  const [formData, setFormData] = useState(emptyForm)

  function handleFormInput(event) {
    const { name, value } = event.target

    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  function handleSignup(event) {
    event.preventDefault()
    // console.log(JSON.stringify(formData))
    fetch("http://localhost:9988/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((ex) => console.error(ex))
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
        <Link
          to="/reset-password"
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800  px-2"
        >
          Forgot password?
        </Link>
      </form>
      <div className="mt-4">
        Don't have an account?{" "}
        <Link
          to="/signup"
          className="font-bold text-blue-500 hover:text-blue-800"
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}
