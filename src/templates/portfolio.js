import { graphql } from "gatsby"
import React from "react"

const Page = ({ data }) => {
  return <h2>{data.contentfulCuba.title}</h2>
}

export const query = graphql`
  query ($slug: String!) {
    contentfulCuba(slug: { eq: $slug }) {
      title
      description {
        description
      }
      siteimage {
        gatsbyImage(width: 200)
      }
      slug
    }
  }
`

export default Page
