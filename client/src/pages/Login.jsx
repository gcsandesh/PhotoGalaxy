import React from "react"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div class="max-w-md mx-auto">
      <h2 class="text-3xl font-bold mb-6">Login</h2>
      <form>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="email">
            Email:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="password">
            Password:
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Login
        </button>
        <a
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800  px-2"
          href="/reset-password"
        >
          Forgot password?
        </a>
      </form>
      <div class="mt-4">
        Don't have an account?{" "}
        <a class="font-bold text-blue-500 hover:text-blue-800" href="/signup">
          Sign up
        </a>
      </div>
    </div>
  )
}
