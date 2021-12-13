import React, { useEffect, useRef } from "react"
import { Element } from "react-scroll"
import { ExpertiseCard, Section } from "./styles"
import { Col, Row } from "reactstrap"
import { usePrefersReducedMotion } from "../../../hooks"
import sr from "../../../utils/ssr"
import { srConfig } from "../../../config"

export const Expertise = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);
  return (
    <Element name="testimonies" style={{ padding: "1rem 0" }}>
      <Section style={{margin: '0 1rem' }} id='expertise' ref={revealContainer}>
        <h1>Why choose us?</h1>
        <p>
          We are expert offshore software development partner. Sofware development with Intellisoft is beyond a
          proyect. <br />
          Our highly colaborative approach leads to long-term business ourcomes
        </p>
        <Row className={"d-flex justify-content-center"}>
          <Col xs={12} md={6} lg={4}>
            <ExpertiseCard>
              <div className="line"></div>
              <h2>Fast Onboarding</h2>
              <p>
                We excel at streamlined communication. Enabling rapid application development to our global
                clientele with increased proficiency. We make time, culture and location differences imperceptible.
              </p>
              <ul>
                <li>Strategy</li>
                <li>Visibility</li>
                <li>Transparency</li>
              </ul>
            </ExpertiseCard>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ExpertiseCard>
              <div className="line"></div>
              <h2>Agile Project Management</h2>
              <p>
                Keeping it simple and clear. A Solid project management process in place to meet client’s expectations,
                avoid budget overruns and minimize project risks. Delivering a software product without a hitch from
                scope to delivery.
              </p>
              <ul>
                <li>Agile</li>
                <li>Responsive</li>
                <li>Quality</li>
              </ul>
            </ExpertiseCard>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <ExpertiseCard>
              <div className="line"></div>
              <h2>Consistent Delivery</h2>
              <p>
                In-depth expertise, time-tested processes and tech excellence allow us to deliver optimal output. We
                implement various software development methodologies to deliver on-time software.
              </p>
              <ul>
                <li>Scalability</li>
                <li>Certainty</li>
                <li>Performance</li>
              </ul>

            </ExpertiseCard>
          </Col>
        </Row>
      </Section>
    </Element>
  )
}
