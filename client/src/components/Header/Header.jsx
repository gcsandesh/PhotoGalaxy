import React from "react"
import { Link } from "react-router-dom"
import { FaRegBell, FaRegUserCircle } from "react-icons/fa"
import { Container, Nav, NavItem, NavDropdown, Button } from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem"
import { SiteLogo } from "../common"

export default function Header() {
  return (
    <Container fluid className="shadow mb-4">
      <Container className="d-flex justify-content-between">
        <Link to="/">
          <SiteLogo />
        </Link>

        <Nav className="d-flex gap-2 align-items-center">
          <NavDropdown title="Explore">
            <DropdownItem>Top Downloaded</DropdownItem>
          </NavDropdown>
          <NavItem>
            <Button>Upload</Button>
          </NavItem>
          <NavItem>
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
