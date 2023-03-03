import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Gallery } from "react-grid-gallery"

export default function UserProfile() {
  const params = useParams()
  const navigate = useNavigate()
  console.log(params.username)

  // fetch user by using id that is passed to this component when user profile is clicked
  // {user:{ firstName: "", lastName:"", email:" " }}

  const user = {
    firstName: "Johnny",
    lastName: "Little",
    email: "littlejohnny@gmail.com",
    bio: "Hello I am Little Johnny. I like taking photos. I have uploaded some photos on PhotoGalaxy. My website: www.littlejohnny.org",
  }

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
    // "https://fastly.picsum.photos/id/157/350/350.jpg?hmac=gN2xTuBJNpOIVuaONznS68vPBxSqzjEgfhQIm98DwVg",
    // "https://fastly.picsum.photos/id/508/350/350.jpg?hmac=X236OAe_2017MlLZY04X8oKeGFVbUYczLpjxay60ng8",
    // "https://fastly.picsum.photos/id/276/350/350.jpg?hmac=kqf4R4SbB4w60auIIrtINYNUOFz_RFj7uknropXL3yw",
    // "https://fastly.picsum.photos/id/360/350/350.jpg?hmac=wjOROWvGHRRpiVwrjS9sxQqemOesWIWjTUsNNKwxwfY",
    // "https://fastly.picsum.photos/id/694/350/350.jpg?hmac=tQGoxPHX67TNRhPH7gM_uAf2ETfluWHGLPd_9b6uS3I",
    // "https://fastly.picsum.photos/id/947/350/350.jpg?hmac=vfcL8pWU_Ei-ahXAB7TRFXVUthns1MsrAIsSlFeOIQ8",
    // "https://fastly.picsum.photos/id/755/200/300.jpg?hmac=CfzLROBA3atEQnBKXK5SeavNo-1QRwZRwcqZwwdBMdM",
  ])

  function handleImgClick(index, image, event) {
    console.log("clicked")
    console.log(index)
    console.log(image)
    console.log(event)
    navigate(`/photo/${image._id}`)
  }

  return (
    <div className="container mx-auto">
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
            {user.firstName + " " + user.lastName}
          </h1>
          <h1 className="font-bold text-sm">{user.email}</h1>
          <p className="text-center w-1/2 mx-auto my-2">{user.bio}</p>
        </div>
      </div>
      <hr className="border-2 border-dark mt-6 mb-2" />

      {/* USER UPLOADS SECTION */}
      <div className="mt-4">
        <h3 className="font-bold my-2 text-xl underline underline-offset-4 text-center">
          Photos by {user.firstName + " " + user.lastName}
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
