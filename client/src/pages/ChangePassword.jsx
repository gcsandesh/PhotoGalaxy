import React from "react"

export default function ChangePassword() {
  return (
    <div>
      <h1>Change Password</h1>
      <form action="/change-password" method="post" className="grid grid-cols-1">
        <label htmlFor="currentPassword">Current Password:</label>
        <input type="password" id="currentPassword" name="currentPassword" />
        <br />
        <label htmlFor="new-password">New Password:</label>
        <input type="password" id="new-password" name="new-password" />
        <br />
        <label htmlFor="confirm-password">Confirm Password:</label>
        <input type="password" id="confirm-password" name="confirm-password" />
        <br />
        <input type="submit" value="Change Password" />
      </form>
    </div>
  )
}
