import React from "react";
import { SiteLogo } from "../common";
import { FaChevronDown, FaRegBell, FaRegUserCircle } from "react-icons/fa";

export default function Header() {
	return (
		<div className="bg-gradient-to-b from-grey-900 to-grey-700 shadow-md p-4 mb-4">
			<div className="container mx-auto flex items-center justify-between ">
				<SiteLogo isDark={true} />
				<div className="flex gap-4">
					<div className="flex gap-4">
						<div className="flex items-center gap-1">
							<span>Explore</span> <FaChevronDown size={12} />
						</div>
						<span>Upload</span>
					</div>
					<FaRegBell size={24} />
					<FaRegUserCircle size={24} />
				</div>
			</div>
		</div>
	);
}
