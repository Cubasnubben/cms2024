import React from "react"
import { graphql } from "gatsby"
import About from "../templates/about"
import Home from "../templates/home"
import Contact from "../templates/contact"
import Layout from "../components/layout"

const Page = ({ data }) => {
  const { contentfulPage } = data

  const getTemplate = () => {
    switch (contentfulPage.template) {
      case "About":
        return <About {...contentfulPage} />
      case "Contact":
        return <Contact {...contentfulPage} />
      default:
        return <Home {...contentfulPage} />
    }
  }

  return <Layout>{getTemplate()}</Layout>
}

export const query = graphql`
  query ($id: String) {
    contentfulPage(id: { eq: $id }) {
      url
      title
      template
      description {
        description
      }
      heroimage {
        gatsbyImage(width: 200)
      }
    }
  }
`

export default Page
