import React, { useState } from "react"
import { Stat, StatContainer } from './styles'
import { useSpring, config, animated } from "react-spring"

export const Stats = () => {
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

  const award = useSpring({
    from: { number: 0 },
    number: 100,
    delay: 200,
    config: config.molasses,
  })

  return (
    <StatContainer>
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
          <animated.h1>{award.number.to(n => n.toFixed(0))}</animated.h1>
          <h1>k</h1>
        </div>
        <p>Lines of Code</p>
      </Stat>
    </StatContainer>
  )
}
