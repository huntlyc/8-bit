import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

const PostTemplate = ({ data }) => {
  const { title, date, author, image } = data.mdx.frontmatter
  const { body } = data.mdx
  const img = image.childImageSharp.fluid

  return (
    <Layout>
      <section>
        <Link className="btn btn--back" to="/">
          Back to all posts
        </Link>
        <div>
          <h1>{title}</h1>
          <h4>
            Posted on <span>{date}</span>
          </h4>
        </div>
        <image fluid={img} />
        <div>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
        <p>
          <Link className="btn btn--back" to="/">
            Back to all posts
          </Link>
        </p>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getPost($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date(formatString: "Do of MMMM, YYYY")
        author
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      body
    }
  }
`

export default PostTemplate
