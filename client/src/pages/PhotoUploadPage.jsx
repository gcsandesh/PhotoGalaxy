import React from "react"
import { DragAndDropZone } from "../components"

export default function PhotoUploadPage() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-5">Upload Your Photos</h1>
        <DragAndDropZone />
      </div>
    </div>
  )
}
