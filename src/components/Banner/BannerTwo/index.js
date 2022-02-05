import React, { useEffect, useRef, useState } from "react"
import { Section } from './styles'
import {
  Row,
  Col,
  Container
} from 'reactstrap'
import { StaticImage } from "gatsby-plugin-image"
import { usePrefersReducedMotion } from "../../../../hooks"
import sr from "../../../../utils/ssr"
import { srConfig } from "../../../../config";



export const BannerTwo = () => {
  const revealContainer = useRef(null);
  const prefersReduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReduceMotion) {
      return;
    }
    sr.reveal(revealContainer.current, srConfig());
  }, [])

  return (
    <Section id='bannerTwo' ref={revealContainer}>

      <Container>
        <Row className={'d-flex align-items-center1'}>
          <Col xs={12} md={6}>
            <h1>
              Our approach are
              the best technology experiences
            </h1>
            <h3>
              Because technology together with the user experience achieves impressive results.
            </h3>
            <p>
              We combine different disciplines to work at the intersection
              between art and technology, through Software development.
            </p>
          </Col>
          <Col xs={12} md={6}>
            <StaticImage
              src={"../../../images/creativity.png"}
              alt={'image expressing creativity coding'}
              placeholder={'blurred'}
            />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
