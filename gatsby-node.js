const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const response = await graphql(`
    query {
      allContentfulCuba {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulCuba.edges.forEach(edge => {
    createPage({
      path: `/portfolio/${edge.node.slug}`,
      component: path.resolve("./src/templates/portfolio.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
