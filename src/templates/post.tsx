import * as React from "react"
import { graphql, Link } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

type DataProps = {
  mdx: {
    frontmatter: {
      title: string
      date: string
      description: string
    }
  }
}

const PostTemplate: React.FC<PageProps<DataProps>> = ({ data, children }) => {
  const { title, date } = data.mdx.frontmatter

  return (
    <Layout>
      <article className="mt-16">
        <header className="mb-10 pb-8 border-b border-[#ddd]">
          <h1 className="text-[2rem] font-normal tracking-[-0.01em] leading-tight">{title}</h1>
          <time className="mt-2 block font-mono text-[0.85rem] text-[#666]">{date}</time>
        </header>
        <div className="[&_p]:mb-5 [&_h2]:text-[0.75rem] [&_h2]:font-mono [&_h2]:uppercase [&_h2]:tracking-[0.1em] [&_h2]:text-[#666] [&_h2]:mt-10 [&_h2]:mb-5 [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:mb-5 [&_li]:mb-1 [&_code]:font-mono [&_code]:text-[0.85em] [&_code]:bg-[#f5f5f5] [&_code]:px-1 [&_code]:rounded [&_pre]:font-mono [&_pre]:text-[0.85em] [&_pre]:bg-[#f5f5f5] [&_pre]:p-4 [&_pre]:rounded [&_pre]:overflow-x-auto [&_pre]:mb-5 [&_blockquote]:border-l-2 [&_blockquote]:border-[#ddd] [&_blockquote]:pl-4 [&_blockquote]:text-[#666] [&_blockquote]:mb-5">
          {children}
        </div>
      </article>
      <div className="mt-10 pt-6 border-t border-[#ddd]">
        <Link
          to="/"
          className="font-mono text-[0.85rem] text-[#666] no-underline hover:text-[#1a1a1a] hover:opacity-100"
        >
          ← All Posts
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        description
      }
    }
  }
`

export const Head: HeadFC<DataProps> = ({ data }) => (
  <title>{data.mdx.frontmatter.title} — Jeremy Fleming</title>
)

export default PostTemplate
