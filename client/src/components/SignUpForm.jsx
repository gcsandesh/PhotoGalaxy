import React from "react"
import { useState } from "react"
import { toast } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signupUser } from "../features/user/userSlice"

export default function SignUpForm() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const emptyForm = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cpassword: "",
  }
  const [isChecked, setIsChecked] = useState(false)
  const [formData, setFormData] = useState(emptyForm)
  const [errors, setErrors] = useState([])
  let errorList = errors.map((error, index) => <li key={index}>{error}</li>)

  //   TRACK INPUT   //
  function handleFormInput(event) {
    const name = event.target.name
    const value = event.target.value
    setErrors([])
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value.trim() }))
  }

  //   VALIDATE FORM   //
  function validateForm() {
    let isValid = true
    const { email, firstName, lastName, password, cpassword } = formData
    if (!firstName.trim()) {
      setErrors((errs) => [...errs, "* First Name is required!"])
      isValid = false
    }

    if (!lastName.trim()) {
      setErrors((errs) => [...errs, "* Last Name is required!"])
      isValid = false
    }

    if (!email.trim()) {
      setErrors((errs) => [...errs, "* Email is required!"])
      isValid = false
    }
    if (!password.trim() || !cpassword.trim()) {
      setErrors((errs) => [...errs, "* Please enter password!"])
      isValid = false
    }

    if (password.trim() !== cpassword.trim()) {
      setErrors((errs) => [...errs, "* Passwords do not match!"])
      isValid = false
    }

    if (!isChecked) {
      setErrors((errs) => [
        ...errs,
        "* You must agree with Terms and Conditions to proceed!",
      ])
      isValid = false
    }

    return isValid
  }

  //   SUBMITTING FORM   //
  async function handleSignup(event) {
    event.preventDefault()
    setErrors([])

    if (!validateForm()) return

    try {
      const payload = await dispatch(
        signupUser({
          username: formData.firstName + " " + formData.lastName,
          email: formData.email,
          password: formData.password,
        })
      ).unwrap()

      toast.success(`Created account '${payload.email}' successfully!.`, {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
        duration: 4000,
      })

      setFormData(emptyForm)
      event.target.reset()

      setTimeout(() => navigate("/login"), 3000)
    } catch (error) {
      // console.log("Error creating account: ", error.message)
      toast.error("Error creating account!", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      })
    }
  }

  return (
    <form
      className="grid grid-cols-1  text-sm md:text-base p-3"
      onSubmit={handleSignup}
    >
      <div className="mb-4">
        <div className="flex justify-between gap-3 items-center">
          {/* FIRST NAME */}
          <div className="w-1/2">
            <label className="block mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              name="firstName"
              onChange={handleFormInput}
              value={formData.firstName}
              placeholder="Enter first name"
              required
            />
          </div>

          {/* LAST NAME */}
          <div className="w-1/2">
            <label className="block mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              name="lastName"
              onChange={handleFormInput}
              value={formData.lastName}
              placeholder="Enter last name"
              required
            />
          </div>
        </div>
      </div>

      {/* EMAIL */}
      <div className="mb-4">
        <label className="block mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          onChange={handleFormInput}
          value={formData.email}
          placeholder="Enter email"
          required
        />
      </div>

      {/* PASSWORD */}
      <div className="mb-4">
        <label className="block mb-2" htmlFor="password">
          Password:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          onChange={handleFormInput}
          value={formData.password}
          placeholder="Enter password"
          required
        />
      </div>

      {/* CONFIRM PASSWORD */}
      <div className="mb-4">
        <label className="block mb-2" htmlFor="cpassword">
          Confirm Password:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="cpassword"
          type="password"
          name="cpassword"
          onChange={handleFormInput}
          value={formData.cpassword}
          placeholder="Re-enter password"
          required
        />
      </div>

      {/* TERMS AND CONDITIONS */}
      <label htmlFor="agreement" className="text-xs md:text-sm">
        <input
          type={"checkbox"}
          name={"agreement"}
          onChange={() => {
            setIsChecked((prevState) => !prevState)
          }}
          checked={formData.agreementIsChecked}
          required
        />{" "}
        I agree with the terms and conditions of PhotoGalaxy.
      </label>

      {/* ERRORS */}

      <ul className="text-red-500 text-xs font-semibold my-2 uppercase tracking-wide">
        {errorList}
      </ul>

      {/* SIGN UP BUTTON */}
      <button
        className="mx-auto md:mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Sign Up
      </button>
    </form>
  )
}
