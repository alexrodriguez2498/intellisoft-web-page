import React, { useEffect, useRef, useState } from "react"
import { Stat, StatContainer } from './styles'
import { useSpring, config, animated } from "react-spring"
import { usePrefersReducedMotion } from "../../../hooks"
import sr from "../../../utils/ssr"
import { srConfig } from "../../../config"


export const Stats = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);


  const days = useSpring({
    from: { number: 0 },
    number: 24,
    delay: 200,
    config: config.molasses,
  })

  const week = useSpring({
    from: { number: 0 },
    number: 7,
    delay: 200,
    config: config.molasses,
  })

  const percentage = useSpring({
    from: { number: 0 },
    number: 99.9,
    delay: 200,
    config: config.molasses,
  })

  const projects = useSpring({
    from: { number: 0 },
    number: 1000,
    delay: 200,
    config: config.molasses,
  })
  const experience = useSpring({
    from: { number: 0 },
    number: 8,
    delay: 200,
    config: config.molasses,
  })

  return (
    <StatContainer id='stats' ref={revealContainer}>
      <Stat>
        <div className={'d-flex'}>
          <animated.h1>{days.number.to(n => n.toFixed(0))}</animated.h1>
          <h1>/</h1>
          <animated.h1>{week.number.to(n => n.toFixed(0))}</animated.h1>
        </div>
        <p>Support</p>
      </Stat>
      <Stat>
        <div className="d-flex">
          <animated.h1>{percentage.number.to(n => n.toFixed(1))}</animated.h1>
          <h1>%</h1>
        </div>
        <p>Positive Feedback</p>
      </Stat>
      <Stat>
        <div className="d-flex">
          <animated.h1>{projects.number.to(n => n.toFixed(0))}</animated.h1>
          <h1>+</h1>
        </div>
        <p>Proyects Delivered</p>
      </Stat>
      <Stat>
        <div className="d-flex">
          <animated.h1>{experience.number.to(n => n.toFixed(0))}</animated.h1>
          <h1>+</h1>
        </div>
        <p>Years of Experience</p>
      </Stat>
    </StatContainer>
  )
}
