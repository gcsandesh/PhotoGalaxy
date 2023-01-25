import React from "react"
import { SiteLogo } from "../common"

export default function Footer() {
	return (
		<div>
			<div>
				<div>
					<SiteLogo isDark={false} />
				</div>
				<div>
					<h2>Explore</h2>
					<ul>
						<li>Most Liked</li>
						<li>Latest Uploads</li>
						<li>Most Downloaded</li>
					</ul>
				</div>
				<div>
					<h2>Quick Links</h2>
					<ul>
						<li>Home</li>
						<li>Categories</li>
						<li>Upload</li>
					</ul>
				</div>
				<div>
					<h2>Contact</h2>
					<ul>
						<li>PhotoGalaxy Inc.</li>
						<li>info.photogalaxy.com.np</li>
					</ul>
				</div>
				<div>
					<p>Terms of Service</p>
					<p>Privacy Policy</p>
				</div>
			</div>
		</div>
	)
}
