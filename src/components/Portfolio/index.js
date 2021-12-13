import React, { useEffect, useRef } from "react"
import { Section } from "./styles"
import { Col, Container, Row } from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import { Element } from 'react-scroll'
import { useSpringRef } from "react-spring"
import { usePrefersReducedMotion } from "../../../hooks"
import sr from "../../../utils/ssr"
import { srConfig } from "../../../config"

export const Portfolio = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Element name='portfolio' style={{ padding: "1rem 0" }}>
      <Section id='work' ref={revealContainer}>
        <Container>
          <Row>
            <Col xs={12} className='text-center'>
              <h1>Some awesome work examples</h1>
              <p>Explore some of our web development & design projects</p>
            </Col>
            <Col xs={12} md={6} lg={3} className='my-3'>
              <div className="image-wrapper">
                <StaticImage
                  src="../../images/work-2.jpg"
                  placeholder="blurred"
                  alt=""
                />
                <a>
                  <small>See Project</small>
                </a>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className='my-3'>
              <div className="image-wrapper">
                <StaticImage
                  src="../../images/work-2.jpg"
                  placeholder="blurred"
                  alt=""
                />
                <a>
                  <small>See Project</small>
                </a>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className='my-3'>
              <div className="image-wrapper">
                <StaticImage
                  src="../../images/work-2.jpg"
                  placeholder="blurred"
                  alt=""
                />
                <a>
                  <small>See Project</small>
                </a>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3} className='my-3'>
              <div className="image-wrapper">
                <StaticImage
                  src="../../images/work-2.jpg"
                  placeholder="blurred"
                  alt=""
                />
                <a>
                  <small>See Project</small>
                </a>
              </div>
            </Col>
            <Col xs={12} className='text-center mt-5'>
              <button className='special-button'> See entire portfolio </button>
            </Col>
          </Row>
        </Container>
      </Section>
    </Element>
  )
}
