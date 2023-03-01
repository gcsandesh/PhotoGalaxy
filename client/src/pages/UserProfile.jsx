import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Masonry from "react-masonry-css"
import "../pages/Home/myMasonry.css"
import { Gallery } from "react-grid-gallery"

export default function UserProfile() {
  const params = useParams()
  console.log(params.username)
  const [userUploads, setUserUploads] = useState([
    {
      src: "https://picsum.photos/id/0/5000/3333",
      width: 950,
      height: 200,
    },
    {
      src: "https://fastly.picsum.photos/id/220/350/350.jpg?hmac=I8BX8Fg9UVkOB74C1exWvExDIOJ51GdzCEEagiS9_yM",
      width: 3500,
      height: 750,
    },
    {
      src: "https://fastly.picsum.photos/id/52/350/350.jpg?hmac=Q3V4GgnpXq3S-pwb99ATu6mk3zGJqzdErVGc2wJ6vRY",
      width: 1920,
      height: 80,
    },
    {
      src: "https://fastly.picsum.photos/id/354/350/350.jpg?hmac=HhYdM2mII9asa3KjiazJD73aGn9hUICREn_Gykn9CPM",
      width: 850,
      height: 350,
    },
    // "https://fastly.picsum.photos/id/157/350/350.jpg?hmac=gN2xTuBJNpOIVuaONznS68vPBxSqzjEgfhQIm98DwVg",
    // "https://fastly.picsum.photos/id/508/350/350.jpg?hmac=X236OAe_2017MlLZY04X8oKeGFVbUYczLpjxay60ng8",
    // "https://fastly.picsum.photos/id/276/350/350.jpg?hmac=kqf4R4SbB4w60auIIrtINYNUOFz_RFj7uknropXL3yw",
    // "https://fastly.picsum.photos/id/360/350/350.jpg?hmac=wjOROWvGHRRpiVwrjS9sxQqemOesWIWjTUsNNKwxwfY",
    // "https://fastly.picsum.photos/id/694/350/350.jpg?hmac=tQGoxPHX67TNRhPH7gM_uAf2ETfluWHGLPd_9b6uS3I",
    // "https://fastly.picsum.photos/id/947/350/350.jpg?hmac=vfcL8pWU_Ei-ahXAB7TRFXVUthns1MsrAIsSlFeOIQ8",
    // "https://fastly.picsum.photos/id/755/200/300.jpg?hmac=CfzLROBA3atEQnBKXK5SeavNo-1QRwZRwcqZwwdBMdM",
  ])

  const userUploadsImgEls =
    userUploads &&
    userUploads.map((photo, index) => <img key={index} src={photo} />)

  return (
    <div>
      <div className="flex flex-col items-center w-full">
        <div className="my-2">
          <img
            className="w-24 h-24 rounded-full"
            src="https://fastly.picsum.photos/id/1062/350/350.jpg?hmac=DW0o1zff5dPjJt4417pmt5iMxt6XEKpT0WbTeHtpL8Q"
            alt="Profile Picture Of The Creator"
          />
        </div>
        <div className="my-4 text-center">
          <h1 className="font-bold text-xl"> Subek Adhikary </h1>
          <div>
            <p className="text-center">
              Hello there, I love clicking pictures. This is my hobby.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-bold my-2 text-xl underline underline-offset-4 text-center">
          Photos by Subek Adhikary
        </h3>
        <div className="my-2">
          <Gallery images={userUploads} enableImageSelection={false} />
        </div>
      </div>
    </div>
  )
}
