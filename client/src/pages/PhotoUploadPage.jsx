import React from "react"

export default function PhotoUploadPage() {
  function showUploadWidget() {
    cloudinary.openUploadWidget(
      {
        cloudName: "<cloud name>",
        uploadPreset: "<upload preset>",
        sources: [
          "local",
          "url",
          "camera",
          "image_search",
          "google_drive",
          "facebook",
          "dropbox",
          "instagram",
          "shutterstock",
          "getty",
          "istock",
          "unsplash",
        ],
        googleApiKey: "<image_search_google_api_key>",
        showAdvancedOptions: true,
        cropping: true,
        multiple: false,
        defaultSource: "local",
        styles: {
          palette: {
            window: "#FFFFFF",
            windowBorder: "#90A0B3",
            tabIcon: "#0078FF",
            menuIcons: "#5A616A",
            textDark: "#000000",
            textLight: "#FFFFFF",
            link: "#0078FF",
            action: "#FF620C",
            inactiveTabIcon: "#0E2F5A",
            error: "#F44235",
            inProgress: "#0078FF",
            complete: "#20B832",
            sourceBg: "#E4EBF1",
          },
          fonts: { default: { active: true } },
        },
      },
      (err, info) => {
        if (!err) {
          console.log("Upload Widget event - ", info)
        }
      }
    )
  }
  return (
    <div>
      <div className="container">
        <h1 className="text-center my-5">Upload Your Photos</h1>
        <button onClick={showUploadWidget}>Upload</button>
        {/* <form
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
          <div className="form-group">
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
          </div>
          <input type="submit" className="btn btn-primary" value="Upload" />
        </form> */}
      </div>
    </div>
  )
}
