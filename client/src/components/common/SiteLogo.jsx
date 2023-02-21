import React from "react"
import { Link } from "react-router-dom"
import Image from "react-bootstrap/Image"
import img from "../../assets/logo.svg"

export default function SiteLogo() {
  return (
    <Link to="/">
      <Image src={img} width={200} height={45} />
    </Link>
  )
}
