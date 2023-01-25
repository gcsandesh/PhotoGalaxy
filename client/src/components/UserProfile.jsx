import React from "react";

export default function UserProfile() {
	return (
		<div>
            <h1>Profile</h1>
			<div> 
            <img src="downloads.jpg" alt="image of sth">
            <button type="submit">Change</button>   
            <label>Name: Subek Adhikary </label>
            <label>Email : subeksharmaofficial@gamil.com </label>
			<button type="submit">Change Password</button>
            <button type="submit">Delete Account</button>
            </div>
            <h2>Uploads</h2>
            <p>the images uploaded by the user is shown here ... </p>
			
			
		</div>
	); 
}

