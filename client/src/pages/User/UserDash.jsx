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
      <div>
        <img
          src={"https://via.placeholder.com/350x150"}
          alt="user profile picture"
          width={200}
          height={200}
        />
        <input type={"file"} />
        <label htmlFor="name">Name:</label>
        <input type="text" value={name} onChange={handleNameChange} />
        <label htmlFor="email">Email:</label>
        <input type="text" value={email} onChange={handleEmailChange} />
        <div>
          <button>Change Password</button>
          <button>Delete Account</button>
        </div>
      </div>
      <h2>Uploads</h2>
      <p>the images uploaded by the user is shown here ... </p>
    </div>
  )
}
