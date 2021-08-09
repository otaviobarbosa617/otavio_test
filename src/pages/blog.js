import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import { Container } from "react-bootstrap"


const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" /> 
    <Container>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id }>
            <br></br>
            <h3>{post.node.frontmatter.title}</h3>
            <p>Post by {post.node.frontmatter.author} on {post.node.frontmatter.date}</p>
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
                        }
                    }
                }
            }    
        }
`
export default BlogPage
