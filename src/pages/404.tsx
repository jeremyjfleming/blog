import * as React from "react"
import { Link } from "gatsby"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage: React.FC<PageProps> = () => (
  <Layout>
    <section className="mt-16">
      <h2 className="text-[0.75rem] font-mono uppercase tracking-[0.1em] text-[#666] mb-5">
        404
      </h2>
      <p className="text-[1.35rem] leading-[1.6]">Page not found.</p>
      <p className="mt-4 text-[#666]">
        <Link to="/" className="text-[#1a1a1a] underline underline-offset-[3px]">
          ← Back to all posts
        </Link>
      </p>
    </section>
  </Layout>
)

export default NotFoundPage

export const Head: HeadFC = () => <title>404 — Jeremy Fleming</title>
