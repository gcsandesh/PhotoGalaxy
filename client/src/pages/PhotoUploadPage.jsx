import React from "react"
import { DragAndDropZone } from "../components"

export default function PhotoUploadPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold underline underline-offset-4">Upload Your Photos</h1>
      <DragAndDropZone />
    </div>
  )
}
