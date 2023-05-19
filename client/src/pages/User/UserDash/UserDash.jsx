import React, { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

import UserUploads from "./UserUploads"
import AOS from "aos"
import "aos/dist/aos.css"
import { GET_USER_BY_ID } from "../../../constants"
import UserLikes from "./UserLikes"

export default function UserDash() {
  const [currentView, setCurrentView] = useState("Likes")
  const [currentUser, setCurrentUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    profile_picture: "",
  })

  const {
    user: { _id },
  } = useSelector((store) => store.userAuth)

  useEffect(() => {
    // console.log(GET_USER_BY_ID + _id)
    fetch(GET_USER_BY_ID + _id)
      .then((response) => response.json())
      .then((data) => {
        setCurrentUser(data)
        // console.log(data)
      })
      .catch(() => {
        toast("Error fetching user!")
        console.log("Error fetching user!")
      })
  }, [_id])

  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    })
  }, [])

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 gap-8">
      <h1
        data-aos="fade-up"
        className="font-bold text-4xl text-center underline underline-offset-4"
      >
        User Dashboard
      </h1>

      {/* USER INFO */}
      <div className="flex flex-col items-center justify-between gap-4">
        <img
          data-aos="fade-in"
          src={
            currentUser.profile_picture
              ? currentUser.profile_picture
              : "https://via.placeholder.com/350x350"
          }
          alt="user profile picture"
          width={100}
          height={100}
          className={"rounded-full my-3 object-contain aspect-square"}
        />
        {/* <input type={"file"} /> */}
        <div className="flex flex-col items-center">
          <label htmlFor="name" className="font-semibold text-lg">
            {currentUser.first_name} {currentUser.last_name}
          </label>
          {/* <input type="text" value={name} onChange={handleNameChange} /> */}
          <label htmlFor="email" className="font-semibold text-lg">
            {currentUser.email}
          </label>
          <p className=" text-sm">{currentUser.bio}</p>
        </div>
        {/* <input type="text" value={email} onChange={handleEmailChange} /> */}
        <div className="flex flex-col gap-2">
          <button className="text-white bg-green-500 hover:bg-green-700 font-bold px-2 py-2 sm:py-1 rounded focus:outline-none">
            Change Password
          </button>
          <button className="text-white bg-red-500 hover:bg-red-700 font-bold px-2 py-2 sm:py-1 rounded focus:outline-none">
            Delete Account
          </button>
        </div>
      </div>
      <hr className="border-2 border-dark mt-6 mb-2" />
      <div className="w-100 p-2 flex items-center justify-center">
        <div className="flex items-center gap-2 ">
          <NavLink
            onClick={() => setCurrentView("Likes")}
            className={() =>
              currentView === "Likes"
                ? "border-b-2 border-b-dark"
                : " border-b-2"
            }
          >
            Likes
          </NavLink>
          <NavLink
            onClick={() => setCurrentView("Uploads")}
            className={() =>
              currentView === "Uploads"
                ? "border-b-2 border-b-dark"
                : " border-b-2"
            }
          >
            Uploads
          </NavLink>
        </div>
      </div>
      <h2 className="underline underline-offset-4 text-center font-bold text-xl leading-loose mb-4">
        Your {currentView}
      </h2>
      <div>
        {currentView === "Likes" && <UserLikes userID={_id} />}
        {currentView === "Uploads" && <UserUploads userID={_id} />}
      </div>
    </div>
  )
}
