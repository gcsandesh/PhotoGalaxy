import React from "react"
import { Outlet } from "react-router-dom"
import { AdminSideNav, AdminTopNav } from ".."

export default function AdminPanel() {
  return (
    <main className="container mx-auto p-4">
      <AdminTopNav />
      <h1 className="text-5xl font-bold m-4">Admin Panel</h1>
      <div className="grid grid-cols-12 gap-4">
        <ul className="col-start-1 col-end-4 bg-[#023047] rounded-lg text-gray-50 block w-full">
          <AdminSideNav />
        </ul>

        <div className="col-start-4 col-end-12 p-4 border-2 rounded-lg">
          <Outlet />
        </div>
      </div>
    </main>
  )
}
