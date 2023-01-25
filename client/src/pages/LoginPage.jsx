import React from "react";

export default function LoginPage() {
	return (
		<div>
			<label>Email: </label>
			<input type="text" placeholder="Enter Your Email" name="email" required />
			<label>Password : </label>
			<input type="password" placeholder="Enter Your Password" name="password" required />
			<button type="submit">Login</button>
			<a href="#"> Forgot Password ? </a>
			Don't have an account?
			<a href="#"> Sign Up  </a>
		</div>
	); 
}


