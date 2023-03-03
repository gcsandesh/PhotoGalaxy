import React from "react"
import { PhotoGallery } from "../../components"
import { SearchBar } from "../../components/common"

export default function Home() {
  return (
    <div className="container mx-auto">
      <SearchBar />
      <PhotoGallery />
    </div>
  )
}
