import React from "react";
import SearchBar from "./SearchBar";
import { SiteLogo } from "../common";

export default function Header() {
	return (
		<div className="bg-gradient-to-b from-grey-900 to-grey-700 shadow-md p-4">
			<div className="container mx-auto flex items-center justify-between ">
				<SiteLogo isDark={true} />
				<SearchBar />
			</div>
		</div>
	);
}
