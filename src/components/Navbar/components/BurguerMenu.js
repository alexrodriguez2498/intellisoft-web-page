import React, { useState } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import { Link } from "react-scroll"


const navLinks = [
  { text: "Services", url: "services" },
  { text: "Work", url: "portfolio" },
  { text: "About Us", url: "testimonies" },
  { text: "Contact", url: "contact" }
]

const MenuPanel = styled.div`
  position: fixed;
  margin-top: -9px;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: white;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & ul {
      text-align: center;
      list-style-type: none;
      margin: 2rem 0 0 0;
      & .active-link {
        background-color: ${props => props.theme.colors.blue};
        color: white;
      }
      & a {
        padding: 0 7rem;
        font-size: 32px;
        color: black;
        text-decoration: none;
      }
      & button {
        margin-top: 4rem; 
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid ${props => props.theme.colors.blue};
        background-color: ${props => props.theme.colors.blue};
        color: white;
        width: 100%;
      }
    }

   
  }
`

const Burger = () => {
  const [isOpen, toggle] = useState(false)

  const first = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)"
  })
  const second = useSpring({
    transform: isOpen
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)"
  })
  const third = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)"
  })

  return (
    <>
      <div style={{ backgroundColor: "#F79416", padding: "10px", margin: "10px" }}>
        <svg
          onClick={() => toggle(!isOpen)}
          width="40"
          height="32"
          viewBox="0 0 44 44"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <animated.rect width="40" height="4" rx="2" style={first} />
          <animated.rect width="40" height="4" rx="2" style={second} />
          <animated.rect width="40" height="4" rx="2" style={third} />
        </svg>
      </div>
      {
        isOpen && (
          <MenuPanel>
            <div>
              <ul>
                {
                  navLinks.map((link, index) => (
                    <li key={index}>
                      <Link onClick={() => toggle(!isOpen)}
                            activeClass='active-link'
                            to={link.url}
                            spy={true}
                            smooth={true}
                            duration={200}>
                        {link.text}
                      </Link>
                    </li>
                  ))
                }
                <li>
                  <button>
                    Let's Talk
                  </button>
                </li>
              </ul>
            </div>
          </MenuPanel>
        )
      }
    </>
  )
}

export default Burger
