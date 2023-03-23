import React, { useEffect, useState } from "react"
import { toast } from "react-hot-toast"
import {
  FaAngleDown,
  FaCloudDownloadAlt,
  FaHeart,
  FaRegHeart,
  FaShareAlt,
} from "react-icons/fa"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"
import { GET_PHOTO_BY_ID } from "../constants"

export default function Photo() {
  const { user } = useSelector((store) => store.auth)
  const { id } = useParams() //   search this id in database and get photo details
  const initialPhoto = {
    _id: id,
    url: "https://picsum.photos/id/1/5000/3333",
    alt: "PhotoGalaxy",
    // title: "Man typing on a MacBook Air sitting on a bench at a park",
    dimensions: { width: 1090, height: 800 },
    likes_count: 99,
    resource_type: "image",
    uploaded_by: {
      _id: "asdf93493fsaf98asdf",
      first_name: "Laxman",
      last_name: "Thapa",
      email: "thapalaxman@gamaile.com",
      bio: "Namaskar! mero nam laxman ho ra malai photo khichna ma sanai dekhi ruchi xa",
    },
    createdAt: "2023-03-17T16:07:02.806Z",
    bytes: 2048,

    tags: [
      "laptop",
      "man",
      "furniture",
      "macbook",
      "park",
      "typing",
      "working",
    ],
    liked_by: [
      {
        _id: "asdf93493fsaf98asdf",
        first_name: "Laxman",
        last_name: "Thapa",
        email: "thapalaxman@gamaile.com",
        bio: "Hello I am Laxman Thapa Photographer.",
      },
      {
        _id: "asdf93493fsaf98asdf",
        first_name: "Ram",
        last_name: "Karki",
        email: "karkiram@gamal.com",
        bio: "",
      },
      {
        _id: "asdfas3ii31asdf",
        first_name: "Ram",
        last_name: "Karki",
        email: "johndoe@gmail.com",
        bio: "",
      },
    ],
  }
  const [photo, setPhoto] = useState(initialPhoto)

  useEffect(() => {
    fetch(GET_PHOTO_BY_ID + id)
      .then((res) => res.json())
      .then((data) => {
        data.photo && setPhoto(data.photo)
      })
      .catch((error) => {
        console.log(error)
        toast.error("Error getting photo!")
      })
  }, [GET_PHOTO_BY_ID])

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
            src={photo.url}
            className="rounded-lg h-full object-contain"
            data-aos="fade-in"
            alt={photo.alt}
          />
        </div>
        {/* RIGHT SIDE CONTAINING DETAILS ABOUT PHOTO */}
        <div className="col-start-3 col-end-4 text-sm h-full flex flex-col gap-4">
          {/* <h1 className="text-2xl font-semibold">{photo.title}</h1> */}
          <div className="flex items-center gap-4">
            {/* LIKE AND SHARE ICONS  */}
            <span className="flex items-center gap-2 cursor-pointer">
              {photo.liked_by?.length &&
              photo.liked_by.find((eachUser) => eachUser._id === user._id) ? (
                <FaHeart />
              ) : (
                <FaRegHeart />
              )}{" "}
              {photo.likes_count}
            </span>
            <FaShareAlt onClick={copyPhotoURL} className="cursor-pointer" />
          </div>
          {/* DOWNLOAD BUTTON */}
          <button className=" py-4 rounded bg-green-500 text-white font-bold text-lg">
            <a href={photo.url} download={true}>
              <FaCloudDownloadAlt /> DOWNLOAD
            </a>
          </button>
          {/* PHOTO DETAILS */}
          <div className="flex flex-col gap-2">
            <span>
              <span className="font-semibold">Uploaded on:</span>{" "}
              {photo.uploadedOn}
            </span>
            <span>
              <span className="font-semibold">File size:</span>{" "}
              {photo.bytes <= 1024
                ? photo.bytes
                : photo.bytes <= 1048576
                ? (photo.bytes / 1024).toFixed(2) + " KB"
                : photo.bytes / (1024 * 1024) + " MB"}
            </span>
            <span>
              <span className="font-semibold">Dimensions:</span>{" "}
              {photo.dimensions?.width} x {photo.dimensions?.height}
            </span>
            <span>
              <span className="font-semibold">Tags:</span>
              <span className="flex flex-wrap gap-1">
                {photo.tags?.map((tag, index) => (
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
                to={`/profile/${photo.uploaded_by?._id}`}
                state={photo.uploaded_by}
              >
                {photo.uploaded_by?.first_name} {photo.uploaded_by?.last_name}
              </Link>
            </h2>
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
