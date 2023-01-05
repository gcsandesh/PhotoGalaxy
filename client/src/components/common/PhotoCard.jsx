import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoCloudDownloadOutline, IoShareSocialOutline } from "react-icons/io5";

export default function PhotoCard({ imgUrl }) {
	const [isLiked, setIsLiked] = React.useState(false);
	const toggleLike = () => {
		setIsLiked((prevLikedStatus) => !prevLikedStatus);
	};
	return (
		<div className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl w-96 pb-4">
			<picture className="rounded-xl w-96 h-64 rounded-br-none rounded-bl-none">
				<img
					src={imgUrl}
					className="rounded-xl object-contain w-96 h-64 rounded-br-none rounded-bl-none"
				/>
			</picture>
			<div className="flex items-center gap-2 px-4 pt-2">
				{/* <h2>Snow in branches</h2> */}
				<div onClick={toggleLike}>
					{isLiked && <FaHeart />}
					{!isLiked && <FaRegHeart />}
				</div>
				<IoCloudDownloadOutline />
				<IoShareSocialOutline />
			</div>
		</div>
	);
}
