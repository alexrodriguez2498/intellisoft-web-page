import React from "react"
import { FooterSection } from "./styles"
import { Col, Container, Row } from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import { GrFacebookOption } from "@react-icons/all-files/gr/GrFacebookOption"
import { GrLinkedin } from "@react-icons/all-files/gr/GrLinkedin"
import { GrTwitter } from "@react-icons/all-files/gr/GrTwitter"
import { GrInstagram } from "@react-icons/all-files/gr/GrInstagram"
import { BiMailSend } from "@react-icons/all-files/bi/BiMailSend"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"

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

const showPrivacyPolicy = () => {
  const Modal = withReactContent(Swal)


  Modal.fire({
    title: "Privacy Policy",
    confirmButtonText: 'Ok',
    html: `  
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
    `
  })

}

const showTermsOfService = () => {
  const Modal = withReactContent(Swal)


  Modal.fire({
    title: "Terms of Service",
    confirmButtonText: 'Ok',
    html: `  
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including 
        versions of Lorem Ipsum.
      </p>
      <br>
    `
  })

}


export const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <div className="border-top pb-5"></div>
        <Row className="mb-5">
          <Col xs={12} md={6} lg={3} className="text-center" className="d-flex flex-column align-items-center">
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
          <Col xs={12} md={6} lg={3} className="text-center">
            <h4 className="my-sm-5 mb-md-3">Services</h4>
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
          <Col xs={12} md={6} lg={3} className="text-center">
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
          <Col xs={12} md={6} lg={3} className="text-center">
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
          <Col xs={12} md={6} lg={3} className="text-center">
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
          <Col xs={12} md={6} lg={3} className="text-center">
            <h4> Drop us a line:</h4>
            <div className="d-flex align-items-center justify-content-center">
              <p className="mb-0 mx-3">hello@intellisoftpr.com</p>
              <BiMailSend fontSize={30} color="#005AA6" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center">
            <h4> Headquarters</h4>
            <small>
              ul. Dolnych Wałów 8
              Gliwice, 44-100
              Poland
            </small>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center">
            <h4> Sales & Marketing</h4>
            <small>
              ul. Celna 13/12
              Kraków, 30-507
              Poland
            </small>
          </Col>
        </Row>
        <div className="border-bottom pt-5"></div>
        <div className="rights pt-3 text-gray">
          <div>
            <small>2021 Intellisoft</small>
            <span className="mx-2">|</span>
            <small>All rights reserved</small>
          </div>

          <div className="small">
            <small onClick={showPrivacyPolicy}>Privacy Policy</small>
            <span className="mx-2">|</span>
            <small onClick={showTermsOfService}>Terms of Service</small>
          </div>
        </div>
      </Container>
    </FooterSection>
  )
}
