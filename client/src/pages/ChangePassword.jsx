import React from "react"

export default function ChangePassword() {
	return (
		<div>
			<h1 class="text-center">Change Password</h1>
			<div class="container">
				<form action="/change-password" method="post">
					<div class="form-group">
						<label for="current-password">Current Password:</label>
						<input type="password" class="form-control" id="current-password" name="current-password"/>
					</div>
					<div class="form-group">
						<label for="new-password">New Password:</label>
						<input type="password" class="form-control" id="new-password" name="new-password"/>
					</div>
					<div class="form-group">
						<label for="confirm-password">Confirm Password:</label>
						<input type="password" class="form-control" id="confirm-password" name="confirm-password"/>
					</div>
					<input type="submit" class="btn btn-primary" value="Change Password"/>
				</form>
			</div>

		</div>
	)
}
