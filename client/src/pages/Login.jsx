import React from "react"

export default function Login() {
	return (
		<div>
			<div class="container mt-5">
				<h2 class="text-center mb-5">Login</h2>
				<form>
					<div class="form-group">
						<label for="email">Email:</label>
						<input type="email" class="form-control" id="email" placeholder="Enter email" required/>
					</div>
					<div class="form-group">
						<label for="password">Password:</label>
						<input type="password" class="form-control" id="password" placeholder="Enter password" required/>
					</div>
					<button type="submit" class="btn btn-primary btn-block">Login</button>
					<a class="float-right mt-2" href="#">Forgot password?</a>
				</form>
				<div class="text-center mt-3">
					Don't have an account? <a href="#">Sign up</a>
				</div>
			</div>

		</div>
	)
}
