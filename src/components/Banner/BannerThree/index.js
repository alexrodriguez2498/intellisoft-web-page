import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Col, Container, Row } from "reactstrap"
import { Stats } from './components/Stats'
import { Section } from './styles'

export const BannerThree = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={6}>
            <StaticImage
              src={"../../../images/agile.png"}
              alt={"agile approach"}
              placeholder={"blurred"}
            />
          </Col>
          <Col xs={12} md={6}>
            <StaticImage
              src={"../../../images/lightbulb.png"}
              alt={"just a lightbulb"}
              placeholder={"blurred"}
            />
            <h1>We work based on agile methodologies</h1>
            <p>We focus on the agile development of software for decision making in your projects, we are based on
              iterative and incremental development, where requirements and solutions evolve over time according to the
              need of the project.</p>
            <Stats />
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

