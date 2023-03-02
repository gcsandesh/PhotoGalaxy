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
