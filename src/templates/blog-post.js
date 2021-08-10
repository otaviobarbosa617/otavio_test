import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import { Container } from "react-bootstrap";

export default function Template({data}) {
    const post = data.markdownRemark;

    return(
        <Layout>
            <Container fluid="md">
                <h4>{post.frontmatter.title}</h4>
                <hr></hr>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <p>All photos by <b>{post.frontmatter.author}</b> on {post.frontmatter.date}</p>
                    <div>
                    {post.frontmatter.tags.map(tag =>
                        <small>{tag}, </small> 
                    )}
                    </div>
                </div>
                <br></br>
                <Link to="/blog">Go Back</Link>
            </Container>
        </Layout>
    )
}

export const PostQuery = graphql`
    query BlogPostByPath {
        markdownRemark {
            html
            frontmatter {
                path
                title
                author
                date
                tags
                featuredimage
            }
        }
    }
`

// export const PostQuery = graphql`
//     query BlogPostByPath($path: String!) {
//         markdownRemark(frontmatter: { path: { eq: $path } }){
//             html
//             frontmatter {
//                 path
//                 title
//                 author
//                 date
//             }
//         }
//     }
// `