import React, { useEffect, useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"

export default function DragAndDropZone() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  ////////////////    UPLOAD FILES AT LAST    //////////////////
  function handlePhotosUpload(event) {
    event.preventDefault()

    let formData = new FormData()
    files.forEach((file) => {
      formData.append(`photo`, file)
    })
    console.log(formData)
    let url = `http://localhost:9988/api/photos/`
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((ex) => console.log(ex))
    // console.log("photos sent to backend!")
  }

  return (
    <div {...getRootProps()}>
      <input {...getRootProps()} />
      {isDragActive ? (
        <p>Drop the files here...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
    </div>
  )
}

// <form action="/upload-photo" method="post" encType="multipart/form-data">
// <form onSubmit={handlePhotosUpload} encType={"multipart/form-data"}>
//   <div
//     className="border-2 border-dashed p-4 min-h-[350px] flex flex-col items-center justify-center"
//     id="drop-zone"
//   >
//     <input
//       className="w-full hidden"
//       type={"file"}
//       name={"photos"}
//       id="photos"
//       multiple
//       accept={"image/*"}
//     />
//     <label htmlFor="photos" id="photos">
//       Drop photos in the box!
//     </label>

//     <div className="h-full w-full flex items-center gap-2 flex-wrap object-contain">
//       {previewEls}
//     </div>
//   </div>
//   <button type="submit" className="bg-blue-600 px-4 py-2 rounded-md m-2">
//     Upload
//   </button>
// </form>
