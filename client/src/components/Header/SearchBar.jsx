import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
	return (
		<div className="w-2/5 border-2 flex items-center rounded-lg focus-within:shadow-lg ">
			<input
				className="w-full px-2 py-1 outline-none rounded-lg"
				type={"text"}
				placeholder="Search premium quality stock images"
			/>
			<button className="p-2 bg-[#4ED494] rounded-r-md">
				<FaSearch />
			</button>
		</div>
	);
}
