import React from "react"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <>
      {" "}
      <li>
        <NavLink
          className="hover:bg-[#023e8a] px-4 py-4 w-full block duration-200"
          to=""
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-[#023e8a] px-4 py-4 w-full block duration-200"
          to="analytics"
        >
          SiteAnalytics
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-[#023e8a] px-4 py-4 w-full block duration-200"
          to="admin-mgmt"
        >
          Admin Management
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-[#023e8a] px-4 py-4 w-full block duration-200"
          to="user-mgmt"
        >
          User Management
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-[#023e8a] px-4 py-4 w-full block duration-200"
          to="reports"
        >
          Reported Items
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:bg-[#023e8a] px-4 py-4 w-full block duration-200"
          to="settings"
        >
          Settings
        </NavLink>
      </li>
    </>
  )
}

export default Navigation
