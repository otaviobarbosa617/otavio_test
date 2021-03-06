import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap"

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" /> 
    <Container fluid="md">
    <h4>Latest Posts</h4>
    <hr></hr>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id }>
            <h4>{post.node.frontmatter.title}</h4>
            <p>{post.node.frontmatter.date}</p>
            <Link to={post.node.frontmatter.path}>Read More</Link>
            
        </div>
    ))}
    </Container> 
  </Layout>
)

export const pageQuery = graphql`
    query BlogIndexQuery {
            allMarkdownRemark {
                edges {
                    node {
                        id
                        frontmatter {
                            path
                            title
                            date
                            author
                            featuredimage
                        }
                    }
                }
            }    
        }
`
export default BlogPage
