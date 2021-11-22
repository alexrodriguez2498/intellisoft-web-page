import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { NavbarVersionOne } from "../components/Navbar/NavbarVersionOne"
import { BannerOne } from "../components/Banner/bannerOne"
import { BrandsSectionOne } from "../components/Brands"
import { BannerTwo } from "../components/Banner/BannerTwo"
import { Services } from "../components/Services"
import { BannerThree } from "../components/Banner/BannerThree"
import { Testimonials } from "../components/Testomonials"
import { ContactPreview } from "../components/ContactPreview"
import { Expertise } from "../components/Expertise"
import { Stats } from "../components/Stats"
import { CtoBanner } from "../components/Banner/ctaBanner"
import { Portfolio } from "../components/Portfolio"
import { Logo } from "../components/Loader"
import { useState, useEffect } from "react"

const IndexPage = () => {
  return (
    <section style={{ overflowX: "hidden" }}>
      <NavbarVersionOne />
      <Layout>
        <Logo />
        <Seo title="Home" />
        <BannerOne />
        {/*<BrandsSectionOne />*/}
        <BannerTwo />
        <Services />
        <Portfolio />
        <BannerThree />
        <Stats />
        <Expertise />
        <Testimonials />
        <CtoBanner />
        <ContactPreview />
      </Layout>
    </section>
  )
}


export default IndexPage
