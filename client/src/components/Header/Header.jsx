import React from "react";
import SearchBar from "./SearchBar";

export default function Header() {
	return (
		<div className="flex items-center justify-between bg-gradient-to-b from-grey-900 to-grey-700 shadow-md p-4">
			<h1>PhotoGalaxy</h1>
			<SearchBar />
		</div>
	);
}
