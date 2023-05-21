import React from "react"
import { Gallery } from "react-grid-gallery"
import { useNavigate } from "react-router-dom"

const SearchPage = ({ photos }) => {
  const navigate = useNavigate()

  const images = photos?.map((eachPhoto) => ({
    id: eachPhoto._id,
    height: eachPhoto.dimensions.height,
    width: eachPhoto.dimensions.width,
    src: eachPhoto.url,
    alt: "PhotoGalaxy",
  }))

  function openEachPhotoPage(index, photo, event) {
    navigate(`/photo/${photo.id}`)
  }
  return (
    <div>
      <Gallery
        images={images}
        enableImageSelection={false}
        onClick={openEachPhotoPage}
        margin={10}
        rowHeight={400}
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

export default SearchPage
