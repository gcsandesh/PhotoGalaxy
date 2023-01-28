import React from "react"

export default function CreatorPage() {
    return (
        <div>
            <div class="container">
                <img class="profile-pic" src="path/to/profile_pic.jpg" alt="Profile Picture Of The Creator" />
            </div>
            <div class="container">
                <h1> Subek Adhikary  </h1>
                <div class="bio">
                    <p>Hello, i love clicking pictures. This is my hobby.</p>
                </div>
                <h2> 5000 Points </h2>
            </div>
            <div class="container">
                <h3>Photos by Subek Adhikary </h3>
                <div class="photos" />
                <img class="photo" src="path/to/photo1.jpg" alt="Photo 1" />
                <img class="photo" src="path/to/photo2.jpg" alt="Photo 2" />
                <img class="photo" src="path/to/photo3.jpg" alt="Photo 3" />
            </div>
        </div>



    )
}
