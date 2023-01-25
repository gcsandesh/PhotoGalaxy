import React from "react"
import { SiteLogo } from "../common"
import { FaRegBell, FaRegUserCircle } from "react-icons/fa"
import { Container, Nav, NavItem, NavDropdown, Button } from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem"

export default function Header() {
	return (
		<Container fluid className="shadow mb-4">
			<Container className="border border-danger d-flex justify-content-between">
				<SiteLogo />

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
