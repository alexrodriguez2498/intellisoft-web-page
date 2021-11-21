import React, { useEffect, useState } from "react"
import { CtoButton, CustomNav, LinksContainer, LogoContainer } from "./styles"
import { StaticImage } from "gatsby-plugin-image"
import { animateScroll as scroll, Link } from "react-scroll"
import BurguerMenu from "../components/BurguerMenu"

const navLinks = [
  { text: "Services", url: "services" },
  { text: "Work", url: "portfolio" },
  { text: "About Us", url: "testimonies" },
  { text: "Contact", url: "contact" },
]

export const NavbarVersionOne = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false)
  const [responsiveNav, setResponsiveNav] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const isBrowser = () => typeof window !== "undefined"

  const changeNavbarPosition = () => {

    if (isBrowser()) {
      if (window.scrollY >= 50) {
        setFixedNavbar(true)
      } else {
        setFixedNavbar(false)
      }
    }
  }

  useEffect(() => {
    if (isBrowser()) {
      if (window.innerWidth < 800) {
        console.log("repsonsive nav")
        setResponsiveNav(true)
      } else {
        setResponsiveNav(false)
      }
    }
  }, [])

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  if (isBrowser()) {
    window.addEventListener("scroll", changeNavbarPosition)
  }

  return (
    <CustomNav background={fixedNavbar ? "white" : "transparent"}>
      <LogoContainer onClick={scrollToTop}>
        <StaticImage
          src={"../../../images/logo.png"}
          alt={"intellisoft logo image"}
          placeholder={"blurred"}
          width={60}
          height={60}
        />
      </LogoContainer>
      {
        !responsiveNav && (
          <>
            <LinksContainer>
              {
                navLinks.map((link, index) => (
                  <Link className="link" activeClass="active-link" to={link.url} spy={true} smooth={true} duration={500}
                        key={index}>
                    {link.text}
                  </Link>
                ))
              }
            </LinksContainer>
            <CtoButton> Let's talk!</CtoButton>
          </>
        )
      }

      {
        responsiveNav && (
          <div>
            <BurguerMenu />
          </div>
        )
      }

    </CustomNav>
  )


}
