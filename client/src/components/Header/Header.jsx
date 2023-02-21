import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaRegBell, FaRegUserCircle } from "react-icons/fa"
import { Container, Nav, NavItem, NavDropdown, Button } from "react-bootstrap"
import DropdownItem from "react-bootstrap/esm/DropdownItem"
import { SiteLogo } from "../common"

export default function Header() {
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

  const notificationEls = notifications.map((notif) => (
    <DropdownItem key={notif.notificationID} className="border">
      {notif.message}
    </DropdownItem>
  ))

  function toggleNotification() {
    // here we should fetch notifications for that user
    //setNotification("the fetched notification")
    // setIsNotificationOn((prevState) => !prevState)
  }

  // console.log(isNotificationOn)
  return (
    <Container fluid className="shadow mb-4">
      <Container className="d-flex justify-content-between">
        <SiteLogo />

        <Nav className="d-flex gap-2 align-items-center">
          <NavDropdown title="Explore">
            <DropdownItem>Top Downloaded</DropdownItem>
          </NavDropdown>
          <NavItem>
            <Link to="/upload">
              <Button>Upload</Button>
            </Link>
          </NavItem>
          <NavItem onClick={toggleNotification}>
            <NavDropdown title={<FaRegBell size={24} />}>
              {notificationEls}
            </NavDropdown>
          </NavItem>
          <NavItem>
            <FaRegUserCircle size={24} />
          </NavItem>
        </Nav>
      </Container>
    </Container>
  )
}
