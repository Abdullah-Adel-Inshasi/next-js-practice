import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul className="main-nav">
        <li>
          <Link href="/">
            <a href="">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/dashboard">
            <a>Dashboard</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Sign In</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Sign Out</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
