import React from "react"

export default function Signup() {
	return (
		<div>
			<div class="container">
				<form>
					<div class="form-group">
						<label>Email: </label>
						<input type="text" class="form-control" placeholder="Enter Your Email" name="email" required />
					</div>
					<div class="form-group">
						<label>Password : </label>
						<input type="password" class="form-control" placeholder="Enter Your Password" name="password" required />
					</div>
					<div class="form-group">
						<label>Confirm Your Password : </label>
						<input type="password" class="form-control" placeholder="Enter Your Password Again" name="password" required />
					</div>
					<button type="submit" class="btn btn-primary">Sign Up</button>
					<p>Already have an account ? <a href="#"> Log In </a></p>
				</form>
			</div>

		</div>
	)
}
