import React from "react"
import { useNavigate } from "react-router-dom"
import { Gallery } from "react-grid-gallery"

const GET_ALL_PHOTOS = "http://localhost:9999/api/photos"

export default function PhotoGallery() {
  const [images, setImages] = React.useState([])
  const navigate = useNavigate()

  function openEachPhotoPage(index, photo, event) {
    navigate(`/photo/${photo._id}`)
  }

  //getting photos
  React.useEffect(() => {
    async function receiveImages() {
      const response = await fetch(GET_ALL_PHOTOS)
      if (!response.ok) throw new Error("Error while fetching!")

      const data = await response.json()
      setImages(
        data.photos?.map((eachPhoto) => ({
          id: eachPhoto._id,
          height: eachPhoto.dimensions.height,
          width: eachPhoto.dimensions.width,
          src: eachPhoto.url,
          alt: "PhotoGalaxy",
        }))
      )
    }
    receiveImages()
    // return () => console.log("remove Effect")
  }, [GET_ALL_PHOTOS])

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
