import React from "react"
import Container from "react-bootstrap/Container"
import { Row } from "react-bootstrap"
import { Col } from "react-bootstrap"
import { SiteLogo } from "../common"

export default function Footer() {
	return (
		<Container fluid className="bg-dark text-light mt-auto">
			<Container className="border border-primary">
				<Row className="mx-auto gap-2 border border-danger mx-auto justify-content-between">
					<Col
						xs={12}
						sm={6}
						lg={3}
						className="justify-self-center align-self-center text-center"
					>
						<SiteLogo />
					</Col>
					<Col xs={12} sm={6} lg={2} className="justify-self-center">
						<h5>Explore</h5>
						<ul className="p-0">
							<li>Most Liked</li>
							<li>Latest Uploads</li>
							<li>Most Downloaded</li>
						</ul>
					</Col>
					<Col xs={12} sm={6} lg={2} className="justify-self-center">
						<h5>Quick Links</h5>
						<ul className="p-0">
							<li>Home</li>
							<li>Categories</li>
							<li>Upload</li>
						</ul>
					</Col>
					<Col xs={12} sm={6} lg={2} className="justify-self-center">
						<h5>Contact</h5>
						<ul className="p-0">
							<li>PhotoGalaxy Inc.</li>
							<li>info.photogalaxy.com.np</li>
						</ul>
					</Col>
					<Col
						xs={12}
						sm={6}
						lg={2}
						className="text-secondary justify-self-center"
					>
						<div>Terms of Service</div>
						<div>Privacy Policy</div>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}
