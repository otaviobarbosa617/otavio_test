import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {StaticImage, GatsbyImage, getImage} from "gatsby-plugin-image"
import { Container } from "react-bootstrap"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>Wedding Photography</h1>
    <Container fluid="md">
      {data.fotos.edges.map(foto => (
        <div key={ foto.node.id }>
          <p><GatsbyImage image={foto.node.childImageSharp.thumb} alt={foto.node.name}/></p>
        </div>
      ))}
    </Container>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql `
  query {
    fotos: allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
      edges {
        node {
          id
          name
          childImageSharp {
            thumb: gatsbyImageData(
              height: 370 
              placeholder: BLURRED
              layout: CONSTRAINED
              )
            full: gatsbyImageData(
              width: 900 
              height: 900 
              layout: CONSTRAINED
              )
          }
        }
      }
    }
  }
`