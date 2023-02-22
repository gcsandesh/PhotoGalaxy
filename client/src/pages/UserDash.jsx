import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Form from "react-bootstrap/Form"

export default function UserDash() {
  const [name, setName] = useState("Subek Adhikary")
  const [email, setEmail] = useState("subeksharmaofficial@gamil.com")
  function handleEmailChange() {
    console.log(email)
  }
  function handleNameChange() {
    console.log(name)
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="d-flex flex-column align-items-start gap-2">
        <Image
          src={"https://via.placeholder.com/350x150"}
          alt="image of sth"
          roundedCircle
          width={200}
          height={200}
        />
        <Form.Control type={"file"} />
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" value={name} onChange={handleNameChange} />
        <Form.Label>Email:</Form.Label>
        <Form.Control type="text" value={email} onChange={handleEmailChange} />
        <Form.Group className="d-flex gap-2">
          <Button variant="primary">Change Password</Button>
          <Button variant="danger">Delete Account</Button>
        </Form.Group>
      </div>
      <h2 className="mt-4">Uploads</h2>
      <p>the images uploaded by the user is shown here ... </p>
    </div>
  )
}
