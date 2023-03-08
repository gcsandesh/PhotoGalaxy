import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaRegBell, FaRegUserCircle, FaUpload } from "react-icons/fa"
import { SiteLogo } from "../common"
import UserOptions from "./UserOptions"
import MobileNavigation from "./MobileNavigation"
import { useSelector } from "react-redux"

export default function Header() {
  const [openMenu, setOpenMenu] = useState("")
  const {
    user: { isLoggedIn },
  } = useSelector((store) => store.auth)

  const [notifications, setNotifications] = useState([
    {
      notificationID: "somerandomid1",
      date: "2023-02-21",
      time: "15:45:00",
      message: "Congratulations! You have received 10 points.",
    },
    {
      notificationID: "somerandomid2",
      date: "2023-02-21",
      time: "15:45:00",
      message: "John started following you.",
    },
    {
      notificationID: "somerandomid3",
      date: "2023-02-21",
      time: "15:45:00",
      message: "Upload complete!",
    },
  ])

  const notificationEls = notifications.map((notif) => {
    return (
      <div
        key={notif.notificationID}
        className="border-b-2 border-b-amber-800 border-opacity-25 p-2"
      >
        {notif.message}
      </div>
    )
  })

  // console.log(openMenu)
  return (
    <div className=" shadow-md text-dark bg-[#d4a373] z-50 fixed top-0 left-0 right-0">
      <div className="container mx-auto p-4 flex items-center sm:justify-between justify-center">
        {/* HAMBURGER MENU */}
        <div title="Menu" className="sm:hidden">
          <MobileNavigation />
        </div>

        {/* LOGO */}
        <div className="mx-auto sm:mx-2">
          <SiteLogo logoColor={"light"} />
        </div>

        {/* NAV */}
        <div className="hidden sm:flex gap-2 items-center ml-auto">
          {/* UPLOAD button */}
          <div>
            <Link to="/upload">
              <button
                type="button"
                className="flex gap-2 items-center justify-around text-white bg-blue-500 hover:bg-blue-700 font-bold px-2 py-2 sm:py-1 rounded focus:outline-none"
              >
                <FaUpload /> <span className="hidden sm:inline">Upload</span>
              </button>
            </Link>
          </div>

          {/* EXPLORE menu */}
          <div>
            <div
              title="Explore"
              className={"relative"}
              onClick={() =>
                setOpenMenu((prevOpenMenu) =>
                  prevOpenMenu === "explore" ? "" : "explore"
                )
              }
            >
              Explore
              {openMenu === "explore" && (
                <ul
                  data-aos="fade-in"
                  className={
                    "whitespace-nowrap absolute right-0 top-12 shadow-md flex flex-col gap-2 bg-[#d4a373] text-white rounded p-3"
                  }
                >
                  <li className="border-b-2 border-b-amber-800 border-opacity-25 p-2">
                    <NavLink as={Link} to="/categories/top">
                      Top Downloaded
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </div>

          {/* if user is logged in, show notification icon and option to visit dashboard */}
          {/* NOTIFICATION */}
          {isLoggedIn && (
            <div
              onClick={() =>
                setOpenMenu((prevOpenMenu) =>
                  prevOpenMenu === "notifications" ? "" : "notifications"
                )
              }
              className="relative"
            >
              {<FaRegBell size={24} />}
              {openMenu === "notifications" && (
                <div
                  data-aos="fade-in"
                  className="text-sm w-64 absolute right-0 top-12 shadow-md flex flex-col gap-2 bg-[#d4a373] text-white rounded p-3"
                >
                  {notificationEls}
                </div>
              )}
            </div>
          )}

          {/* USER menu */}
          <div className="relative">
            <FaRegUserCircle
              size={24}
              onClick={() =>
                setOpenMenu((prevState) => (prevState === "user" ? "" : "user"))
              }
            />
            {openMenu === "user" && <UserOptions />}
          </div>
        </div>
      </div>
    </div>
  )
}
