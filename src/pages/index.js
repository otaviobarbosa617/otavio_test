import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"
import FirstGallery from "../components/firstgallery"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Container fluid="md">
    <h4>Weddings, elopements and engagements:</h4>
    <hr></hr>
      <FirstGallery></FirstGallery>
    </Container>
  </Layout>
)

export default IndexPage