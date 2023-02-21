import React from "react"

export default function Signup() {
  return (
    <div>
      <div className="container">
        <form>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password : </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password"
              name="password"
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Your Password : </label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Your Password Again"
              name="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <p>
            Already have an account ? <a href="#"> Log In </a>
          </p>
        </form>
      </div>
    </div>
  )
}
