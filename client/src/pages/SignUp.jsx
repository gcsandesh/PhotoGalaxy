import React, { useState } from "react"
import { Link } from "react-router-dom"
import Button from "react-bootstrap/esm/Button"
import Form from "react-bootstrap/Form"
import Container from "react-bootstrap/Container"

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
    <div>
      <Container>
        <Form
          className="w-50 mx-auto d-flex flex-column align-items-center gap-2"
          onSubmit={handleSignup}
        >
          <Form.Group className="d-flex mx-auto w-50 gap-4">
            {/* first name */}
            <Form.Group>
              <Form.Label>First Name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleFormInput}
                required
              />
            </Form.Group>

            {/* last name */}
            <Form.Group>
              <Form.Label>Last Name: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleFormInput}
                required
              />
            </Form.Group>
          </Form.Group>

          {/* email */}
          <Form.Group className="w-50">
            <Form.Label>Email: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleFormInput}
              required
            />
          </Form.Group>

          {/* password */}
          <Form.Group className="w-50">
            <Form.Label>Password : </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Password"
              name="password"
              value={formData.password}
              onChange={handleFormInput}
              required
            />
          </Form.Group>

          {/* confirm password */}
          <Form.Group className="w-50">
            <Form.Label>Confirm Your Password : </Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Your Password Again"
              name="cpassword"
              value={formData.cpassword}
              onChange={handleFormInput}
              required
            />
          </Form.Group>

          {/* "sign up"  button*/}
          <Form.Group>
            <Button type="submit" variant="primary">
              Sign Up
            </Button>
          </Form.Group>

          <Form.Group>
            <Form.Text>
              Already have an account? <Link to="/login"> Log In </Link>
            </Form.Text>
          </Form.Group>
        </Form>
      </Container>
    </div>
  )
}
