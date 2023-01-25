import React from "react"

export default function Signup() {
	return (
		<div>
			<label>Email: </label>
			<input type="text" placeholder="Enter Your Email" name="email" required />
			<label>Password : </label>
			<input
				type="password"
				placeholder="Enter Your Password"
				name="password"
				required
			/>
			<label>Confirm Password : </label>
			<input
				type="password"
				placeholder="Enter Your Password Again"
				name="password"
				required
			/>
			<button type="submit">Sign Up</button>
			Already have an account?
			<a href="#"> Log In </a>
		</div>
	)
}
