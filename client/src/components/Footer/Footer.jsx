import React from 'react'
import { SiteLogo } from '../common'

export default function Footer() {
  return (
    <div className="bg-[#001219] text-gray-300 mt-auto p-4 ">
      <div className="container mx-auto w-full grid grid-cols-1 text-center md:text-left gap-4">
        <div className="m-auto my-4">
          <SiteLogo logoColor={'light'} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-start justify-around gap-2">
          {/* EXPLORE */}
          <div className="mx-auto">
            <h5 className=" font-semibold text-gray-50 underline underline-offset-2">
              Explore
            </h5>
            <ul>
              <li className=" hover:text-gray-50 cursor-pointer">Most Liked</li>
              <li className=" hover:text-gray-50 cursor-pointer">
                Latest Uploads
              </li>
              <li className=" hover:text-gray-50 cursor-pointer">
                Most Downloaded
              </li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div className="mx-auto">
            <h5 className=" font-semibold text-gray-50 underline underline-offset-2">
              Quick Links
            </h5>
            <ul>
              <li className=" hover:text-gray-50 cursor-pointer">Home</li>
              <li className=" hover:text-gray-50 cursor-pointer">Categories</li>
              <li className=" hover:text-gray-50 cursor-pointer">Upload</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div className="mx-auto">
            <h5 className=" font-semibold text-gray-50 underline underline-offset-2">
              Contact
            </h5>
            <ul>
              <li className=" hover:text-gray-50 cursor-pointer">
                PhotoGalaxy Inc.
              </li>
              <li className=" hover:text-gray-50 cursor-pointer">
                info.photogalaxy.com.np
              </li>
            </ul>
          </div>
        </div>

        {/* TERMS AND CONDITIONS */}
        <div className="text-center lg:text-right text-gray-400 text-sm uppercase font-bold">
          <div>Terms of Service</div>
          <div>Privacy Policy</div>
        </div>
      </div>
      <span className="text-sm">
        &copy;PhotoGalaxy 2023 - All Rights Reserved
      </span>
    </div>
  )
}
