import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaRegBell, FaRegUserCircle } from "react-icons/fa"
import { Container, Nav, NavItem, NavDropdown, Button } from "react-bootstrap"
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
      return (
        <NavDropdown.Item key={notif.notificationID}>
          {notif.message}
        </NavDropdown.Item>
      )
    }
    return (
      <NavDropdown.Item key={notif.notificationID}>
        {notif.message}

        <NavDropdown.Divider />
      </NavDropdown.Item>
    )
  })

  function toggleNotification() {
    // here we should fetch notifications for that user
    //setNotification("the fetched notification")
    // setIsNotificationOn((prevState) => !prevState)
  }

  // console.log(isNotificationOn)
  return (
    <Container fluid className="shadow mb-4 py-2 bg-skyBlue">
      <Container className="d-flex justify-content-between">
        {/* LOGO */}
        <SiteLogo logoColor={"dark"} />

        {/* NAV */}
        <Nav className="d-flex gap-2 align-items-center">
          {/* UPLOAD button */}
          <NavItem>
            <Link to="/upload">
              <Button>Upload</Button>
            </Link>
          </NavItem>

          {/* EXPLORE menu */}
          <NavItem>
            <NavDropdown title="Explore" menuVariant="dark">
              <NavDropdown.Item as={Link} to="/categories/top">
                Top Downloaded
              </NavDropdown.Item>
            </NavDropdown>
          </NavItem>

          {/* if user is logged in, show notification icon and option to visit dashboard */}
          {isLoggedIn ? (
            <>
              {/* NOTIFICATION */}
              <NavItem onClick={toggleNotification}>
                <NavDropdown title={<FaRegBell size={24} />} menuVariant="dark">
                  {notificationEls}
                </NavDropdown>
              </NavItem>

              {/* USER menu */}
              <NavItem>
                <NavDropdown
                  menuVariant="dark"
                  className="text-white"
                  title={<FaRegUserCircle size={24} />}
                >
                  <NavDropdown.Item as={Link} to="/dashboard">
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item>Log Out</NavDropdown.Item>
                </NavDropdown>
              </NavItem>
            </>
          ) : (
            <NavItem>
              {/* if user is not logged in, show option to login/signup */}
              <NavDropdown
                menuVariant="dark"
                className="text-white"
                title={<FaRegUserCircle size={24} />}
              >
                <NavDropdown.Item as={Link} to="/login">
                  Log In
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/signup">
                  Sign Up
                </NavDropdown.Item>
              </NavDropdown>
            </NavItem>
          )}
        </Nav>
      </Container>
    </Container>
  )
}
