import React, { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { Gallery } from "react-grid-gallery"

export default function UserProfile() {
  const navigate = useNavigate()

  const location = useLocation()
  const propsData = location.state
  const author = propsData

  const [userUploads, setUserUploads] = useState([
    {
      _id: "123",
      src: "https://picsum.photos/id/0/5000/3333",
      width: 950,
      height: 200,
    },
    {
      _id: "111",
      src: "https://fastly.picsum.photos/id/220/350/350.jpg?hmac=I8BX8Fg9UVkOB74C1exWvExDIOJ51GdzCEEagiS9_yM",
      width: 3500,
      height: 750,
    },
    {
      _id: "222",
      src: "https://fastly.picsum.photos/id/52/350/350.jpg?hmac=Q3V4GgnpXq3S-pwb99ATu6mk3zGJqzdErVGc2wJ6vRY",
      width: 1920,
      height: 800,
    },
    {
      _id: "333",
      src: "https://fastly.picsum.photos/id/354/350/350.jpg?hmac=HhYdM2mII9asa3KjiazJD73aGn9hUICREn_Gykn9CPM",
      width: 850,
      height: 350,
    },
    {
      _id: "333",
      src: "https://fastly.picsum.photos/id/354/350/350.jpg?hmac=HhYdM2mII9asa3KjiazJD73aGn9hUICREn_Gykn9CPM",
      width: 850,
      height: 850,
    },
  ])

  function handleImgClick(index, image, event) {
    // console.log("clicked")
    // console.log(index)
    // console.log(image)
    // console.log(event)
    navigate(`/photo/${image._id}`)
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center w-full">
        <div className="my-2">
          <img
            className="w-24 h-24 rounded-full"
            src="https://fastly.picsum.photos/id/1062/350/350.jpg?hmac=DW0o1zff5dPjJt4417pmt5iMxt6XEKpT0WbTeHtpL8Q"
            alt="Profile Picture Of The Creator"
          />
        </div>
        <div className="my-4 text-center">
          <h1 className="font-bold text-xl">
            {author.firstName + " " + author.lastName}
          </h1>
          <h1 className="font-bold text-sm">{author.email}</h1>
          <p className="text-center w-1/2 mx-auto my-2">{author.bio}</p>
        </div>
      </div>
      <hr className="border-2 border-dark mt-6 mb-2" />

      {/* USER UPLOADS SECTION */}
      <div className="mt-4">
        <h3 className="font-bold my-2 text-xl underline underline-offset-4 text-center">
          Photos by {author.firstName + " " + author.lastName}
        </h3>
        <div className="my-2">
          <Gallery
            images={userUploads}
            enableImageSelection={false}
            onClick={handleImgClick}
          />
        </div>
      </div>
    </div>
  )
}
