import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-bold mb-6">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
        <Link
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800  px-2"
          to="/reset-password"
        >
          Forgot password?
        </Link>
      </form>
      <div className="mt-4">
        Don't have an account?
        <Link
          to={'/signup'}
          className="font-bold text-blue-500 hover:text-blue-800"
        >
          Sign up
        </Link>
      </div>
    </div>
  )
}
