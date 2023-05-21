import React from "react"
import { toast } from "react-hot-toast"
import { FaSearch } from "react-icons/fa"
import { GET_ALL_PHOTOS } from "../../constants"

export default function SearchBar() {
  const [query, setQuery] = React.useState("")

  const handleSearch = (e) => {
    e.preventDefault()

    if (!query) {
      return toast.error("Please enter a search query!")
    }

    toast.loading("Searching...")
    const page = 1
    const limit = 10

    fetch(`${GET_ALL_PHOTOS}?search=${query}&&page=${page}&&limit=${limit}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          toast.dismiss()
          return res.json()
        } else {
          toast.dismiss()
          toast.error("Error searching photos!")
        }
      })
      .catch((error) => {
        toast.dismiss()
        toast.error("Error searching photos!")
      })
  }

  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="my-4 p-2">
      <form className="flex gap-2 items-center" onSubmit={handleSearch}>
        <input
          type="text"
          name="query"
          value={query}
          onChange={handleQueryChange}
          className="w-full md:max-w-25 p-2.5 rounded-md border-2"
          placeholder="Search quality photos..."
        />

        <button
          onSubmit={handleSearch}
          className="bg-secondaryGreen p-4 rounded-md"
        >
          <FaSearch color="white" />
        </button>
      </form>
    </div>
  )
}
