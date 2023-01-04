import React from "react";
import { SiteLogo } from "../common";

export default function Footer() {
	return (
		<div className="bg-gray-500 text-white">
			<div className="flex justify-between items-start container mx-auto px-2 py-4">
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
						<li>Categories</li>
						<li>Upload</li>
					</ul>
				</div>
				<div>
					<h2>Terms of Service</h2>
					<h2>Privacy Policy</h2>
				</div>
				<div>
					<h2>Contact</h2>
					<ul>
						<li>PhotoGalaxy Inc.</li>
						<li>info.photogalaxy.com.np</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
