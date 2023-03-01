import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { FaRegBell, FaRegUserCircle } from "react-icons/fa"
import { SiteLogo } from "../common"

export default function Header() {
  const isLoggedIn = false
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
    <div className="shadow-md mb-4 py-2 bg-highlightOrange">
      <div className="flex justify-between">
        {/* LOGO */}
        <SiteLogo logoColor={"light"} />

        {/* NAV */}
        <div className="flex gap-2 items-center">
          {/* UPLOAD button */}
          <div>
            <Link to="/upload">
              <button>Upload</button>
            </Link>
          </div>

          {/* EXPLORE menu */}
          <div>
            <div title="Explore">
              <NavLink as={Link} to="/categories/top">
                Top Downloaded
              </NavLink>
            </div>
          </div>

          {/* if user is logged in, show notification icon and option to visit dashboard */}
          {isLoggedIn ? (
            <>
              {/* NOTIFICATION */}
              <div onClick={toggleNotification}>
                <div>
                  {<FaRegBell size={24} />}
                  {notificationEls}
                </div>
              </div>

              {/* USER menu */}
              <div>
                <div>
                  <FaRegUserCircle size={24} />
                  <div as={Link} to="/dashboard">
                    Dashboard
                  </div>
                  <div>Log Out</div>
                </div>
              </div>
            </>
          ) : (
            <div>
              {/* if user is not logged in, show option to login/signup */}
              <div>
                <FaRegUserCircle size={24} />
                <NavLink as={Link} to="/login">
                  Log In
                </NavLink>
                <NavLink as={Link} to="/signup">
                  Sign Up
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
