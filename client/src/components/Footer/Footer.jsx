import React from "react"
import { SiteLogo } from "../common"

export default function Footer() {
  return (
    <div className="bg-dark text-light mt-auto py-4">
      <div className="px-0">
        <div className="mx-auto gap-2 justify-between">
          <div className=" text-center">
            <SiteLogo logoColor={"light"} />
          </div>
          <div className="">
            <h5>Explore</h5>
            <ul className="p-0">
              <li>Most Liked</li>
              <li>Latest Uploads</li>
              <li>Most Downloaded</li>
            </ul>
          </div>
          <div className="">
            <h5>Quick Links</h5>
            <ul className="p-0">
              <li>Home</li>
              <li>Categories</li>
              <li>Upload</li>
            </ul>
          </div>
          <div className="">
            <h5>Contact</h5>
            <ul className="p-0">
              <li>PhotoGalaxy Inc.</li>
              <li>info.photogalaxy.com.np</li>
            </ul>
          </div>
          <div className="">
            <div>Terms of Service</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}
