import React from "react"

export default function Login() {
	return (
		<div>
			<div className="container mt-5">
				<h2 className="text-center mb-5">Login</h2>
				<form>
					<div className="form-group">
						<label for="email">Email:</label>
						<input type="email" className="form-control" id="email" placeholder="Enter email" required/>
					</div>
					<div className="form-group">
						<label for="password">Password:</label>
						<input type="password" className="form-control" id="password" placeholder="Enter password" required/>
					</div>
					<button type="submit" className="btn btn-primary btn-block">Login</button>
					<a className="float-right mt-2" href="#">Forgot password?</a>
				</form>
				<div className="text-center mt-3">
					Don't have an account? <a href="#">Sign up</a>
				</div>
			</div>

		</div>
	)
}
