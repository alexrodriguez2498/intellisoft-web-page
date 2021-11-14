import React from "react"
import { Col, Container, Row } from "reactstrap"
import { StaticImage } from "gatsby-plugin-image"

export const Testimonials = () => {
  return (
    <Container style={{position: 'relative'}}>
      <StaticImage
        src={'../../images/quotes.png'}
        alt={'quotes image'}
        placeholder={'blurred'}
        style={{
          position: 'absolute',
          top: -60,
          left: -180,
          opacity: .1,
          zIndex: -1
        }}
      />

      <StaticImage
        src={'../../images/quotes.png'}
        alt={'quotes image'}
        placeholder={'blurred'}
        style={{
          position: 'absolute',
          bottom: -60,
          right: -180,
          opacity: .1,
          zIndex: -1,
          transform: 'rotate(180deg)'
        }}
      />
      <Row>
        <Col xs={12} className={'text-center mb-5'}>
          <h1>What clients love in working <br/>
            with Intellisoft</h1>
        </Col>
      </Row>
      <Row className={'mb-5'}>
        <Col xs={6}>
          <h1>Amazing People</h1>
          <h3>"They are people who are not only following the tasks, but can work as a team. Together."</h3>
          <div className={'d-flex'}>
            <StaticImage
              src={'../../images/sample-preson.png'}
              placeholder={'blurred'}
              alt={'sample person'}
              className={'mx-3'}
            />
            <div>
              <h5 className={'m-0'}>Matthijs Piëst</h5>
              <small>COO at WieBetaaltWatt</small>
            </div>
          </div>
        </Col>
        <Col>
          <h4>Pro-active attitude</h4>
          <p>"I love the fact that you spend time with us and that you ask the questions
            which go beyond solving problems."</p>
          <h5 className={'m-0'}>Rafal Okninski</h5>
          <small>CTO at BrickVest</small>
        </Col>
        <Col>
          <h4>Scaling-up abilities</h4>
          <p>"Their ability to scale easily without sacrificing performance or
            product quality stands our to us."</p>
          <h5 className={'m-0'}>Nick Gold</h5>
          <small>Managing Director at Speakers Corner</small>
        </Col>
      </Row>
      <Row className={'mb-5'}>
        <Col>
          <h4>Communication skills</h4>
          <p>"They're very responsive to any queries and are proactive in suggesting
            new ways to enhance our cooperation"</p>
          <h5 className={'m-0'}>Chief Architect</h5>
          <small>Vaana</small>
        </Col>
        <Col xs={{offset: 1, size: 4}}>
          <h1>Quality-driven process</h1>
          <h3>"There's a huge amount of trust we have in their ability to delive good-quality and reliable code.
            When talking about value, they are in a league of their own."</h3>
          <div className={'d-flex'}>
            <StaticImage
              src={'../../images/sample-preson.png'}
              placeholder={'blurred'}
              alt={'sample person'}
              className={'mx-3'}
            />
            <div>
              <h5 className={'m-0'}>
                Daniel Miles</h5>
              <small>Development Manager at Smartum</small>
            </div>
          </div>
        </Col>
        <Col  xs={{offset: 1, size: 2}}>
          <h4>Technical skills</h4>
          <p>“The quality of the developers is outstanding. They added great value to the project and were significant
            producers for the achievements of our delivery dates.”</p>
          <h5 className={'m-0'}>Michael Fussenegger</h5>
          <small>CTO at trommsdorff + drüner</small>
        </Col>
      </Row>
      <Row className={'mb-5'}>
        <Col>
          <h4>Complete package</h4>
          <p>“We just provided the concept. They did design, planning, development,
            and continue to provide maintenance. They did everything.”</p>
          <h5 className={'m-0'}>Yusuf Dashti</h5>
          <small>Co-Owner of Deliveryy</small>
        </Col>
        <Col xs={{offset: 1, size: 2}}>
          <h4>Pro-user approach</h4>
          <p>"The team has excellent intuition about how to positively impact users
            and make our app user-friendly.”</p>
          <h5 className={'m-0'}>Simon Lemonnier</h5>
          <small>IT Project Manager at Weenect</small>
        </Col>
        <Col  xs={{offset: 1, size: 5}}>
          <h1>Partnership approach</h1>
          <h3>“We felt like we had a true partner throughout the process.
            They were clearly interested on our long-term success.”</h3>
          <div className={'d-flex'}>
            <StaticImage
              src={'../../images/sample-preson.png'}
              placeholder={'blurred'}
              alt={'sample person'}
              className={'mx-3'}
            />
            <div>
              <h5 className={'m-0'}>Miłosz Baluś</h5>
              <small>CTO at Synerise</small>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

