import React from "react"
import { FooterSection } from "./styles"
import { Col, Container, Row } from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption"
import { GrLinkedin } from "@react-icons/all-files/gr/GrLinkedin"
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter"
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram"
import { BiMailSend } from "@react-icons/all-files/bi/BiMailSend"

const servicesOne = [
  { text: "Web Development", url: "" },
  { text: "Mobile Development", url: "" },
  { text: "Product Design", url: "" },
  { text: "Cloud Development", url: "" },
  { text: "Quality Assurance", url: "" },
  { text: "DevOps Services", url: "" },
  { text: "Software Architecture", url: "" }
]


const servicesTwo = [
  { text: "Node Development", url: "" },
  { text: "React Development", url: "" },
  { text: "Angular Design", url: "" },
  { text: "Vue Development", url: "" },
  { text: "Symfony Development", url: "" },
  { text: "Laravel Development", url: "" }
]


const servicesThree = [
  { text: "AWS & GCP", url: "" },
  { text: "Docker", url: "" },
  { text: "Kubernetes", url: "" },
  { text: "Microservices", url: "" },
  { text: "Serverless", url: "" },
  { text: "Cloud Migration", url: "" },
  { text: "Re-Architecting", url: "" }
]

const knowledge = [
  { text: "Fot CTO's", url: "" },
  { text: "Resource", url: "" },
  { text: "OutSourcing", url: "" },
  { text: "Blog", url: "" },
  { text: "State of Microservices", url: "" },
  { text: "State of Frontend", url: "" }
]


export const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <div className="border-top pb-5"></div>
        <Row className="mb-5">
          <Col className="d-flex flex-column align-items-center">
            <StaticImage
              src="../../images/logo.png"
              alt="intellisoft logo"
              placeholder="blurred"
              width={150}
              className="mb-3"
            />

            <div className="d-flex justify-content-between">
              <GrFacebookOption fontSize={30} className="mx-2 social-icon" />
              <GrLinkedin fontSize={30} className="mx-2 social-icon" />
              <GrTwitter fontSize={30} className="mx-2 social-icon" />
              <GrInstagram fontSize={30} className="mx-2 social-icon" />
            </div>
          </Col>
          <Col>
            <h4>Services</h4>
            <ul>
              {
                servicesOne.map((service, index) => (
                  <li key={index}>
                    {service.text}
                  </li>
                ))
              }
            </ul>
          </Col>
          <Col>
            <h4>-</h4>
            <ul>
              {
                servicesTwo.map((service, index) => (
                  <li key={index}>
                    {service.text}
                  </li>
                ))
              }
            </ul>
          </Col>
          <Col>
            <h4>-</h4>
            <ul>
              {
                servicesThree.map((service, index) => (
                  <li key={index}>
                    {service.text}
                  </li>
                ))
              }
            </ul>
          </Col>
          <Col>
            <h4>Knowledge </h4>
            <ul>
              {
                knowledge.map((service, index) => (
                  <li key={index}>
                    {service.text}
                  </li>
                ))
              }
            </ul>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <h4> Drop us a line:</h4>
            <div className="d-flex align-items-center">
              <p className="mb-0 mx-3">hello@intellisoftpr.com</p>
              <BiMailSend fontSize={30} color="#005AA6" />
            </div>
          </Col>
          <Col>
            <h4> Headquarters</h4>
            <small>
              ul. Dolnych Wałów 8
              Gliwice, 44-100
              Poland
            </small>
          </Col>
          <Col>
            <h4> Sales & Marketing</h4>
            <small>
              ul. Celna 13/12
              Kraków, 30-507
              Poland
            </small>
          </Col>
        </Row>
        <div className="border-bottom pt-5"></div>
        <div className="d-flex justify-content-between pt-3 text-gray">
          <div>
            <small>2021 Intellisoft</small>
            <span className="mx-2">|</span>
            <small>All rights reserved</small>
          </div>

          <div className="small">
            <small>Privacy Policy</small>
            <span className="mx-2">|</span>
            <small>Terms of Service</small>
          </div>
        </div>
      </Container>
    </FooterSection>
  )
}
