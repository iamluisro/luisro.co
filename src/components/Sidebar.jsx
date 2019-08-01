import React from "react"

export default function Sidebar({ children }) {
  return (
    <div className="sidebar">
      <div className="Sidebar-container">{children}</div>
    </div>
  )
}
