import React from "react"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div >
      <h2 >Login</h2>
      <form>
        <div >
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div >
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" >
          Login
        </button>
        <Link to={"/reset-password"}>
          Forgot password?
        </Link>
      </form>
      <div >
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  )
}
