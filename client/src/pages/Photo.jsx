import React from "react"
import { useParams } from "react-router-dom"

export default function Photo() {
  const { id } = useParams()
  //   console.log(id)
  //   search for this id in database and get photo details
  const img = {
    id: id,
    src: "https://picsum.photos/id/1/5000/3333",
    alt: "random",
  }
  return (
    <div>
      <div className="flex items-start justify-between gap-2">
        <img src={img.src} className="w-2/3" data-aos="fade-in" alt={img.alt} />
        <div className="w-1/3">
          <h3>Author: Sandesh GC</h3>
          <button>DOWNLOAD</button>
        </div>
      </div>
    </div>
  )
}
