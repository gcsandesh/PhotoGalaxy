import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router"

export default function Protected(props) {
  const {
    user: { isLoggedIn },
  } = useSelector((store) => store.auth)

  return !isLoggedIn ? <Navigate to={"/login"} /> : <div>{props.children}</div>
}
