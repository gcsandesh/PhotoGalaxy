import React from "react"
import { Helmet } from "react-helmet"
import { SearchBar } from "../../components/common"
import { Gallery } from "react-grid-gallery"

export default function Home() {
  const [images, setImages] = React.useState([])

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
    src: eachImage.download_url,
  }))

  return (
    <div>
      <Helmet>
        <title>PhotoGalaxy - Best Free Images</title>
      </Helmet>
      <div>
        <SearchBar />
        <Gallery images={imgGallery} enableImageSelection={false} />
      </div>
    </div>
  )
}
