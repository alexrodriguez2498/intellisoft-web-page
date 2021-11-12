import React from "react"
import { Section, BannerTextOne, BannerTextTwo } from "./styles"
import { Row, Col, Container } from "reactstrap"
import { StaticImage } from 'gatsby-plugin-image';

export const BannerOne = () => {
  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} lg={6} className={'centered-column'}>
            <BannerTextOne>Bespoke software development solutions</BannerTextOne>
            <BannerTextTwo>for your business</BannerTextTwo>
            <p className={'text'}>Design. Development. Consultancy.</p>
          </Col>
          <Col xs={12} lg={6}>
            <StaticImage
              src={'../../../images/banner-1.png'}
              alt={'banner image'}
              placeholder={'blurred'}
            />
          </Col>
        </Row>
      </Container>
    </Section>

  )
}
