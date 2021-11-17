import React, { useEffect, useState } from "react"
import { BannerTextOne, FilledButton, OutlinedButton, Section } from "./styles"
import { Col, Container, Row } from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import { animated, useSpring } from "react-spring"

const texts = [
  { text: "Startups" },
  { text: "Enterprise" },
  { text: "Midsize companies" }
]

export const BannerOne = () => {
  const [text, setText] = useState(1)

  const [flip, set] = useState(false)
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip
  })

  useEffect(() => {
    setTimeout(() => {
      if (text < 3) {
        setText(text + 1)
      } else {
        setText(1)
      }
    }, 2500)
  }, [text])

  const doLoop = () => {
    if (text === 1) {
      return (
        <animated.h1 className={"yellow-text"} style={fade}>Startups</animated.h1>
      )
    } else if (text === 2) {
      return (
        <animated.h1 className={"yellow-text"} style={fade}>Enterprise</animated.h1>
      )
    } else {
      return (
        <animated.h1 className={"yellow-text"} style={fade}>Midsize companies</animated.h1>
      )
    }
  }


  return (
    <Section>
      <Container>
        <Row>
          <Col xs={{ order: 2, size:12 }} lg={6} className={"centered-column"}>
            <BannerTextOne>Highly qualified experts in
              software development for </BannerTextOne>
            {doLoop()}
            <p className={"text"}>Design. Development. Consultancy.</p>
            <div>
              <FilledButton>Quote your project Now!</FilledButton>
              <OutlinedButton>Contact us</OutlinedButton>
            </div>
          </Col>
          <Col xs={{ order: 1, size:12 }} lg={6}>
            <StaticImage
              src={"../../../images/banner-1.png"}
              alt={"banner image"}
              placeholder={"blurred"}
            />
          </Col>
        </Row>
      </Container>
    </Section>

  )
}
