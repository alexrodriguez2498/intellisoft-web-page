/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { NavbarVersionOne } from "./Navbar/NavbarVersionOne"

import "./layout.css"
import { Footer } from "./Footer"
import Email from "./email"
import Seo from "./seo"
import Social from "./social"

const Layout = ({ children, location }) => {
  const isHome = location.pathname === "/"

  return (
    <>
      {/*<Header siteTitle={data.site.siteMetadata?.title || `Title`} />*/}
      <Seo />
      <NavbarVersionOne />
      <div id="root">
        <Email isHome={isHome} />
        <Social isHome={isHome} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
