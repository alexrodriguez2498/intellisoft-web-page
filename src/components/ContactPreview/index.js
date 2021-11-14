import { StaticImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import { Col, Container, Row, Form, FormGroup, Label, Input, Button, Tooltip } from 'reactstrap'
import  { Section } from './styles'
import { GrCircleInformation } from '@react-icons/all-files/gr/GrCircleInformation'

export const ContactPreview = () => {
const [isOpen, setIsOpen] = useState(false);

const showTooltip = () => {
    setIsOpen(!isOpen)
}

    return (
        <Section>
            <Container>
                <Row>
                    <Col xs={12} md={{offset: 1, size: 10}}  className="contact-container">
                        <Row className="d-flex align-items-center">
                            <Col>
                                <h1>
                                    Contact us
                                </h1>
                                <Form>
                                    <FormGroup>
                                         <Label for="name">
                                            Your Name
                                            </Label>
                                            <Input
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
                                        id="comment"
                                        name="comment"
                                        type="textarea"
                                        />
                                    </FormGroup>
                                     <FormGroup check>
                                        <Input type="checkbox" />
                                        {' '}
                                        <Label check>
                                        I want to sign an NDA first
                                        </Label>
                                         <GrCircleInformation  
                                         style={{ margin: '0 1rem'}}
                                         id="information"/>   
                                                                               
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
                                  
                                    <Button className="submit-button" disabled>
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                             <Col>
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
       
    )
}
