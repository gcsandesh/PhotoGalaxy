import React, { useState, useCallback, useMemo } from "react"
import { useDropzone } from "react-dropzone"
import { toast } from "react-hot-toast"
import { FaRegTimesCircle } from "react-icons/fa"
import { BsCloudUpload } from "react-icons/bs"
import { useSelector } from "react-redux"
import { CLASSIFY_PHOTO, GET_TAGS, UPLOAD_PHOTOS } from "../constants"

// ////// STYLES ////// //

const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 7,
  // borderColor: "#000",
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
  const [preview, setPreview] = useState()

  const {
    user: { accessToken },
  } = useSelector((store) => store.userAuth)

  function removeFile() {
    setFile(null)
  }

  //////////////    GET TAGS    //////////////////
  const getTags = async () => {
    let formData = new FormData()
    formData.append("photo", file) // file is the image file

    fetch(GET_TAGS, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        toast(data)
      })
  }

  const verifyPhoto = async () => {
    let formData = new FormData()
    formData.append("photo", file) // file is the image file

    fetch(CLASSIFY_PHOTO, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data === 1) {
          toast.success("Verified Successfully!")
        } else {
          toast.error("Error Verifying!")
        }
      })
  }

  ////////////////    UPLOAD FILES AT LAST    //////////////////
  async function handlePhotosUpload(event) {
    event.preventDefault()
    if (!file.length) {
      return toast.error("No photos to upload!")
    }

    // uploading image on clicking submit button
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

  /////////////   WHEN FILE IS DROPPED    //////////////
  const onDrop = useCallback((droppedFiles) => {
    const acceptedFile = droppedFiles[0]
    convertToBase64(acceptedFile)
    setFile(acceptedFile)
  }, [])

  /////////////   CONVERT FILE TO BASE64    //////////////
  const convertToBase64 = (file) => {
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onabort = (msg) => reject(msg)
      reader.onerror = (error) => reject(error)
      reader.onload = (data) => {
        // console.log(data.target.result)
        resolve(data.target.result)
      }
    }).then((b64) => setPreview(b64))
  }

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
        {file && preview && <Preview b64={preview} handleRemove={removeFile} />}
      </div>

      <button
        onClick={verifyPhoto}
        className="my-1 px-2 py-1 bg-blue-500 hover:bg-blue-800 duration-200 rounded-md text-white"
      >
        Verify
      </button>

      <button
        onClick={getTags}
        className="my-1 px-2 py-1 bg-secondaryGreen hover:bg-green-900 duration-200 rounded-md text-white"
      >
        Generate Tags
      </button>

      <button
        onClick={handlePhotosUpload}
        className="my-1 mx-auto text-white bg-blue-500 hover:bg-blue-700 duration-200  font-bold px-3 py-1 sm:py-1 rounded focus:outline-none"
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
