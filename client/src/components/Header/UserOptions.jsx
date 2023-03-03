import React from "react"
import { useSelector } from "react-redux"
import { Link, NavLink } from "react-router-dom"

export default function UserOptions() {
  const { isLoggedIn } = useSelector((store) => store.user)
  if (isLoggedIn)
    return (
      <div className="absolute flex flex-col gap-2 bg-[#fefae0] p-3">
        <NavLink as={Link} to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink>Log Out</NavLink>
      </div>
    )
  else
    return (
      <div className="absolute flex flex-col gap-2 bg-[#d4a373] p-3">
        <NavLink as={Link} to="/login">
          Log In
        </NavLink>
        <NavLink as={Link} to="/signup">
          Sign Up
        </NavLink>
      </div>
    )
}
