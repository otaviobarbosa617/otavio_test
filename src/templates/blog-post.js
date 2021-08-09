import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import { Container } from "react-bootstrap";

export default function Template({data}) {
    const post = data.markdownRemark;

    return(
        <Layout>
            <Container>  
                <div>
                    <h4>{post.frontmatter.title}</h4>
                    <hr></hr>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <p>Post by <b>{post.frontmatter.author}</b> on {post.frontmatter.date}</p>
                    <Link to="/blog">Go Back</Link>
                </div>
            </Container>
        </Layout>
    )
}

export const PostQuery = graphql`
    query BlogPostByPath($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }){
            html
            frontmatter {
                path
                title
                author
                date
            }
        }
    }
`