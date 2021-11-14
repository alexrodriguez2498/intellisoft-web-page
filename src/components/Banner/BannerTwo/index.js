import React from "react"
import { Section } from './styles'
import {
  Row,
  Col,
  Container
} from 'reactstrap'
import { StaticImage } from "gatsby-plugin-image"

export const BannerTwo = () => {
  return (
    <Section>
      <Container>
        <Row className={'d-flex align-items-center'}>
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


