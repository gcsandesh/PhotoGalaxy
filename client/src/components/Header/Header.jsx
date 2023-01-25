import React from "react"
import { SiteLogo } from "../common"
import { FaChevronDown, FaRegBell, FaRegUserCircle } from "react-icons/fa"
import Container from "react-bootstrap/Container"

export default function Header() {
	return (
		<Container fluid>
			<SiteLogo />
			<div>
				<div>
					<div>
						<span>Explore</span> <FaChevronDown size={12} />
					</div>
					<span>Upload</span>
				</div>
				<FaRegBell size={24} />
				<FaRegUserCircle size={24} />
			</div>
		</Container>
	)
}
