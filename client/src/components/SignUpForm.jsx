import React from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { signup } from "../features/user/userSlice"

export default function SignUpForm() {
  const dispatch = useDispatch()
  const { message } = useSelector((store) => store.user)

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
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }))
  }

  //   VALIDATE FORM   //
  function validateForm() {
    let isValid = true

    if (!formData.email) {
      isValid = false
      setErrors((errs) => [...errs, "* Email is required!"])
    }
    if (!formData.password || !formData.cpassword) {
      isValid = false
      setErrors((errs) => [...errs, "* Please enter passwords!"])
    }
    if (formData.password !== formData.cpassword) {
      isValid = false
      setErrors((errs) => [...errs, "* Passwords do not match!"])
    }
    if (!isChecked) {
      isValid = false
      setErrors((errs) => [
        ...errs,
        "* You must agree with Terms and Conditions to proceed!",
      ])
    }

    return isValid
  }

  //   SUBMITTING FORM   //
  function handleSignup(event) {
    setErrors([])
    event.preventDefault()
    if (!validateForm()) return
    dispatch(
      signup({
        username: formData.firstName.trim() + " " + formData.lastName.trim(),
        email: formData.email,
        password: formData.password,
      })
    )
    setFormData(emptyForm)
    event.target.reset()
  }

  return (
    <form className="grid grid-cols-1" onSubmit={handleSignup}>
      <div className="mb-4">
        <div className="flex justify-between gap-3 items-center">
          {/* FIRST NAME */}
          <div>
            <label className="block font-bold mb-2 w-1/2" htmlFor="firstName">
              First name
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
          <div>
            <label className="block font-bold mb-2" htmlFor="lastName">
              Last name
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
        <label className="block font-bold mb-2" htmlFor="email">
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
        <label className="block font-bold mb-2" htmlFor="password">
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
        <label className="block font-bold mb-2" htmlFor="cpassword">
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
      <label htmlFor="agreement" className="text-sm">
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
        className="mx-auto mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        // onClick={handleSignup}
      >
        Sign Up
      </button>
    </form>
  )
}
