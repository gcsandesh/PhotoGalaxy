import React, { useEffect, useState } from "react"
import { Gallery } from "react-grid-gallery"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const GET_PHOTOS_BY_USER_ID = "http://localhost:9999/api/photos?user_id="

export default function UserUploads({ userID }) {
  const navigate = useNavigate()
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch(GET_PHOTOS_BY_USER_ID + userID)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.uploads)
        setImages(
          data.uploads?.length
            ? data.uploads.map((eachPhoto) => ({
                id: eachPhoto._id,
                height: eachPhoto.dimensions.height,
                width: eachPhoto.dimensions.width,
                src: eachPhoto.url,
                alt: "photo",
              }))
            : {}
        )
      })

      .catch((error) => {
        // console.log("Error getting user uploads:", error)
        toast("Error getting user uploads!")
      })
  }, [userID])

  const openEachPhotoPage = (index, photo, event) => {
    navigate(`/photo/${photo._id}`)
  }

  if (!images.length) {
    return <div>No uploads yet.</div>
  }

  return (
    <div>
      <Gallery
        images={images}
        enableImageSelection={false}
        onClick={openEachPhotoPage}
        margin={3}
      />
    </div>
  )
}
