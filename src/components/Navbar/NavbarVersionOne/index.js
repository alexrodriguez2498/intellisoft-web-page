import React, { useState } from "react"
import { CustomNav, LinksContainer, LogoContainer } from "./styles"
import { StaticImage } from "gatsby-plugin-image"
import { animateScroll as scroll, Link } from "react-scroll"

const navLinks = [
  { text: "Services", url: "services" },
  { text: "Work", url: "container1" },
  { text: "Expertise", url: "expertise" },
  { text: "About Us", url: "testimonies" },
  { text: "Contact", url: "contact" }
]

export const NavbarVersionOne = () => {
  const [fixedNavbar, setFixedNavbar] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  const changeNavbarPosition = () => {
    if (window.scrollY >= 100) {
      setFixedNavbar(true)
    } else {
      setFixedNavbar(false)
    }
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  window.addEventListener("scroll", changeNavbarPosition)

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

    </CustomNav>
  )


}
