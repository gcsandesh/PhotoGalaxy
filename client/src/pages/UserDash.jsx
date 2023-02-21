import React from "react"
import Button from "react-bootstrap/Button"

export default function UserDash() {
  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <img src="downloads.jpg" alt="image of sth" />
        <Button variant="secondary">Change</Button>
        <label>Name: Subek Adhikary </label>
        <label>Email : subeksharmaofficial@gamil.com </label>
        <Button variant="primary">Change Password</Button>
        <Button variant="danger">Delete Account</Button>
      </div>
      <h2>Uploads</h2>
      <p>the images uploaded by the user is shown here ... </p>
    </div>
  )
}
