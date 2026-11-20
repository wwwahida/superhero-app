import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/search">Search</NavLink>
        <NavLink to="/favourites">My Favourites</NavLink>
        <NavLink to="/compare">Compare</NavLink>
      </nav>
      <Outlet />
    </header>
  )
}
