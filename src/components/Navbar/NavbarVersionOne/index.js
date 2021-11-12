import React, { useState } from "react"

// styles
import "./styles.css"

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

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  window.addEventListener("scroll", changeNavbarPosition)

  return (
    <div className={fixedNavbar ? 'fixed-navbar filled': 'fixed-navbar'}>hello world</div>
  )


}
