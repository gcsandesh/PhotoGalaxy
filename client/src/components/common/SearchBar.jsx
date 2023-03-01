import React from "react"
import { FaSearch } from "react-icons/fa"

export default function SearchBar() {
  return (
    <div className="my-4">
      <form className="flex gap-2 items-center">
        <input
          type="text"
          className="w-full md:max-w-25 px-2 py-1 rounded-sm"
          placeholder="Search quality photos..."
        />
        <button className="bg-secondaryGreen p-2 rounded-sm">
          <FaSearch />
        </button>
      </form>
    </div>
  )
}
