import React from "react";
import { SiteLogo } from "../common";

export default function Footer() {
	return (
		<div className="bg-gray-800 text-gray-300 mt-4">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 text-center sm:text-left gap-4 container mx-auto p-4">
				<div className="self-center">
					<SiteLogo isDark={false} />
				</div>
				<div className="mx-auto">
					<h2 className="font-bold text-white">Explore</h2>
					<ul>
						<li>Most Liked</li>
						<li>Latest Uploads</li>
						<li>Most Downloaded</li>
					</ul>
				</div>
				<div className="mx-auto">
					<h2 className="font-bold text-white">Quick Links</h2>
					<ul>
						<li>Home</li>
						<li>Categories</li>
						<li>Upload</li>
					</ul>
				</div>
				<div className="mx-auto">
					<h2 className="font-bold text-white">Contact</h2>
					<ul>
						<li>PhotoGalaxy Inc.</li>
						<li>info.photogalaxy.com.np</li>
					</ul>
				</div>
				<div className="text-gray-400 mx-auto">
					<p>Terms of Service</p>
					<p>Privacy Policy</p>
				</div>
			</div>
		</div>
	);
}
