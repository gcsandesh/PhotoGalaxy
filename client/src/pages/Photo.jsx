import React from "react"
import {
  FaAngleDown,
  FaArrowDown,
  FaCaretDown,
  FaHeart,
  FaRegHeart,
  FaShareAlt,
} from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

export default function Photo() {
  const { id } = useParams()

  //   console.log(id)
  //   search for this id in database and get photo details

  const { user } = useSelector((store) => store.auth)
  // console.log(currentUser)
  const img = {
    id: id,
    src: "https://picsum.photos/id/1/5000/3333",
    alt: "random",
    title: "Man typing on a MacBook Air sitting on a bench at a park",
    width: 1090,
    height: 800,
    likes: 99,
    author: {
      _id: "asdf93493fsaf98asdf",
      firstName: "Laxman",
      lastName: "Thapa",
      email: "thapalaxman@gamaile.com",
      bio: "Namaskar! mero nam laxman ho ra malai photo khichna ma sanai dekhi ruchi xa",
    },
    uploadedOn: "12-03-2023",
    fileSize: "2.77 MB",
    tags: [
      "laptop",
      "man",
      "furniture",
      "macbook",
      "park",
      "typing",
      "working",
    ],
    likedBy: [
      {
        _id: "asdf93493fsaf98asdf",
        firstName: "Laxman",
        lastName: "Thapa",
        email: "thapalaxman@gamaile.com",
        bio: "Hello I am Laxman Thapa Photographer.",
      },
      {
        _id: "asdf93493fsaf98asdf",
        firstName: "Ram",
        lastName: "Karki",
        email: "karkiram@gamal.com",
        bio: "",
      },
      {
        _id: "asdfas3ii31asdf",
        firstName: "Ram",
        lastName: "Karki",
        email: "johndoe@gmail.com",
        bio: "",
      },
    ],
  }

  const currentURL = window.location.href
  function copyPhotoURL() {
    navigator.clipboard.writeText(currentURL)
  }

  return (
    <div className="container p-4 mx-auto ">
      <div className="grid grid-cols-3 gap-4">
        {/* PHOTO CONTAINER */}
        <div className="h-full col-start-1 col-end-3 rounded-lg">
          <img
            src={img.src}
            className="rounded-lg h-full object-contain"
            data-aos="fade-in"
            alt={img.alt}
          />
        </div>
        {/* RIGHT SIDE CONTAINING DETAILS ABOUT PHOTO */}
        <div className="col-start-3 col-end-4 text-sm h-full flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{img.title}</h1>
          <div className="flex items-center gap-4">
            {/* LIKE AND SHARE ICONS  */}
            <span className="flex items-center gap-2">
              {img.likedBy.find(
                (eachUser) => eachUser.email === user.email
              ) ? (
                <FaHeart className="cursor-pointer" />
              ) : (
                <FaRegHeart className="cursor-pointer" />
              )}{" "}
              {img.likes}
            </span>
            <FaShareAlt onClick={copyPhotoURL} className="cursor-pointer" />
          </div>
          {/* DOWNLOAD BUTTON */}
          <button className=" py-4 rounded bg-green-500 text-white font-bold text-lg">
            <a href="https://picsum.photos/id/1/5000/3333" download={true}>
              DOWNLOAD
            </a>
          </button>
          {/* PHOTO DETAILS */}
          <div className="flex flex-col gap-2">
            <span>
              <span className="font-semibold">Uploaded on:</span>{" "}
              {img.uploadedOn}
            </span>
            <span>
              <span className="font-semibold">File size:</span> {img.fileSize}
            </span>
            <span>
              <span className="font-semibold">Dimensions:</span> {img.width} x{" "}
              {img.height}
            </span>
            <span>
              <span className="font-semibold">Tags:</span>
              <span className="flex flex-wrap gap-1">
                {img.tags.map((tag, index) => (
                  <span key={index}>"{tag}" </span>
                ))}
              </span>
            </span>
          </div>
          {/* AUTHOR DETAILS */}
          <div className="">
            <h3>Uploaded by:</h3>
            <h2 className="font-bold">
              <Link
                to={`/profile/${img.author.firstName}${img.author.lastName}`}
                state={img.author}
              >
                {img.author.firstName} {img.author.lastName}
              </Link>
            </h2>
            <p>400 Likes</p>
          </div>
        </div>
      </div>

      {/* SHOW SIMILAR IMAGES BUTTON */}
      <div className="flex items-center mt-10">
        <hr className="w-[40%] border-dark opacity-25 bg-dark" />
        <button className="rounded-full w-64 mx-auto text-sm border-2 border-dark font-bold opacity-50 hover:opacity-90 transition-all duration-300 px-8 flex flex-col items-center gap-0">
          <span>Similar Images</span> <FaAngleDown />
        </button>
        <hr className="w-[40%] border-dark opacity-25 bg-dark" />
      </div>
    </div>
  )
}
