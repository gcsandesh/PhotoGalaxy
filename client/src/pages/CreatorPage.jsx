import React from "react"

export default function CreatorPage() {
  return (
    <div>
      <div className="container">
        <img
          className="profile-pic"
          src="path/to/profile_pic.jpg"
          alt="Profile Picture Of The Creator"
        />
      </div>
      <div className="container">
        <h1> Subek Adhikary </h1>
        <div className="bio">
          <p>Hello there, I love clicking pictures. This is my hobby.</p>
        </div>
        <h2> 5000 Points </h2>
      </div>
      <div className="container">
        <h3>Photos by Subek Adhikary </h3>
        <div className="photos" />
        <img className="photo" src="path/to/photo1.jpg" alt="Photo 1" />
        <img className="photo" src="path/to/photo2.jpg" alt="Photo 2" />
        <img className="photo" src="path/to/photo3.jpg" alt="Photo 3" />
      </div>
      <h2> 5000 Points </h2>
      <div className="container">
        <h3>Photos by Subek Adhikary </h3>
        <div className="photos" />
        <img className="photo" src="path/to/photo1.jpg" alt="Photo 1" />
        <img className="photo" src="path/to/photo2.jpg" alt="Photo 2" />
        <img className="photo" src="path/to/photo3.jpg" alt="Photo 3" />
      </div>
    </div>
  )
}
