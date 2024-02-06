import { graphql } from "gatsby"

const Page = ({ data }) => {}

export const query = graphql`
  query {
    allContentfulCuba {
      edges {
        node {
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
    }
  }
`

export default Page
