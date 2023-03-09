import React, { useState, useEffect } from "react"
import { DragAndDropZone } from "../components"
import { FileUploader } from "react-drag-drop-files"

const fileTypes = ["JPEG", "PNG", "GIF", "JPG"]

export default function PhotoUploadPage() {
  // const [files, setFiles] = useState([])
  // const handleChange = (file) => {
  //   setFiles((prevFiles) => [...prevFiles, file])
  // }

  // const formData = new FormData()

  // files.map((file, index) => formData.append(`file_${index}`, file))

  // console.log(formData)
  // const formDataObj = {}
  // formData.forEach((value, key) => (formDataObj[key] = value))
  // console.log((formDataObj.file_0))
  // useEffect(() => {
  //   localStorage.setItem("uploads", JSON.stringify(files))
  //   return () => {
  //     localStorage.removeItem("uploads")
  //   }
  // }, [files])

  // console.log(files)
  // const previews = files.map((file, index) => (
  //   <span key={index}> {file[0].name}</span>
  // ))
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center my-4 text-2xl font-bold underline leading-loose underline-offset-4">
        Upload Your Photos
      </h1>
      <DragAndDropZone />

      {/* FILE UPLOADER */}
      {/* <div className="max-w-md md:p-4 mx-auto border-2 flex gap-4 justify-center items-center flex-col border-black w-full md:w-2/3">
        <FileUploader
          multiple={true}
          handleChange={handleChange}
          name="file"
          types={fileTypes}
        />
        <div className="text-sm">
          {files.length ? (
            <div className="flex flex-col gap-2">File names:{previews}</div>
          ) : (
            "No files uploaded yet"
          )}
        </div>
      </div> */}
    </div>
  )
}
