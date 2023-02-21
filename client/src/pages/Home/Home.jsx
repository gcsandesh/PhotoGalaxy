import React from "react"
import Masonry from "react-masonry-css"
import "./myMasonry.css"
import { SearchBar } from "../../components/common"

export default function Home() {
  const [images, setImages] = React.useState([])
  //getting dummy images
  React.useEffect(() => {
    async function receiveImages() {
      const response = await fetch("https://picsum.photos/v2/list")
      if (!response.ok) throw new Error("Error while fetching!")

      const data = await response.json()
      setImages(data)
    }
    receiveImages()
    return () => console.log("remove Effect")
  }, [])

  const imgGallery = images.map((eachImage) => (
    <img
      data-aos="fade-up"
      key={eachImage.id}
      src={eachImage.download_url}
      className="w-100 home-masonry-grid_column"
    />
  ))

  return (
    <div>
      <div>
        <SearchBar />
        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="home-masonry-grid"
          columnClassName="home-masonry-grid_column"
        >
          {!imgGallery.length ? "Photo gallery here..." : imgGallery}
        </Masonry>
      </div>
    </div>
  )
}
