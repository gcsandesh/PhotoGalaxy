import React, { useState, useCallback, useMemo } from "react"
import { useDropzone } from "react-dropzone"
import { toast } from "react-hot-toast"
import { FaRegTimesCircle } from "react-icons/fa"
import { BsCloudUpload } from "react-icons/bs"
import { useSelector } from "react-redux"
import { UPLOAD_PHOTOS } from "../constants"

// ////// STYLES ////// //

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 7,
  borderColor: "#000",
  borderColor: "rgb(59,130,246)",
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
  const [file, setFile] = useState()

  const {
    user: { accessToken },
  } = useSelector((store) => store.userAuth)

  function removeFile() {
    setFile(null)
  }

  ////////////////    UPLOAD FILES AT LAST    //////////////////
  async function handlePhotosUpload(event) {
    event.preventDefault()
    if (!file.length) {
      return toast.error("No photos to upload!")
    }

    // const reqBody = { photos: files }
    // console.log("body:", reqBody)

    // // uploading image on clicking submit button
    await fetch(UPLOAD_PHOTOS, {
      method: "POST",
      body: JSON.stringify({ photos: file }),
      headers: {
        Authorization: "Bearer " + accessToken,
        "Content-Type": "application/json",
      },
    })
      .then(() => {
        toast.success("Uploaded Successfully!")
        setFile([])
        // console.log("uploaded")
      })
      .catch(() => {
        toast.error("Error uploading!")
        // console.log("error")
      })
  }

  /////////////   WHEN FILE is DROPPED    //////////////
  const onDrop = useCallback((droppedFiles) => {
    const acceptedFile = droppedFiles[0]
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(acceptedFile)
      // reader.readAsArrayBuffer(acceptedFile)
      reader.onabort = (msg) => reject(msg)
      reader.onerror = (error) => reject(error)
      reader.onload = (data) => {
        console.log(data.target.result)
        resolve(data.target.result)
      }
    }).then((b64) => setFile(b64))
    setFile(acceptedFile)
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop, accept: { "image/*": [] }, maxFiles: 1 })

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  )

  console.log(file)

  return (
    <div className="flex flex-col items-center w-full">
      {/* ***** DROP ZONE ***** */}
      {!file && (
        <form className="w-full h-64 md:w-2/3 mx-auto my-4">
          <div
            {...getRootProps({ style })}
            className="mx-auto flex items-center justify-center w-full h-64"
          >
            <input name="photo" id="photo" {...getRootProps()} hidden />
            <BsCloudUpload color="rgb(59,130,246)" size={45} className="m-2" />
            {isDragActive ? (
              <p>Drop photo here...</p>
            ) : (
              <p>Drag and drop select photo or click to select photo...</p>
            )}
          </div>
        </form>
      )}

      {/* ***** ** PREVIEWS ** ***** */}
      <div className="my-4">
        {file && <Preview b64={file} handleRemove={removeFile} />}
      </div>

      <button
        onClick={() => {
          fetch("http://192.168.1.118:5000/classify", {
            method: "POST",
            body: JSON.stringify({ file }),
            headers: {
              "Content-Type": "application/json",
            },
          })
            // .then((res) => res.json())
            .then((data) => console.log(data))
        }}
        className="border-2 px-2 py-1 bg-blue-400 rounded-md"
      >
        Check
      </button>

      <button
        onClick={handlePhotosUpload}
        className="mx-auto text-white bg-blue-500 hover:bg-blue-700 font-bold px-2 py-2 sm:py-1 rounded focus:outline-none"
      >
        UPLOAD
      </button>
    </div>
  )
}

const Preview = ({ handleRemove, b64 }) => {
  return (
    <div className="rounded relative group flex items-center flex-col border-2 hover:border-rose-400 transition-all border-green-400">
      <FaRegTimesCircle
        size={24}
        onClick={handleRemove}
        className="text-rose-500 absolute right-0 cursor-pointer transition-all duration-300 group-hover:opacity-100 group-hover:visible opacity-0 invisible"
      />
      <img className="w-64 h-64 object-contain pt-4 p-2" src={b64} />
    </div>
  )
}
