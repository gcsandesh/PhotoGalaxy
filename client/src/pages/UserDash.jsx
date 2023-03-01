import React, { useState } from "react"

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
      <div >
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
        <Form.Group >
          <Button >Change Password</Button>
          <Button >Delete Account</Button>
        </Form.Group>
      </div>
      <h2 >Uploads</h2>
      <p>the images uploaded by the user is shown here ... </p>
    </div>
  )
}
