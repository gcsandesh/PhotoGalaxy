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
      className="d-flex flex-column gap-2 w-50 mx-auto"
      onSubmit={sendPasswordResetLink}
    >
      <Form.Group className="d-flex flex-column align-items-start">
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
      <Button className="mx-auto">Send link</Button>
    </Form>
  )
}
