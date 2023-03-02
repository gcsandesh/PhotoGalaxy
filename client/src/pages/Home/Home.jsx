import React from "react"
import { Helmet } from "react-helmet"
import { SearchBar } from "../../components/common"
import { Gallery } from "react-grid-gallery"
import { useNavigate } from "react-router-dom"

export default function Home() {
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
    return () => console.log("remove Effect")
  }, [])

  const imgGallery = images.map((eachImage) => ({
    _id: "404",
    src: eachImage.download_url,
    alt: "good nice photo wow",
    width: 400,
    height: 500,
  }))

  function openEachPhotoPage(index, photo, event) {
    navigate(`/photo/${photo._id}`)
  }

  return (
    <div>
      <Helmet>
        <title>PhotoGalaxy - Best Free Images</title>
      </Helmet>
      <div>
        <SearchBar />
        <Gallery
          images={imgGallery}
          enableImageSelection={false}
          onClick={openEachPhotoPage}
          margin={3}
        />
      </div>
    </div>
  )
}
