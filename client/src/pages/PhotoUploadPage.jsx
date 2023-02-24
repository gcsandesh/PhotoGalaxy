import React from "react"

export default function PhotoUploadPage() {
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-5">Upload Your Photos</h1>
        <form
          action="/upload-photo"
          method="post"
          encType="multipart/form-data"
        >
          <div className="form-group">
            <label htmlFor="photo">Select a Photo:</label>
            <input
              type="file"
              className="form-control-file"
              id="photo"
              name="photo"
            />
          </div>
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
          <input type="submit" className="btn btn-primary" value="Upload" />
        </form>
      </div>
    </div>
  )
}
