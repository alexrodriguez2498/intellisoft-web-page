import { StaticImage } from "gatsby-plugin-image"
import React, { useState } from "react"
import { Button, Col, Container, Form, FormGroup, Input, Label, Row, Tooltip } from "reactstrap"
import { Section } from "./styles"
import { GrCircleInformation } from "@react-icons/all-files/gr/GrCircleInformation"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"
import { Element } from "react-scroll"

export const ContactPreview = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [nda, setNda] = useState(false)

  const showTooltip = () => {
    setIsOpen(!isOpen)
  }


  const submitInfo = (e) => {
    const Modal = withReactContent(Swal)


    Modal.fire({
      icon: "success",
      text: "Good, we will contact you as soon as posible!",
      showConfirmButton: false,
      timer: 2500
    })
    e.preventDefault()
    //  console.log({
    //     name: name,
    //     email: email,
    //     comment: comment,
    //     nda: nda
    // })
    setName("")
    setEmail("")
    setComment("")
    setNda(false)
  }

  return (
    <Element name="contact" style={{ padding: "1rem 0" }}>
      <Section>
        <Container>
          <Row>
            <Col xs={{ size: 12 }} md={{ offset: 1, size: 10 }} className="contact-container">
              <Row className="d-flex align-items-center">
                <h1>
                  Contact us
                </h1>
                <Col xs={{order: 2, size: 12}} lg={{order: 1, size: 6}}>
                  <Form>
                    <FormGroup>
                      <Label for="name">
                        Your Name
                      </Label>
                      <Input
                        value={name}
                        onInput={e => setName(e.target.value)}
                        id="name"
                        name="name"
                        type="text"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">
                        Your Email
                      </Label>
                      <Input
                        value={email}
                        onInput={e => setEmail(e.target.value)}
                        id="email"
                        name="email"
                        type="email"
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label for="comment">
                        Your Comment
                      </Label>
                      <Input
                        value={comment}
                        onInput={e => setComment(e.target.value)}
                        id="comment"
                        name="comment"
                        type="textarea"
                      />
                    </FormGroup>
                    <FormGroup check>
                      <Input
                        value={nda}
                        onInput={e => setNda(e.target.checked)}
                        type="checkbox" />
                      {" "}
                      <Label check>
                        I want to sign an NDA first
                      </Label>
                      <GrCircleInformation
                        style={{ margin: "0 1rem" }}
                        id="information" />

                      <Tooltip
                        target="information"
                        toggle={showTooltip}
                        isOpen={isOpen}
                        placement="right"
                      >
                        <small>
                          We keep your ideas to ourselves and are always
                          willing to sign a Non-Disclosure Agreement with
                          you to fully protect your intellectual property.
                        </small>
                      </Tooltip>
                    </FormGroup>

                    <Button className="submit-button"
                            disabled={name === "" || email == "" || comment === ""}
                            onClick={submitInfo}>
                      Submit
                    </Button>
                  </Form>
                </Col>
                <Col xs={{ order: 1, size: 12 }} lg={{order: 2, size: 6}}>
                  <StaticImage
                    src="../../images/contact-us.png"
                    alt="contact us icon"
                    placeholder="blurred"
                  />

                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Section>

    </Element>

  )
}
