import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import { Section, List, AnimatedSection, Text } from "./styles"
import { Container } from "reactstrap"

const images = [
  {src: '../../../../images/agile.png', alt: 'Brand logo'}
]

export const BrandsSectionOne = () => {
  return (
    <Section>
      <Text>
        Trusted By
      </Text>
      <Container>
        <AnimatedSection>
          <div>
            <List>
              <li>
                <StaticImage src="../../images/google-logo.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/facebook-logo.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/junglescout.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/logo.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/random-logo.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/twich.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/google-logo.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/facebook-logo.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/junglescout.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/logo.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/random-logo.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/twich.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/google-logo.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/facebook-logo.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/junglescout.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/logo.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/random-logo.png" alt="" width={200}  className={'logo-image'}/>
              </li>
              <li>
                <StaticImage src="../../images/twich.png" alt="" width={200}  className={'logo-image'}/>
              </li>
            </List>
          </div>
        </AnimatedSection>
      </Container>
    </Section>
  )
}
