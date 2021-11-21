import React from "react"
import { CtoButton, Section } from "./styles"
import { Col, Container, Row } from "reactstrap"

export const CtoBanner = () => {
  return (
    <Section>
      <Container fluid={true} className="p-5">
        <Row>
          <Col xs={12} className="text-center">
            <p>Is software important for your business?</p>
            <h1>Build it with Intellisoft</h1>
            <CtoButton>Book free consultation</CtoButton>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}
