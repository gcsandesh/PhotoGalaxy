import React from "react"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Login
        </button>
        <Link className="float-right mt-2" to={"/reset-password"}>
          Forgot password?
        </Link>
      </form>
      <div className="text-center mt-3">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  )
}
