import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { NavbarVersionOne } from "../components/Navbar/NavbarVersionOne"
import { ExampleScroll } from "../components/ExampleScroll"
import { BannerOne } from "../components/Banner/bannerOne"
import { BrandsSectionOne, Index } from "../components/Brands"
import { BannerTwo } from "../components/Banner/BannerTwo"
import { Services } from "../components/Services"
import { BannerThree } from "../components/Banner/BannerThree"
import { Testimonials } from "../components/Testomonials"
import { ContactPreview } from "../components/ContactPreview"
import { Expertise } from "../components/Expertise"

const IndexPage = () => (
  <div style={{overflowX: 'hidden'}}>
    <NavbarVersionOne />
    <Layout>
      <Seo title="Home" />
      <BannerOne />
      <BrandsSectionOne />
      <BannerTwo />
      <Services />
      <BannerThree />
      <Expertise />
      <Testimonials />
      <ContactPreview />
      {/* <ExampleScroll /> */}
    </Layout>
  </div>

)

export default IndexPage
