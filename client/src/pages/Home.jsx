import React from "react";
import { SearchBar } from "../components/common";
import { PopularIn } from "../components";

export default function Home() {
	return (
		<div className="Home">
			<div className="container mx-auto">
				<SearchBar />
				<PopularIn category={"Travel"} />
				<PopularIn category={"Nature"} />
				<PopularIn category={"Animals"} />
			</div>
		</div>
	);
}
