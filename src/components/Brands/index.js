import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { List, Section, Text } from "./styles"
import { Container } from "reactstrap"

const images = [
  { src: "../../../../images/agile.png", alt: "Brand logo" }
]

export const BrandsSectionOne = () => {
  return (
    <Section>
      <Text>
        Trusted By
      </Text>
      <Container>
        <List>
          <li>
            <StaticImage src="../../images/google-logo.png" alt="" width={200} className={"logo-image"} />
          </li>
          <li>
            <StaticImage src="../../images/facebook-logo.png" alt="" width={200} className={"logo-image"} />
          </li>
          <li>
            <StaticImage src="../../images/junglescout.png" alt="" width={200} className={"logo-image"} />
          </li>
          <li>
            <StaticImage src="../../images/random-logo.png" alt="" width={200} className={"logo-image"} />
          </li>
          <li>
            <StaticImage src="../../images/twich.png" alt="" width={200} className={"logo-image"} />
          </li>
        </List>
      </Container>
    </Section>
  )
}
