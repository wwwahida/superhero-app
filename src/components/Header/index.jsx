import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-link">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/favourites">My Favourites</NavLink>
          <NavLink to="/compare">Compare</NavLink>
        </div>
      </nav>
      <Outlet />
    </header>
  );
}
