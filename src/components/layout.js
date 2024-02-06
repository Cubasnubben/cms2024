import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/style.css"

import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => (
  <>
    <Navbar></Navbar>
    <header className="header-link"></header>
    <main>{children}</main>
    <Footer></Footer>
  </>
)

export default Layout
