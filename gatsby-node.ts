import type { GatsbyNode } from "gatsby"
import path from "path"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions
  const postTemplate = path.resolve("./src/templates/post.tsx")

  const result = await graphql<{
    allMdx: {
      nodes: Array<{
        id: string
        frontmatter: { slug: string }
        internal: { contentFilePath: string }
      }>
    }
  }>(`
    query CreatePages {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors)
    return
  }

  result.data!.allMdx.nodes.forEach(node => {
    createPage({
      path: `/blog/${node.frontmatter.slug}`,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}
