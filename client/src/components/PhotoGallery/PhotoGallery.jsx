import React from "react"
import { useNavigate } from "react-router-dom"
import { Gallery } from "react-grid-gallery"

export default function PhotoGallery() {
  const [images, setImages] = React.useState([])
  const navigate = useNavigate()

  //getting dummy images
  React.useEffect(() => {
    async function receiveImages() {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=100"
      )
      if (!response.ok) throw new Error("Error while fetching!")

      const data = await response.json()
      setImages(data)
    }
    receiveImages()
    // return () => console.log("remove Effect")
  }, [])

  const imgGallery = images.map((eachImage) => ({
    _id: "404",
    src: eachImage.download_url,
    alt: "good nice photo wow",
    width: 1920,
    height: 1080,
  }))

  function openEachPhotoPage(index, photo, event) {
    navigate(`/photo/${photo._id}`)
  }
  return (
    <div>
      <Gallery
        images={imgGallery}
        enableImageSelection={false}
        onClick={openEachPhotoPage}
        margin={3}
      />
    </div>
  )
}
