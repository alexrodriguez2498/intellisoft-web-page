import React, { useState } from "react"
import { CtoButton, CustomModalBody, RegularButton, Section } from "./styles"
import {
  Col,
  Container,
  Dropdown, DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  Row
} from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"
import { Countries } from '../../../assets/countries'

export const CtoBanner = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)
  const [dropdownValue, setDropdownValue] = useState(null)

  const sendInformation = () => {
    const Modal = withReactContent(Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer)
        toast.addEventListener("mouseleave", Swal.resumeTimer)
      }
    }))


    Modal.fire({
      icon: "success",
      title: "Message sent successfully!"
    })
    setModalOpen(false)
  }

  const toggleValue = () => {
    setOpenDropdown(!openDropdown)
  }

  return (
    <Section>
      <Container fluid={true} className="p-5">
        <Row className="d-flex align-items-center">
          <Col xs={12} md={6}>
            <StaticImage
              src="../../../images/launch.png"
              alt="launch your project with intellisoft"
              placeholder="blurred"
            />
          </Col>
          <Col xs={12} md={6}>
            <p>Is software important for your business?</p>
            <h1>Build it with Intellisoft</h1>
            <CtoButton onClick={() => setModalOpen(true)}>Book free consultation</CtoButton>
          </Col>
          <div>
            <Modal
              isOpen={modalOpen}
              toggle={function noRefCheck() {
              }}
            >
              <ModalBody>
                <CustomModalBody>
                  <h2 className="text-center">Book Free Consultation</h2>
                  <FormGroup>
                    <Label for="consultationEmail">Email</Label>
                    <Input
                      id="consultationEmail"
                      name="consultationEmail"
                      placeholder="email"
                      type="email" />
                  </FormGroup>
                  <FormGroup>
                    <div >
                      <Label for="consultantionNumber">Phone number</Label>
                      <div className="d-flex">
                        <div className='me-4'>
                          <Dropdown toggle={toggleValue} isOpen={openDropdown} >
                            <DropdownToggle caret className='country-button'>
                              {
                                dropdownValue ? dropdownValue : 'Code'
                              }
                            </DropdownToggle>
                            <DropdownMenu container="body" style={{zIndex: 1111, maxHeight: '300px', overflowY: 'auto'}}>
                              {
                                Countries.data.map((country, index) => (
                                  <DropdownItem key={index} onClick={() => setDropdownValue(country.code)}>
                                    {country.name}
                                  </DropdownItem>
                                ))
                              }
                            </DropdownMenu>
                          </Dropdown>
                        </div>
                        <Input
                          id="consultantionNumber"
                          name="consultantionNumber"
                          placeholder="Phone"
                          type="number" />
                      </div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label>Choose the day we can talk! </Label>
                    <Input
                      id="consultationDate"
                      name="consultationDate"
                      placeholder=""
                      type="date" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="ocnsultationTime">What time can we contact you?</Label>
                    <Input
                      id="ocnsultationTime"
                      name="ocnsultationTime"
                      placeholder=""
                      type="time" />
                  </FormGroup>
                  <div className="d-flex justify-content-end" style={{marginTop: '4rem'}}>
                    <RegularButton
                      color="primary"
                      onClick={sendInformation}
                    >
                      Send
                    </RegularButton>
                    {" "}
                    <CtoButton cancel onClick={() => setModalOpen(false)}>
                      Cancel
                    </CtoButton>
                  </div>
                </CustomModalBody>
              </ModalBody>
              {/*<ModalFooter>*/}
              {/*  <Button*/}
              {/*    color="primary"*/}
              {/*    onClick={sendInformation}*/}
              {/*  >*/}
              {/*    Do Something*/}
              {/*  </Button>*/}
              {/*  {" "}*/}
              {/*  <Button onClick={() => setModalOpen(false)}>*/}
              {/*    Cancel*/}
              {/*  </Button>*/}
              {/*</ModalFooter>*/}
            </Modal>
          </div>
        </Row>
      </Container>
    </Section>
  )
}
