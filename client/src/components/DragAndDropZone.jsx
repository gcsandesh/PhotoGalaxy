import React, { useState, useCallback, useMemo } from "react"
import { useDropzone } from "react-dropzone"
import { FaRegTimesCircle } from "react-icons/fa"
import { useSelector } from "react-redux"

// ////// STYLES ////// //

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#000",
  // borderColor: "#eeeeee",
  borderStyle: "dashed",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
}

const focusedStyle = {
  borderColor: "#2196f3",
}

const acceptStyle = {
  borderColor: "#00e676",
}

const rejectStyle = {
  borderColor: "#ff1744",
}

export default function DragAndDropZone() {
  let url = `http://localhost:9999/api/photos/`

  const [files, setFiles] = useState([])

  const {
    user: { accessToken },
  } = useSelector((store) => store.auth)

  function removeFile(fileID) {
    setFiles((prevFiles) => prevFiles.filter((file, index) => index !== fileID))
  }

  ////////////////    UPLOAD FILES AT LAST    //////////////////
  async function handlePhotosUpload(event) {
    event.preventDefault()
    console.log(
      "files:",
      files,
      "files length:",
      files.length,
      "first file:",
      files[0]
    )

    const reqBody = { photos: files }
    console.log("body:", reqBody)

    // // uploading image on clicking submit button
    await fetch(url, {
      method: "POST",
      body: JSON.stringify({ photos: files }),
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    })
      .then(() => console.log("sent"))
      .catch(() => console.log("error"))
  }

  console.log("files", files)
  const previews = files.map((file, index) => (
    <Preview id={index} key={index} b64={file} handleRemove={removeFile} />
  ))

  /////////////   WHEN FILES ARE DROPPED    //////////////
  const onDrop = useCallback((acceptedFiles) => {
    Promise.all(
      acceptedFiles.map(
        (file) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onabort = (msg) => reject(msg)
            reader.onerror = (error) => reject(error)
            reader.onload = (data) => {
              resolve(data.target.result)
              // const binaryStr = data.target.result

              // // photos are saved as binary String buffer after being read
              // setFiles((prevFiles) => [
              //   ...prevFiles,
              //   Buffer.from(binaryStr).toString("base64"),
              // ])
            }
          })
      )
    ).then((base64images) =>
      base64images.forEach((b64img) => {
        setFiles((prevFiles) => [...prevFiles, b64img])
      })
    )
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: { "image/*": [] }, maxFiles: 10 })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  )

  return (
    <div className="flex flex-col items-center w-full">
      <form className="w-full h-44 md:w-2/3 mx-auto my-4">
        <div
          {...getRootProps({ style })}
          className="mx-auto flex items-center justify-center w-full h-44"
        >
          {/* <label htmlFor="photo">Photo</label> */}
          <input name={"photo"} id={"photo"} {...getRootProps()} hidden />
          {isDragActive ? (
            <p>Drop it like it's hot</p>
          ) : (
            <p>Drag 'n' drop up to 10 files here, or click to select files</p>
          )}
        </div>
      </form>

      {/* ***** UPLOAD BUTTON ***** */}
      <button
        onClick={handlePhotosUpload}
        className="mx-auto text-white bg-blue-500 hover:bg-blue-700 font-bold px-2 py-2 sm:py-1 rounded focus:outline-none"
      >
        UPLOAD
      </button>

      {/* ***** ** PREVIEWS ** ***** */}
      <div className="w-full flex-wrap my-4 flex items-start justify-between gap-4 overflow-x-auto">
        {previews}
      </div>
    </div>
  )
}

const Preview = ({ handleRemove, id, b64 }) => {
  console.log(b64)
  return (
    <div className="rounded relative group flex items-center flex-col border-2 hover:border-rose-400 transition-all border-green-400">
      <FaRegTimesCircle
        size={24}
        onClick={() => handleRemove(id)}
        className="text-rose-500 absolute right-0 cursor-pointer transition-all duration-300 group-hover:opacity-100 group-hover:visible opacity-0 invisible"
        // color=""
      />
      <img className="w-64 h-64 object-contain pt-6 p-2" src={b64} />
    </div>
  )
}
