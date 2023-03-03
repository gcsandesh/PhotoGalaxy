import React from "react"

export default function ResetPassword() {
  function sendPasswordResetLink(event) {
    event.target.preventDefault()
    // send request to backend that sends a temporary password reset link to that email
  }
  return (
    <form onSubmit={sendPasswordResetLink}>
      <div>
        <p>Check your inbox for a temporary password reset link.</p>
        <p>Enter registered email:</p>
        <input type="email" placeholder="Registered email address" required />
      </div>
      <button>Send link</button>
    </form>
  )
}
