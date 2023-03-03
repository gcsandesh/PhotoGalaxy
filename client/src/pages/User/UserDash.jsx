import React, { useState } from "react"

export default function UserDash() {
  // const [name, setName] = useState("Subek Adhikary")
  // const [email, setEmail] = useState("subeksharmaofficial@gamil.com")
  // function handleEmailChange() {
  //   console.log(email)
  // }
  // function handleNameChange() {
  //   console.log(name)
  // }

  const name = "Jon",
    email = "jondoe@gmail.com"
  return (
    <div className="container mx-auto">
      <h1 className="font-bold text-4xl mb-4 text-center underline underline-offset-4">
        User Dashboard
      </h1>

      {/* USER INFO */}
      <div className="flex flex-col items-center justify-between">
        <img
          src={"https://via.placeholder.com/350x350"}
          alt="user profile picture"
          width={100}
          height={100}
          className={"rounded-full"}
        />
        {/* <input type={"file"} /> */}
        <label htmlFor="name">Name: {name}</label>
        {/* <input type="text" value={name} onChange={handleNameChange} /> */}
        <label htmlFor="email">Email:{email}</label>
        {/* <input type="text" value={email} onChange={handleEmailChange} /> */}
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
