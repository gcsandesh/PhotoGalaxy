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
    <div></div>
    
    
  )
}
