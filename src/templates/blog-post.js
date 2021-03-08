import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout";

export default function Template({data}) {
    const post = data.markdownRemark;

    return(
        <Layout>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <h4>Post by {post.frontmatter.author} on {post.frontmatter.date}</h4>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <Link to="/blog">Go Back</Link>
            </div>
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