import * as React from "react"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

// import { renderRichText } from "gatsby-source-contentful/rich-text"
// import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types"

//sidans namn blir portfolio efter namnet på javascript-filen
const SecondPage = () => {
  const data = useStaticQuery(graphql`
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
  `)

  return (
    <Layout>
      {/* <h1 className="header-text">KURSER</h1> */}
      <ul>
        {data.allContentfulCuba.edges.map(edge => {
          return (
            <section className="list">
              <li key={edge.node.id}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.description.description}</p>
                <div className="img-container">
                  <GatsbyImage
                    className="img"
                    alt={edge.node.title}
                    image={
                      edge.node.siteimage
                        ? edge.node.siteimage.gatsbyImage
                        : null
                    }
                  />
                </div>
              </li>
            </section>
          )
        })}
      </ul>
    </Layout>
  )
}

export const Head = () => <title>Cubas Sida</title>

export default SecondPage
