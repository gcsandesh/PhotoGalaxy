import React from "react"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function ResetPassword() {
  function sendPasswordResetLink(event) {
    event.target.preventDefault()
    // send request to backend that sends a temporary password reset link to that email
  }
  return (
    <Form
      onSubmit={sendPasswordResetLink}
    >
      <Form.Group >
        <Form.Text>
          Check your inbox for a temporary password reset link.
        </Form.Text>
        <Form.Label>Enter registered email:</Form.Label>
        <Form.Control
          type="email"
          placeholder="Registered email address"
          required
        />
      </Form.Group>
      <Button>Send link</Button>
    </Form>
  )
}
