import React, { useEffect, useState } from "react"
import { Section } from "./styles"
import { animated, useSpring } from 'react-spring'

const Core = () => {
  return (
    <path
      d="M339 297.227L250.965 585L166 297.227L250.965 155L339 297.227Z"
      fill="#F79416"
      stroke="#F79416"
    />
  )
}

const Circle = () => {
  return (
    <circle
      cx="253"
      cy="57"
      r="57"
      fill="#F79416"
    />
  )
}

const LeftField = () => {
  return (
    <path
      d="M504 436.5L270 570.5L302 468L429.5 394.5V180.5L302 106.5L322.5 74V35L504 139V436.5Z"
      fill="#005AA6"
      stroke="#005AA6"
    />
  )
}
const RightField = () => {
  return (
    <path
      d="M1 436.5L235 570.5L203 468L75.5 394.5V180.5L203 106.5L182.5 74V35L1 139V436.5Z"
      fill="#005AA6"
      stroke="#005AA6"
    />
  )
}

export const Logo = ({ isViewed }) => {
  const [timer, setTimer] = useState(true);
  const [flip, set] = useState(false)
  const infinite = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    config: {
      mass: 1,
      tension: 180,
      friction: 30
    },
    onRest: () => set(!flip)
  })

  useEffect(() => {
    setTimeout(() => {
      setTimer(false)
    }, 3500)
  }, [])


  return (
    <Section display={timer ? 'flex' : 'none'}>
      <animated.svg
        style={timer ? infinite : null}
        width="250"
        height="250"
        viewBox="0 0 505 587"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Core />
        <Circle />
        <LeftField />
        <RightField />
      </animated.svg>
    </Section>

  )
}
