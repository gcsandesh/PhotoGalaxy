import React from "react";
import { SiteLogo } from "../common";

export default function Footer() {
	return (
		<div className="bg-gray-800 text-gray-300">
			<div className="flex justify-between items-start container mx-auto px-2 py-4">
				<div>
					<SiteLogo isDark={false} />
				</div>
				<div>
					<h2 className="font-bold text-white">Explore</h2>
					<ul>
						<li>Most Liked</li>
						<li>Latest Uploads</li>
						<li>Most Downloaded</li>
					</ul>
				</div>
				<div>
					<h2 className="font-bold text-white">Quick Links</h2>
					<ul>
                    
						<li>Home</li>
						<li>Categories</li>
						<li>Upload</li>
					</ul>
				</div>
				<div>
					<p>Terms of Service</p>
					<p>Privacy Policy</p>
				</div>
				<div>
					<h2 className="font-bold text-white">Contact</h2>
					<ul>
						<li>PhotoGalaxy Inc.</li>
						<li>info.photogalaxy.com.np</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
