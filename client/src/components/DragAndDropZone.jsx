import React from "react"

export default function DragAndDropZone() {
  return (
    <div>
      {/* <form action="/upload-photo" method="post" encType="multipart/form-data"> */}
      <form>
        <input
          type={"file"}
          name={"photos"}
          id="photos"
          multiple
          accept={"image/*"}
        />
        <label htmlFor="photos" id="photos">
          Drop it like it's hot!
        </label>
        <input type="submit" className="btn btn-primary" value="Upload" />
      </form>
    </div>
  )
}
