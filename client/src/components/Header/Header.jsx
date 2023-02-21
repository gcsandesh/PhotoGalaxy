import React from "react"
import { Link } from "react-router-dom"
import { FaRegBell, FaRegUserCircle } from "react-icons/fa"
import { Container, Nav, NavItem, NavDropdown, Button } from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem"
import { SiteLogo } from "../common"

export default function Header() {
  function toggleNotification() {
    console.log("on/off")
  }
  return (
    <Container fluid className="shadow mb-4">
      <Container className="d-flex justify-content-between">
        <SiteLogo />

        <Nav className="d-flex gap-2 align-items-center">
          <NavDropdown title="Explore">
            <DropdownItem>Top Downloaded</DropdownItem>
          </NavDropdown>
          <NavItem>
            <Link to="/upload">
              <Button>Upload</Button>
            </Link>
          </NavItem>
          <NavItem onClick={toggleNotification}>
            <FaRegBell size={24} />
          </NavItem>
          <NavItem>
            <FaRegUserCircle size={24} />
          </NavItem>
        </Nav>
      </Container>
    </Container>
  )
}
