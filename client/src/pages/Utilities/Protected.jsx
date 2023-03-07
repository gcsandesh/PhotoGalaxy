import React from "react"
import { useSelector } from "react-redux"

export default function Protected() {
  const { isLoggedIn } = useSelector((store) => store.user)
  return isLoggedIn?  <div>Protected</div>:<div>nothing</div>
}
