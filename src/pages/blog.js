import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { graphql } from 'gatsby'


const BlogPage = ({data}) => (
  <Layout>
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
        <div key={ post.node.id }>
            <br></br>
            <h3>{post.node.frontmatter.title}</h3>
            <small>Post by {post.node.frontmatter.author} on {post.node.frontmatter.date}</small>
            <br />
            <br/>
            <Link to={post.node.frontmatter.path}>Read More</Link>
        </div>
    ))}
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
