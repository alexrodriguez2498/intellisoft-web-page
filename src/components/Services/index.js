import React, { useEffect, useRef, useState } from "react"
import { Col, Container, Row } from "reactstrap"
import { Section } from "./styles"
import { animated, useSpring } from "react-spring"
import { StaticImage } from "gatsby-plugin-image"
import { Element } from "react-scroll"
import { usePrefersReducedMotion } from "../../../hooks"
import { srConfig } from "../../../config"
import sr from "../../../utils/ssr"

const services = [
  { text: "Software Development", view: 1 },
  { text: "Application Development", view: 2 },
  { text: "Cloud Application Development", view: 3 },
  { text: "Devops Services", view: 4 },
  { text: "Application Modernization", view: 5 },
  { text: "Testing and Quality Assurance", view: 6 },
  { text: "Mobile App Development", view: 7 },
  { text: "UI/UX Development", view: 8 }
]

export const Services = () => {
  const [appear, setAppear] = useState(false)
  const [view, setView] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const isBrowser = () => typeof window !== "undefined"
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true
  })

  const changeState = () => {
    setAppear(true)
    console.log("i am changing")
  }

  useEffect(() => {
    setView(1)
    if (isBrowser()) {
      if (window.innerWidth < 600) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
  }, [])

  const doView = () => {
    if (view === 1) {
      return (
        <animated.section className={"service"} style={fade}>
          <StaticImage
            src={"../../images/jira-logo.png"}
            alt={"jira logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 20, right: 150, transform: "rotate(30deg)" }}
          />
          <StaticImage
            src={"../../images/trello-logo.png"}
            alt={"trello logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 20, left: 150, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/python-logo.png"}
            alt={"python logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 20, right: 150 }}
          />
          <StaticImage
            src={"../../images/rust-logo.png"}
            alt={"rust logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 0, left: 250 }}
          />
          <StaticImage
            src={"../../images/jamstack-logo.png"}
            alt={"jamstack logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 300, left: 0 }}
          />
          <StaticImage
            src={"../../images/gatsby-logo.png"}
            alt={"gatsby logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 300, right: 0 }}
          />
          <h3>Software Development Services</h3>
          <p>
            Full-cycle development of scalable software solutions to drive business transformation. Leverage
            oir deep technical expertise, functional knowledge and development insights to build cutting-edge
            custom software solutions.
          </p>
          <div className={"d-flex justify-content-around"}>
            <ul>
              <li>Custom Software Development</li>
              <li>Software Product Development</li>
              <li>Software Consulting</li>
              <li>Enterprise Mobility</li>
              <li>Software Architecture</li>
            </ul>
            <ul>
              <li>Software Outsourcing</li>
              <li>Digital Transformation</li>
              <li>Project Rescue</li>
              <li>Maintenance and Support</li>
            </ul>
          </div>
        </animated.section>
      )
    } else if (view === 2) {
      return (
        <animated.div className={"service"} style={fade}>
          <StaticImage
            src={"../../images/angular-logo.png"}
            alt={"angular logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 175, left: 250, transform: "rotate(30deg)" }}
          />
          <StaticImage
            src={"../../images/wordpress-logo.png"}
            alt={"wordpress logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 0, left: 0, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/sanity-logo.png"}
            alt={"sanity logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 0, right: 0, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/bigcommerce-logo.png"}
            alt={"big commerce logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 0, left: 0, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/vue-logo.png"}
            alt={"vue logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 250, left: 350, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/react-native-logo.png"}
            alt={"react logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 120, right: 320 }}
          />
          <StaticImage
            src={"../../images/contentful-logo.png"}
            alt={"contentful logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 0, right: 0 }}
          />
          <StaticImage
            src={"../../images/node-logo.png"}
            alt={"contentful logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 150, right: 50 }}
          />
          <StaticImage
            src={"../../images/mongodb-logo.png"}
            alt={"mongo db logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 0, right: 250, transform: "rotate(30deg)" }}
          />
          <StaticImage
            src={"../../images/dot-net-logo.png"}
            alt={"dot net logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 0, left: 250, transform: "rotate(-30deg)" }}
          />
          <h3>Web Application Development Services</h3>
          <p>
            Next-generation web application development to get greater flexibility, agility and growth.
            Unlock potential of emerging tech with our extensive expertise in Application Modernization,
            Cloud Application and Application Management.
          </p>
          <div className={"d-flex justify-content-around"}>
            <ul>
              <li>Custom Application Development</li>
              <li>Application Modernization</li>
              <li>Application Management</li>
              <li>Cloud Application Development</li>
            </ul>
            <ul>
              <li>Application Integration</li>
              <li>Ecommerce Development</li>
              <li>CMS Website Development</li>
            </ul>
          </div>
        </animated.div>
      )
    } else if (view === 3) {
      return (
        <animated.div className={"service"} style={fade}>
          <StaticImage
            src={"../../images/aws-logo.png"}
            alt={"aws logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 50, left: 100, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/google-cloud-logo.png"}
            alt={"google cloud logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 50, right: 100, transform: "rotate(30deg)" }}
          />
          <StaticImage
            src={"../../images/azure-logo.png"}
            alt={"azure logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 50, right: 100 }}
          />
          <StaticImage
            src={"../../images/ibm-logo.png"}
            alt={"ibm logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 50, left: 100 }}
          />
          <h3>Cloud Application Development Services</h3>
          <p>
            Robust Cloud application development leveraging AWS, Azure, and Google Cloud.
            Build, re-platform and integrate applications with our developers well versed in cloud-oriented
            security approaches to achieve faster time-to-market.
          </p>
          <div className={"d-flex justify-content-around"}>
            <ul>
              <li>Cloud Assessment Consulting</li>
              <li>SaaS Implementation</li>
              <li>Cloud Integration Services</li>
              <li>Application Migration to Cloud</li>
            </ul>
            <ul>
              <li>Cloud Monitoring and Maintenance</li>
              <li>Amazon Web Services Development</li>
              <li>Azure Development</li>
            </ul>
          </div>
        </animated.div>
      )
    } else if (view === 4) {
      return (
        <animated.div className={"service"} style={fade}>
          <StaticImage
            src={"../../images/docker-logo.png"}
            alt={"docker logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 250, left: 350, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/kubernetes-logo.png"}
            alt={"kubernetes logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 250, right: 350, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/github-logo.png"}
            alt={"github logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 0, right: 0, transform: "rotate(30deg)" }}
          />
          <StaticImage
            src={"../../images/gitlab-logo.png"}
            alt={"gitlab logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 0, left: 0, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/jenkins-logo.png"}
            alt={"jenkins logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 0, left: 0 }}
          />
          <h3>DevOps Services</h3>
          <p>
            Full-cycle software solutions to optimize business infrastructures and overall project budget.
            End-to-end development of resilient software solutions at the pace of business with inclusive
            DevOps services for secure software ecosystem.
          </p>
          <div className={"d-flex justify-content-around"}>
            <ul>
              <li>DevOps Consulting</li>
              <li>Infrastructure testing and release set-up</li>
              <li>DevOps Assessment</li>
              <li>DevOps Automation</li>
            </ul>
            <ul>
              <li>Environment set-up and implementation</li>
              <li>DevOps Management</li>
              <li>Maintenance and support</li>
            </ul>
          </div>
        </animated.div>
      )
    } else if (view === 5) {
      return (
        <animated.div className={"service"} style={fade}>
          <StaticImage
            src={"../../images/blockchain-logo.png"}
            alt={"blockchain logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 20, right: 150, transform: "rotate(30deg)" }}
          />
          <StaticImage
            src={"../../images/iot-logo.png"}
            alt={"iot logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 20, left: 150, transform: "rotate(30deg)" }}
          />
          <StaticImage
            src={"../../images/machine-learning-logo.png"}
            alt={"machine learning logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 0, left: 10 }}
          />
          <StaticImage
            src={"../../images/pwa-logo.png"}
            alt={"pwa logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 80, right: 10 }}
          />
          <StaticImage
            src={"../../images/scrum-logo.png"}
            alt={"scrum logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 80, right: 350 }}
          />
          <h3>Legacy Application Modernization Services</h3>
          <p>
            Transform your legacy applications to more agile and powerful through emerging
            technologies. Inclusive re-engineering services to help you with modernization and technology upgradation.
            Infuse high performance with powerful web applications.
          </p>
          <div className={"d-flex justify-content-around"}>
            <ul>
              <li>Application Portfolio Assessment</li>
              <li>Applications Re-engineering</li>
              <li>Application Cloud Enablement</li>
            </ul>
            <ul>
              <li>MainFrame Modernization</li>
              <li>Performance Optimization</li>
              <li>Application Migration</li>
            </ul>
          </div>
        </animated.div>
      )
    } else if (view === 6) {
      return (
        <animated.div className={"service"} style={fade}>
          <StaticImage
            src={"../../images/cypress-logo.png"}
            alt={"cypress logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 20, right: 150, transform: "rotate(30deg)" }}
          />
          <StaticImage
            src={"../../images/cucumber-logo.png"}
            alt={"cucumber logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 20, left: 150, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/jest-logo.png"}
            alt={"jest logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 20, left: 150, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/selenium-logo.png"}
            alt={"selenium logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 80, right: 150 }}
          />
          <StaticImage
            src={"../../images/karma-logo.png"}
            alt={"karma logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 100, right: 350 }}
          />
          <h3>Software Testing Services</h3>
          <p>
            Brilliant Software Testing and QA services for smooth deployment. Extensive automated and manual
            testing processes for accurate information on product quality. Software testing and QA services for
            high-quality
            project implementation.
          </p>
          <div className={"d-flex justify-content-around"}>
            <ul>
              <li>QA Consulting</li>
              <li>Full Cycle QA</li>
              <li>Test Automation</li>
              <li>Custom Testing</li>
            </ul>
            <ul>
              <li>Performance Testing</li>
              <li>Managed Testing</li>
              <li>QA Outsourcing</li>
            </ul>
          </div>
        </animated.div>
      )
    } else if (view === 7) {
      return (
        <animated.div className={"service"} style={fade}>
          <h3>Mobile App Development Services</h3>
          <StaticImage
            src={"../../images/kotlin-logo.png"}
            alt={"kotling logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 0, left: 0, transform: "rotate(30deg)" }}
          />
          <StaticImage
            src={"../../images/swift-logo.png"}
            alt={"swift logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 0, right: 0 }}
          />
          <StaticImage
            src={"../../images/react-native-logo.png"}
            alt={"react native logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 30, left: 30, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/native-script-logo.png"}
            alt={"native script logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 30, right: 45, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/flutter-logo.png"}
            alt={"flutter logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 175, left: 250, transform: "rotate(-30deg)" }}
          />
          <p>
            Best-in-class Android and Swift developers for mobile application development. Intuitive and
            easy-to-navigate
            mobile apps development for driving user satisfaction. Build custom mobile apps, cross-platform or hybrid
            apps.
          </p>
          <div className={"d-flex justify-content-around"}>
            <ul>
              <li>Custom Mobile Application</li>
              <li>Cross-Platform App Development</li>
              <li>Hybrid Apps Development</li>
              <li>iOS Development Services</li>
            </ul>
            <ul>
              <li>Android App Development</li>
              <li>Flutter App Development</li>
              <li>Progressive Web Apps</li>
            </ul>
          </div>
        </animated.div>
      )
    } else if (view === 8) {
      return (
        <animated.div className={"service"} style={fade}>
          <StaticImage
            src={"../../images/figma-logo.png"}
            alt={"figma logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 0, left: 0 }}
          />
          <StaticImage
            src={"../../images/adobexd-logo.png"}
            alt={"adobe xd logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 20, right: 0, transform: "rotate(30deg)" }}
          />
          <StaticImage
            src={"../../images/invision-logo.png"}
            alt={"invision logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 20, right: 150, transform: "rotate(30deg)" }}
          />
          <StaticImage
            src={"../../images/axure-logo.png"}
            alt={"axure logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ bottom: 20, left: 150, transform: "rotate(-30deg)" }}
          />
          <StaticImage
            src={"../../images/sketch-logo.png"}
            alt={"sketch logo"}
            placeholder={"blurred"}
            className={"image"}
            style={{ top: 20, left: 350, transform: "rotate(-30deg)" }}
          />
          <h3>UI/UX Services</h3>
          <p>
            UI/UX design services for visually rich applications and excellent user experience online.
            Enable striking designs and innovation-lef interfaces with our in-depth two-decade long
            experience in software design, web and mobile apps.
          </p>
          <div className={"d-flex justify-content-around"}>
            <ul>
              <li>UI and UX Consulting</li>
              <li>Web Design and Development</li>
              <li>Mobile Design and Development</li>
            </ul>
            <ul>
              <li>Visual Design</li>
              <li>Interactive Design</li>
              <li>UI Testing</li>
            </ul>
          </div>
        </animated.div>
      )
    }
  }

  return (
    <Element name="services" style={{ padding: "1rem 0" }}>
      {
        !isMobile && (
          <Section id='services' ref={revealContainer}>
            <Container>
              <h1>Our Services</h1>
              <Row>
                <Col xs={4} className={"link-section"}>
                  <ul>
                    {
                      services.map((service, index) => (
                        <li key={index}
                            className={view === index + 1 ? "service-link active-link" : "service-link"}
                            onClick={() => setView(index + 1)}>{service.text}</li>
                      ))
                    }
                  </ul>
                </Col>
                <Col xs={8} className={"services-description"}>
                  {doView()}
                </Col>
              </Row>
            </Container>
          </Section>
        )
      }
      {
        isMobile && (
          <Section id='services-mobile' ref={revealContainer}>
            <ul className='special-list'>
              {
                services.map((service, index) => (
                  <li key={index}
                      style={{margin: '0 2rem', width: '10rem'}}
                      className={view === index + 1 ? "service-link active-link" : "service-link"}
                      onClick={() => setView(index + 1)}>{service.text}</li>
                ))
              }
            </ul>
            <div>
              {doView()}
            </div>
          </Section>
        )
      }
    </Element>

  )
}
