import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaBars, FaRegBell, FaRegUserCircle, FaUpload } from "react-icons/fa"
import { SiteLogo } from "../common"
import UserOptions from "./UserOptions"

export default function Header() {
  const isLoggedIn = true
  // const [isNotificationOn, setIsNotificationOn] = useState(false)
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

  const notificationEls = notifications.map((notif, index, originalArray) => {
    if (index === originalArray.length - 1) {
      return <div key={notif.notificationID}>{notif.message}</div>
    }
    return (
      <div key={notif.notificationID}>
        {notif.message}

        <div />
      </div>
    )
  })

  function toggleNotification() {
    // here we should fetch notifications for that user
    //setNotification("the fetched notification")
    // setIsNotificationOn((prevState) => !prevState)
  }

  // console.log(isNotificationOn)
  return (
    <div className="shadow-md py-4 px-2 text-dark bg-[#d4a373] z-50 fixed top-0 left-0 right-0">
      <div className="container mx-auto flex items-center sm:justify-between justify-center">
        {/* HAMBURGER MENU */}
        <div title="Menu" className="sm:hidden">
          <FaBars color="white" />
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
            <div title="Explore" className={"relative"}>
              Explore
              <NavLink
                as={Link}
                to="/categories/top"
                className={"hidden absolute"}
              >
                Top Downloaded
              </NavLink>
            </div>
          </div>

          {/* if user is logged in, show notification icon and option to visit dashboard */}
          {/* NOTIFICATION */}
          {isLoggedIn && (
            <div onClick={toggleNotification} className="relative">
              {<FaRegBell size={24} />}
              <div className="hidden absolute">{notificationEls}</div>
            </div>
          )}

          {/* USER menu */}
          <div className="relative">
            <FaRegUserCircle size={24} />
            {/* <UserOptions /> */}
          </div>
        </div>
      </div>
    </div>
  )
}
