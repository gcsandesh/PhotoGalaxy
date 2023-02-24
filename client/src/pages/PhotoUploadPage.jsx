import React from "react"
import { DragAndDropZone } from "../components"

export default function PhotoUploadPage() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-5">Upload Your Photos</h1>

        <DragAndDropZone />
        {/* <div className="form-group">
            <label htmlFor="photo">Select a Photo:</label>
            <input
              type="file"
              className="form-control-file"
              id="photo"
              name="photo"
            />
          </div> */}
        {/* <div className="form-group">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="keywords">Keywords (comma separated):</label>
            <input
              type="text"
              className="form-control"
              id="keywords"
              name="keywords"
            />
          </div> */}
      </div>
    </div>
  )
}
