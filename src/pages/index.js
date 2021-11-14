import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { NavbarVersionOne } from "../components/Navbar/NavbarVersionOne"
import { ExampleScroll } from "../components/ExampleScroll"
import {
  Col,
  Row,
} from 'reactstrap'
import { BannerOne } from "../components/Banner/bannerOne"
import { BrandsSectionOne, Index } from "../components/Brands"
import { BannerTwo } from "../components/Banner/BannerTwo"
import { Services } from "../components/Services"
import { BannerThree } from "../components/Banner/BannerThree"
import { Testimonials } from "../components/Testomonials"

const IndexPage = () => (
  <>
    <NavbarVersionOne />
    <Layout>
      <Seo title="Home" />
      <BannerOne />
      <BrandsSectionOne />
      <BannerTwo />
      <Services />
      <BannerThree />
      <Testimonials />
      <ExampleScroll />
    </Layout>
  </>

)

export default IndexPage
