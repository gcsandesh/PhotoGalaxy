import React from "react"
import { useNavigate } from "react-router-dom"
import { Gallery } from "react-grid-gallery"
import { GET_ALL_PHOTOS } from "../../constants"

export default function PhotoGallery() {
  const [images, setImages] = React.useState([])
  const navigate = useNavigate()

  function openEachPhotoPage(index, photo, event) {
    navigate(`/photo/${photo.id}`)
  }

  //getting photos
  React.useEffect(() => {
    async function receiveImages() {
      try {
        
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
      } catch (error) {
        console.log(error)
      }
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
        rowHeight={250}
        tileViewportStyle={(o) => ({
          objectFit: "contain",
          height: o.item.scaledHeight,
          width: o.item.viewportWidth,
          overflow: "hidden",
        })}
      />
    </div>
  )
}
