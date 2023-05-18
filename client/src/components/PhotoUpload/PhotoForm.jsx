import React, { useState } from "react"
import { toast } from "react-hot-toast"
import DragAndDropZone from "./DragAndDropZone"
import { useSelector } from "react-redux"
import { CLASSIFY_PHOTO, GET_TAGS, UPLOAD_PHOTOS } from "../../constants"
import UploadPreview from "./UploadPreview"

const PhotoForm = () => {
  const {
    user: { accessToken },
  } = useSelector((store) => store.userAuth)
  const [file, setFile] = useState()
  const [b64, setb64] = useState()
  const [isValid, setIsValid] = useState()
  const [tags, setTags] = useState()

  //////////////    GET TAGS    //////////////////
  const getTags = async () => {
    let formData = new FormData()
    formData.append("photo", file) // file is the image file

    try {
      const res = await fetch(GET_TAGS, {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      return data
    } catch (err) {
      console.log(err)
      toast.error("Error getting tags!")
    }
  }

  ////////////////    UPLOAD FILES AT LAST    //////////////////
  const handlePhotosUpload = async (event) => {
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

  const verifyPhoto = async (file) => {
    try {
      let formData = new FormData()
      formData.append("photo", file) // file is the image file

      const res = await fetch(CLASSIFY_PHOTO, {
        method: "POST",
        body: formData,
      })
      const data = await res.json()
      return data
    } catch (err) {
      console.log(err)
      toast.error("Error verifying photo!")
    }
  }

  /////////////   CONVERT FILE TO BASE64    //////////////
  const convertToBase64 = async (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onabort = (msg) => reject(msg)
      reader.onerror = (error) => reject(error)
      reader.onload = (data) => {
        // console.log(data.target.result)
        resolve(data.target.result)
      }
    })
  }

  const removeFile = () => {
    setFile(null)
    setb64(null)
  }

  return (
    <div>
      {/* dropzone if no files exist */}

      {!file && (
        <DragAndDropZone
          convertToBase64={convertToBase64}
          verifyPhoto={verifyPhoto}
          setFile={setFile}
          setb64={setb64}
          setIsValid={setIsValid}
        />
      )}

      {/* preview component + tags */}
      {file && b64 && (
        <UploadPreview b64={b64} isValid={isValid} handleRemove={removeFile} />
        
      )}

      {/* buttons */}
      {file && (
        <>
          <button
            onClick={getTags}
            className="my-1 mr-2 px-2 py-1 bg-secondaryGreen hover:bg-green-900 duration-200 rounded-md text-white"
          >
            Generate Tags
          </button>

          <button
            onClick={handlePhotosUpload}
            className="my-1 ml-2 mx-auto text-white bg-blue-500 hover:bg-blue-700 duration-200 font-bold px-3 py-1 sm:py-1 rounded focus:outline-none"
          >
            Upload
          </button>
        </>
      )}
    </div>
  )
}

export default PhotoForm
