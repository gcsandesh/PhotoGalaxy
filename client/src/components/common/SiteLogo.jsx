import React from "react"
import { Link } from "react-router-dom"
import Image from "react-bootstrap/Image"
import lightLogo from "../../assets/logo-white.svg"
import darkLogo from "../../assets/logo-black.svg"

export default function SiteLogo({ logoColor }) {
  console.log(logoColor)
  return (
    <Link to="/">
      <Image
        src={logoColor === "light" ? lightLogo : darkLogo}
        width={200}
        height={45}
      />
    </Link>
  )
}
