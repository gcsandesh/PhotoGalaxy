import React from "react";

import { PhotoCard } from "./common";

export default function PopularIn({ category }) {
	return (
		<div className="my-10">
			<h2 className="font-semibold text-lg my-4">Popular in {category}</h2>
			<div className="flex items-center gap-8">
				<PhotoCard
					imgUrl={
						"https://images.unsplash.com/photo-1671725501884-e832fb8d0d84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
					}
				/>
				<PhotoCard
					imgUrl={
						"https://images.unsplash.com/photo-1672696049977-5ef343a91556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
					}
				/>
				<PhotoCard
					imgUrl={
						"https://images.unsplash.com/photo-1672862817339-51ef2610a5d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2109&q=80"
					}
				/>
				<PhotoCard
					imgUrl={
						"https://images.unsplash.com/photo-1672376786877-e639ca2e0ec5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
					}
				/>
			</div>
		</div>
	);
}
