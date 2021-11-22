import React, { useState } from "react"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import { Link } from "react-scroll"
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody
} from "reactstrap"
import { CtoButton, CustomModalBody, RegularButton } from "../../Banner/ctaBanner/styles"
import { Countries } from "../../../assets/countries"
import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"


const navLinks = [
  { text: "Services", url: "services" },
  { text: "Work", url: "portfolio" },
  { text: "About Us", url: "testimonies" },
  { text: "Contact", url: "contact" }
]

const MenuPanel = styled.div`
  position: fixed;
  margin-top: -9px;
  left: 0;
  right: 0;
  height: 100vh;
  background-color: white;

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & ul {
      text-align: center;
      list-style-type: none;
      margin: 2rem 0 0 0;
      & .active-link {
        background-color: ${props => props.theme.colors.blue};
        color: white;
      }
      & a {
        padding: 0 7rem;
        font-size: 32px;
        color: black;
        text-decoration: none;
      }
      & button {
        margin-top: 4rem; 
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid ${props => props.theme.colors.blue};
        background-color: ${props => props.theme.colors.blue};
        color: white;
        width: 100%;
      }
    }

   
  }
`

const Burger = () => {
  const [isOpen, toggle] = useState(false)
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
    toggle(false)


    Modal.fire({
      icon: "success",
      title: "Message sent successfully!"
    })
    setModalOpen(false)
  }

  const toggleValue = () => {
    setOpenDropdown(!openDropdown)
  }

  const first = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 7px) rotate(0deg)"
  })
  const second = useSpring({
    transform: isOpen
      ? "translate(10px, 4px) rotate(45deg)"
      : "translate(2px, 19px) rotate(0deg)"
  })
  const third = useSpring({
    transform: isOpen
      ? "translate(5px, 32px) rotate(-45deg)"
      : "translate(2px, 31px) rotate(0deg)"
  })


  return (
    <>
      <div style={{ backgroundColor: "#F79416", padding: "10px", margin: "10px" }}>
        <svg
          onClick={() => toggle(!isOpen)}
          width="40"
          height="32"
          viewBox="0 0 44 44"
          fill="#000000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <animated.rect width="40" height="4" rx="2" style={first} />
          <animated.rect width="40" height="4" rx="2" style={second} />
          <animated.rect width="40" height="4" rx="2" style={third} />
        </svg>
      </div>
      {
        isOpen && (
          <MenuPanel>
            <div>
              <ul>
                {
                  navLinks.map((link, index) => (
                    <li key={index}>
                      <Link onClick={() => toggle(!isOpen)}
                            activeClass='active-link'
                            to={link.url}
                            spy={true}
                            smooth={true}
                            duration={200}>
                        {link.text}
                      </Link>
                    </li>
                  ))
                }
                <li>
                  <button onClick={() => {
                    setModalOpen(true)

                  }}>
                    Let's Talk
                  </button>
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
                </li>
              </ul>
            </div>
          </MenuPanel>
        )
      }
    </>
  )
}

export default Burger
