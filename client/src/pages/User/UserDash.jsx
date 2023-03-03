import React, { useState } from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { PhotoGallery } from "../../components"

export default function UserDash() {
  const { name, email } = useSelector((store) => store.user)
  const [currentView, setCurrentView] = useState("Likes")

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 gap-8">
      <h1 className="font-bold text-4xl text-center underline underline-offset-4">
        User Dashboard
      </h1>

      {/* USER INFO */}
      <div className="flex flex-col items-center justify-between">
        <img
          src={"https://via.placeholder.com/350x350"}
          alt="user profile picture"
          width={100}
          height={100}
          className={"rounded-full my-3"}
        />
        {/* <input type={"file"} /> */}
        <label htmlFor="name" className="font-semibold text-lg">
          {name}
        </label>
        {/* <input type="text" value={name} onChange={handleNameChange} /> */}
        <label htmlFor="email" className="font-semibold text-lg">
          {email}
        </label>
        {/* <input type="text" value={email} onChange={handleEmailChange} /> */}
        <div>
          <button>Change Password</button>
          <button>Delete Account</button>
        </div>
      </div>
      <hr className="border-2 border-dark mt-6 mb-2" />
      <div className="w-100 p-2 flex items-center justify-center">
        <div className="flex items-center gap-2 border-b-2">
          <NavLink
            onClick={() => setCurrentView("Likes")}
            className={(isActive) => isActive && "border-b-2 border-dark"}
          >
            Likes
          </NavLink>
          <NavLink
            onClick={() => setCurrentView("Uploads")}
            className={(isActive) => isActive && "border-b-2 border-dark"}
          >
            Uploads
          </NavLink>
        </div>
      </div>
      <h2 className="underline underline-offset-4 text-center font-bold text-xl leading-loose mb-4">
        Your {currentView}
      </h2>
      <div>
        {currentView === "Likes" && <PhotoGallery />}
        {currentView === "Uploads" && "No Uploads Yet!"}
      </div>
    </div>
  )
}
