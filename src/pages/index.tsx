import * as React from "react"
import { graphql, Link } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

type PostNode = {
  id: string
  excerpt: string
  frontmatter: {
    title: string
    date: string
    slug: string
    description: string
  }
}

type DataProps = {
  allMdx: {
    nodes: PostNode[]
  }
}

const IndexPage: React.FC<PageProps<DataProps>> = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <Layout>
      <section className="mt-16">
        <h2 className="text-[0.75rem] font-mono uppercase tracking-[0.1em] text-[#666] mb-5">
          Writing
        </h2>
        <ul className="list-none p-0 m-0">
          {posts.map(post => (
            <li
              key={post.id}
              className="py-5 border-b border-[#ddd] grid grid-cols-[1fr_auto] gap-4 items-baseline first:border-t first:border-[#ddd]"
            >
              <div>
                <Link
                  to={`/blog/${post.frontmatter.slug}`}
                  className="font-bold text-base no-underline"
                >
                  {post.frontmatter.title}
                </Link>
                <p className="text-[0.9rem] text-[#666] mt-[0.2rem]">
                  {post.frontmatter.description || post.excerpt}
                </p>
              </div>
              <span className="font-mono text-[0.75rem] text-[#666] whitespace-nowrap">
                {post.frontmatter.date}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        excerpt
        frontmatter {
          title
          date
          slug
          description
        }
      }
    }
  }
`

export const Head: HeadFC = () => <title>Writing — Jeremy Fleming</title>

export default IndexPage
