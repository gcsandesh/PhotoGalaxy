import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import siteLogo from "../../assets/logo-dark.svg";

export default function Header() {
	return (
		<div className="flex items-center justify-between bg-gradient-to-b from-grey-900 to-grey-700 shadow-md p-4">
			<h1>
				<Link to="/">
					<img src={siteLogo} className=" w-44" />
				</Link>
			</h1>
			<SearchBar />
		</div>
	);
}
